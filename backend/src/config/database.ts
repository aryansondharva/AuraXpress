import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Support both DATABASE_URL (common on Render) and individual variables
const getDatabaseConfig = () => {
  // Always prioritize individual variables if they're all set (completely ignore dashboard DATABASE_URL)
  if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME) {
    const isSupabase = !process.env.DB_HOST.includes('localhost');
    
    console.log('Using individual database variables');
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT || '5432');
    
    return {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      // Enable SSL for Supabase, disable for local
      ssl: isSupabase ? { rejectUnauthorized: false } : false,
      family: 4, // Force IPv4
      connectionTimeoutMillis: 10000, // 10 seconds timeout
      idleTimeoutMillis: 30000, // 30 seconds idle timeout
      keepAlive: true,
    };
  }
  
  // Only use DATABASE_URL as fallback when individual variables are NOT set
  if (process.env.DATABASE_URL) {
    console.log('DATABASE_URL detected as fallback (individual variables not set)');
    // Force IPv4 connection and proper SSL
    return {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      family: 4, // Force IPv4
      connectionTimeoutMillis: 10000, // 10 seconds timeout
      idleTimeoutMillis: 30000, // 30 seconds idle timeout
      keepAlive: true,
    };
  }
  
  // Otherwise, use individual variables (local development style)
  const isSupabase = process.env.DB_HOST && !process.env.DB_HOST.includes('localhost');
  
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME || 'auraexpress_auth',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    // Enable SSL for Supabase, disable for local
    ssl: isSupabase ? { rejectUnauthorized: false } : false,
    family: 4, // Force IPv4
    connectionTimeoutMillis: 10000, // 10 seconds timeout
    idleTimeoutMillis: 30000, // 30 seconds idle timeout
    keepAlive: true,
  };
};

export const pool = new Pool(getDatabaseConfig());

export const connectDatabase = async (): Promise<void> => {
  try {
    // Log connection attempt (without sensitive data)
    console.log('Attempting database connection...');
    console.log('DB_HOST:', process.env.DB_HOST || 'not set');
    console.log('DB_NAME:', process.env.DB_NAME || 'not set');
    console.log('Using SSL:', process.env.DB_HOST && !process.env.DB_HOST.includes('localhost'));
    
    // Debug: Log which connection method is being used
    if (process.env.DB_HOST && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_NAME) {
      console.log('Using individual database variables');
      console.log('DB_HOST:', process.env.DB_HOST);
      console.log('DB_PORT:', process.env.DB_PORT || '5432');
    } else if (process.env.DATABASE_URL) {
      const maskedUrl = process.env.DATABASE_URL.replace(/:([^:@]+)@/, ':***@');
      console.log('DATABASE_URL detected:', maskedUrl);
    } else {
      console.log('DATABASE_URL: not set, using individual variables');
    }
    
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    client.release();
  } catch (error) {
    console.error('❌ Database connection error:', error);
    throw error;
  }
};

export const disconnectDatabase = async (): Promise<void> => {
  await pool.end();
  console.log('Database connection closed');
};
