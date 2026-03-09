import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Target, Award, Heart, ShoppingCart, Package, Star, TrendingUp } from "lucide-react";
import { products, categories } from "@/data/products";

const values = [
  {
    icon: Target,
    title: "Hackathon Innovation",
    description: "Built in 48 hours with cutting-edge technology and modern development practices.",
  },
  {
    icon: Package,
    title: "Real Product Data",
    description: "40+ carefully curated products across 6 categories with accurate pricing and details.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Filtering",
    description: "Advanced search, category filters, and price range selection for better shopping experience.",
  },
  {
    icon: Heart,
    title: "User-Centric Design",
    description: "Responsive interface with smooth animations and intuitive navigation.",
  },
];

const About = () => {
  const [realTimeStats, setRealTimeStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    avgRating: 0,
    priceRange: { min: 0, max: 0 }
  });

  useEffect(() => {
    // Calculate real-time statistics from actual product data
    const totalProducts = products.length;
    const totalCategories = categories.length;
    const avgRating = (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1);
    const prices = products.map(p => p.price);
    const priceRange = {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };

    setRealTimeStats({
      totalProducts,
      totalCategories,
      avgRating: parseFloat(avgRating),
      priceRange
    });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              About <span className="text-gradient">AuraXpress</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A modern e-commerce platform built during a hackathon, showcasing innovation in web development and user experience
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Built in 48 Hours
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                Full-Stack Solution
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hackathon Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Hackathon Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AuraXpress was conceived and developed during an intense 48-hour hackathon session. 
                  Our team focused on creating a complete e-commerce solution that demonstrates modern 
                  web development capabilities and innovative user experience design.
                </p>
                <p>
                  Leveraging cutting-edge technologies including React, TypeScript, Node.js, and PostgreSQL, 
                  we built a scalable platform that handles real product data, user authentication, 
                  shopping cart functionality, and advanced filtering systems.
                </p>
                <p>
                  The platform features a carefully curated catalog of {realTimeStats.totalProducts} products 
                  across {realTimeStats.totalCategories} categories, with prices ranging from ₹{realTimeStats.priceRange.min} 
                  to ₹{realTimeStats.priceRange.max.toLocaleString()}, showcasing our ability to manage real-world 
                  e-commerce scenarios.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-primary">
                <div className="flex h-full items-center justify-center p-12">
                  <div className="text-center text-primary-foreground">
                    <p className="mb-4 text-6xl font-bold">48h</p>
                    <p className="text-xl">Hackathon Build</p>
                    <p className="mt-2 text-sm opacity-90">Full-Stack E-Commerce Platform</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-Time Stats Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Live Platform Statistics</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Real-time data from our actual product catalog
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="mb-2 text-5xl font-bold text-gradient">{realTimeStats.totalProducts}</p>
              <p className="text-muted-foreground">Active Products</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="mb-2 text-5xl font-bold text-gradient">{realTimeStats.totalCategories}</p>
              <p className="text-muted-foreground">Categories</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="mb-2 text-5xl font-bold text-gradient">{realTimeStats.avgRating}</p>
              <p className="text-muted-foreground">Avg Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="mb-2 text-5xl font-bold text-gradient">₹{realTimeStats.priceRange.min}-{(realTimeStats.priceRange.max/1000).toFixed(0)}K</p>
              <p className="text-muted-foreground">Price Range</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technology & Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Built with modern technologies and guided by innovation principles
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
