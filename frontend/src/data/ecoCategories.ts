import { EcoCategoryInfo } from "@/types/ecoProduct";

export const ecoCategories: EcoCategoryInfo[] = [
  {
    id: "clothing",
    name: "Sustainable Clothing",
    slug: "clothing",
    description: "Eco-friendly apparel made from organic, recycled, and sustainable materials",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "shirt"
  },
  {
    id: "home",
    name: "Eco Home",
    slug: "home",
    description: "Sustainable home goods for a greener living space",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "home"
  },
  {
    id: "personal-care",
    name: "Natural Personal Care",
    slug: "personal-care",
    description: "Organic and plastic-free personal care products",
    image: "https://images.unsplash.com/photo-1556228720-195a624e8d03?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "heart"
  },
  {
    id: "kitchen",
    name: "Sustainable Kitchen",
    slug: "kitchen",
    description: "Eco-friendly kitchenware and food storage solutions",
    image: "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "utensils"
  },
  {
    id: "electronics",
    name: "Green Electronics",
    slug: "electronics",
    description: "Sustainable tech and eco-friendly electronic accessories",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "smartphone"
  },
  {
    id: "sports",
    name: "Eco Sports",
    slug: "sports",
    description: "Sustainable athletic gear and eco-friendly fitness equipment",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "activity"
  },
  {
    id: "kids",
    name: "Eco Kids",
    slug: "kids",
    description: "Safe, sustainable, and eco-friendly products for children",
    image: "https://images.unsplash.com/photo-1516483638261-f19dbda07eb8?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "baby"
  },
  {
    id: "beauty",
    name: "Natural Beauty",
    slug: "beauty",
    description: "Organic, vegan, and cruelty-free beauty products",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "sparkles"
  },
  {
    id: "garden",
    name: "Sustainable Garden",
    slug: "garden",
    description: "Eco-friendly gardening supplies and sustainable outdoor products",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "leaf"
  },
  {
    id: "gifts",
    name: "Eco Gifts",
    slug: "gifts",
    description: "Thoughtful, sustainable gifts that make a positive impact",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    productCount: 4,
    icon: "gift"
  }
];

export const getEcoCategoryBySlug = (slug: string): EcoCategoryInfo | undefined => {
  return ecoCategories.find(category => category.slug === slug);
};

export const getEcoCategoryById = (id: string): EcoCategoryInfo | undefined => {
  return ecoCategories.find(category => category.id === id);
};
