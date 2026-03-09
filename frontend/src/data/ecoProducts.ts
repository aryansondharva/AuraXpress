import { EcoProduct } from "@/types/ecoProduct";

export const ecoProducts: EcoProduct[] = [
  // CLOTHING CATEGORY
  {
    id: "eco-001",
    name: "Organic Cotton Essential T-Shirt",
    category: "clothing",
    subcategory: "basics",
    price: 299,
    originalPrice: 399,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop"
    ],
    brand: "EcoWear",
    colors: ["white", "black", "navy", "forest-green", "earth-brown"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stockStatus: "in-stock",
    rating: 4.8,
    reviews: 342,
    description: "Premium organic cotton t-shirt made with GOTS certified organic cotton. Soft, breathable, and sustainably produced with minimal environmental impact.",
    ecoScore: {
      overall: 92,
      materials: 95,
      production: 88,
      packaging: 94,
      carbonFootprint: 90,
      durability: 93
    },
    certifications: ["ORGANIC", "FAIR_TRADE", "CARBON_NEUTRAL"],
    carbonFootprint: 2.3,
    packaging: "compostable-bag",
    sustainableFeatures: [
      "100% GOTS certified organic cotton",
      "Water-based eco-friendly dyes",
      "Fair trade certified production",
      "Carbon neutral manufacturing process",
      "Biodegradable packaging",
      "Machine washable, long-lasting design",
      "Ethically made in certified facilities"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "India, Maharashtra",
        description: "Organic cotton farms using regenerative agriculture practices",
        icon: "leaf",
        impact: "Supports 200+ local farmers, saves 500L water per t-shirt"
      },
      {
        step: "Manufactured",
        location: "Portugal, Lisbon",
        description: "Renewable energy powered facility with fair wages",
        icon: "factory",
        impact: "Zero waste production, 100% renewable energy"
      },
      {
        step: "Packaged",
        location: "Germany, Berlin",
        description: "Compostable packaging made from corn starch",
        icon: "package",
        impact: "Plastic-free, fully biodegradable within 90 days"
      }
    ],
    tags: ["bestseller", "eco-champion", "basic-essential", "vegan-friendly"]
  },
  {
    id: "eco-002",
    name: "Recycled Polyester Athletic Leggings",
    category: "clothing",
    subcategory: "activewear",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517891907240-ceaf1d5a1b36?w=600&h=600&fit=crop"
    ],
    brand: "GreenFit",
    colors: ["black", "navy", "burgundy", "olive", "charcoal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stockStatus: "in-stock",
    rating: 4.7,
    reviews: 218,
    description: "High-performance athletic leggings made from 89% recycled polyester derived from plastic bottles. Moisture-wicking, four-way stretch, and quick-drying.",
    ecoScore: {
      overall: 88,
      materials: 92,
      production: 85,
      packaging: 90,
      carbonFootprint: 86,
      durability: 87
    },
    certifications: ["RECYCLED", "CARBON_NEUTRAL", "FAIR_TRADE"],
    carbonFootprint: 3.8,
    packaging: "recycled-paper",
    sustainableFeatures: [
      "Made from 25 recycled plastic bottles per pair",
      "Bluesign® approved dyes and chemicals",
      "Flatlock seams to reduce waste",
      "Anti-microbial treatment reduces washing frequency",
      "Recyclable at end of life",
      "Ethically manufactured in fair-wage facilities",
      "Moisture-wicking reduces water usage in laundry"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Global Ocean Cleanup Initiatives",
        description: "Ocean plastic collected and processed into recycled polyester",
        icon: "globe",
        impact: "Removes 25 plastic bottles from oceans per leggings"
      },
      {
        step: "Manufactured",
        location: "Vietnam, Ho Chi Minh City",
        description: "Fair trade certified factory with solar panels",
        icon: "factory",
        impact: "60% renewable energy, fair wages guaranteed"
      },
      {
        step: "Packaged",
        location: "USA, California",
        description: "100% recycled and recyclable paper packaging",
        icon: "package",
        impact: "Zero plastic packaging, fully recyclable"
      }
    ],
    tags: ["trending", "workout-essential", "ocean-saved", "plastic-free"]
  },
  {
    id: "eco-003",
    name: "Hemp Fiber Summer Dress",
    category: "clothing",
    subcategory: "dresses",
    price: 1499,
    originalPrice: 1899,
    discount: 21,
    imageUrls: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1539008764793-8fa4516d0d3a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-543f2e9c8128?w=600&h=600&fit=crop"
    ],
    brand: "Hemp Haven",
    colors: ["natural", "sage", "terracotta", "sand", "slate"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stockStatus: "in-stock",
    rating: 4.9,
    reviews: 156,
    description: "Beautiful summer dress made from sustainable hemp fiber. Naturally breathable, UV resistant, and gets softer with each wash. Perfect for eco-conscious fashion lovers.",
    ecoScore: {
      overall: 94,
      materials: 96,
      production: 92,
      packaging: 95,
      carbonFootprint: 93,
      durability: 94
    },
    certifications: ["ORGANIC", "VEGAN", "CARBON_NEUTRAL"],
    carbonFootprint: 1.8,
    packaging: "hemp-fabric-bag",
    sustainableFeatures: [
      "Hemp requires 50% less water than cotton",
      "Naturally pest-resistant, no pesticides needed",
      "Carbon negative crop - absorbs CO2 during growth",
      "Biodegradable at end of life",
      "Gets softer with each wash, lasts longer",
      "Natural UV protection",
      "Dyed with plant-based, non-toxic dyes"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Yunnan Province",
        description: "Family-owned hemp farms using traditional methods",
        icon: "leaf",
        impact: "Supports sustainable agriculture, carbon negative farming"
      },
      {
        step: "Manufactured",
        location: "Netherlands, Amsterdam",
        description: "Wind-powered facility with living wage policies",
        icon: "factory",
        impact: "100% renewable energy, zero waste production"
      },
      {
        step: "Packaged",
        location: "France, Lyon",
        description: "Reusable hemp fabric bag with soy-based ink",
        icon: "package",
        impact: "Reusable packaging, zero plastic, compostable tags"
      }
    ],
    tags: ["summer-essential", "carbon-negative", "vegan-friendly", "bestseller"]
  },
  {
    id: "eco-004",
    name: "Bamboo Fiber Underwear Set",
    category: "clothing",
    subcategory: "intimates",
    price: 599,
    originalPrice: 799,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1523381294911-8d321ad3d12d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1490481651871-ab68de25343c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop"
    ],
    brand: "Bamboo Basics",
    colors: ["natural", "black", "grey", "pink", "blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 289,
    description: "Ultra-soft underwear set made from organic bamboo fiber. Naturally antibacterial, moisture-wicking, and hypoallergenic. Includes 3 pieces per set.",
    ecoScore: {
      overall: 90,
      materials: 93,
      production: 87,
      packaging: 91,
      carbonFootprint: 89,
      durability: 90
    },
    certifications: ["ORGANIC", "VEGAN", "OEKO_TEX"],
    carbonFootprint: 1.2,
    packaging: "bamboo-box",
    sustainableFeatures: [
      "Bamboo grows 10x faster than traditional timber",
      "Naturally antibacterial, reduces washing frequency",
      "Biodegradable and compostable",
      "Requires minimal water and no pesticides",
      "Carbon neutral manufacturing process",
      "Hypoallergenic and perfect for sensitive skin",
      "Packaged in reusable bamboo boxes"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Sichuan Province",
        description: "Sustainably managed bamboo forests",
        icon: "leaf",
        impact: "Bamboo absorbs 35% more CO2 than equivalent trees"
      },
      {
        step: "Manufactured",
        location: "Taiwan, Taipei",
        description: "Closed-loop system with water recycling",
        icon: "factory",
        impact: "95% water recycled, zero chemical discharge"
      },
      {
        step: "Packaged",
        location: "Japan, Kyoto",
        description: "Reusable bamboo boxes with minimal packaging",
        icon: "package",
        impact: "Zero plastic, reusable packaging system"
      }
    ],
    tags: ["daily-essential", "hypoallergenic", "antibacterial", "eco-champion"]
  },

  // HOME CATEGORY
  {
    id: "eco-005",
    name: "Cork Yoga Mat",
    category: "home",
    subcategory: "wellness",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    imageUrls: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
    ],
    brand: "EarthYoga",
    colors: ["natural-cork", "cork-blue", "cork-green"],
    sizes: ["standard", "extra-long"],
    stockStatus: "in-stock",
    rating: 4.8,
    reviews: 412,
    description: "Premium yoga mat made from sustainable cork and natural rubber. Excellent grip, antimicrobial properties, and fully biodegradable. Perfect for hot yoga and all practice styles.",
    ecoScore: {
      overall: 93,
      materials: 95,
      production: 91,
      packaging: 94,
      carbonFootprint: 92,
      durability: 93
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "CARBON_NEUTRAL"],
    carbonFootprint: 4.2,
    packaging: "recycled-cardboard",
    sustainableFeatures: [
      "Cork is harvested without harming trees",
      "Naturally antimicrobial - no chemical treatments needed",
      "100% biodegradable and compostable",
      "Superior grip that improves with use",
      "Carbon negative cork harvesting process",
      "Natural rubber base from sustainable plantations",
      "Plastic-free packaging with soy-based inks"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Portugal, Alentejo",
        description: "Cork oak forests harvested using traditional methods",
        icon: "leaf",
        impact: "Supports forest preservation, cork regenerates every 9 years"
      },
      {
        step: "Manufactured",
        location: "Spain, Barcelona",
        description: "Solar-powered facility with fair labor practices",
        icon: "factory",
        impact: "100% renewable energy, zero waste production"
      },
      {
        step: "Packaged",
        location: "Portugal, Lisbon",
        description: "Recycled cardboard box with minimal printing",
        icon: "package",
        impact: "Fully recyclable packaging, soy-based inks only"
      }
    ],
    tags: ["bestseller", "yoga-essential", "plastic-free", "carbon-negative"]
  },
  {
    id: "eco-006",
    name: "Recycled Glass Water Bottle Set",
    category: "home",
    subcategory: "kitchen",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1602143407151-71124209d9af?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop"
    ],
    brand: "PureGlass",
    colors: ["clear", "blue-tint", "green-tint", "amber"],
    sizes: ["500ml", "750ml", "1L"],
    stockStatus: "in-stock",
    rating: 4.7,
    reviews: 324,
    description: "Set of 3 elegant water bottles made from 100% recycled glass. Includes bamboo caps and protective sleeves. Dishwasher safe and infinitely recyclable.",
    ecoScore: {
      overall: 91,
      materials: 94,
      production: 88,
      packaging: 92,
      carbonFootprint: 90,
      durability: 91
    },
    certifications: ["RECYCLED", "PLASTIC_FREE", "CARBON_NEUTRAL"],
    carbonFootprint: 1.5,
    packaging: "recycled-paper",
    sustainableFeatures: [
      "Made from 100% post-consumer recycled glass",
      "Bamboo caps from sustainable sources",
      "Infinitely recyclable without quality loss",
      "Natural cork sleeves for protection",
      "Dishwasher safe, reduces need for replacement",
      "Zero plastic in packaging or product",
      "Carbon neutral manufacturing process"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Local Recycling Centers, Europe",
        description: "Post-consumer glass collected and sorted",
        icon: "recycle",
        impact: "Diverts glass from landfills, reduces raw material extraction"
      },
      {
        step: "Manufactured",
        location: "Germany, Munich",
        description: "Energy-efficient furnace with recycled content",
        icon: "factory",
        impact: "30% less energy than virgin glass production"
      },
      {
        step: "Packaged",
        location: "Sweden, Stockholm",
        description: "100% recycled paper with minimal printing",
        icon: "package",
        impact: "Zero plastic, fully recyclable packaging"
      }
    ],
    tags: ["kitchen-essential", "plastic-free", "zero-waste", "bestseller"]
  },
  {
    id: "eco-007",
    name: "Organic Cotton Throw Pillows",
    category: "home",
    subcategory: "decor",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    imageUrls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=600&fit=crop"
    ],
    brand: "CozyEarth",
    colors: ["cream", "sage", "terracotta", "navy", "charcoal"],
    sizes: ["standard", "square", "lumbar"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 198,
    description: "Set of 2 decorative throw pillows made from GOTS certified organic cotton. Includes removable covers with natural coconut fiber filling. Hypoallergenic and machine washable.",
    ecoScore: {
      overall: 89,
      materials: 92,
      production: 86,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["ORGANIC", "FAIR_TRADE", "VEGAN"],
    carbonFootprint: 2.8,
    packaging: "cotton-bag",
    sustainableFeatures: [
      "GOTS certified organic cotton cover",
      "Natural coconut fiber filling (no synthetic foam)",
      "Removable and washable covers",
      "Biodegradable filling material",
      "Fair trade certified production",
      "Natural dyes, no chemical treatments",
      "Packaged in reusable cotton bags"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "India, Gujarat",
        description: "Organic cotton farms and coconut coir producers",
        icon: "leaf",
        impact: "Supports 150+ farmers, pesticide-free farming"
      },
      {
        step: "Manufactured",
        location: "Sri Lanka, Colombo",
        description: "Fair trade workshop with living wages",
        icon: "factory",
        impact: "Empowers local artisans, fair working conditions"
      },
      {
        step: "Packaged",
        location: "India, Mumbai",
        description: "Reusable organic cotton bags",
        icon: "package",
        impact: "Zero plastic, reusable packaging system"
      }
    ],
    tags: ["home-essential", "hypoallergenic", "fair-trade", "organic"]
  },
  {
    id: "eco-008",
    name: "Bamboo Storage Basket Set",
    category: "home",
    subcategory: "organization",
    price: 999,
    originalPrice: 1399,
    discount: 29,
    imageUrls: [
      "https://images.unsplash.com/photo-1554653953-7b60c0d2a5f8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop"
    ],
    brand: "Bamboo Organics",
    colors: ["natural", "dark-brown", "caramel"],
    sizes: ["small", "medium", "large"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 167,
    description: "Set of 3 woven bamboo storage baskets with handles. Perfect for organizing any room while adding natural beauty. Durable, lightweight, and sustainable.",
    ecoScore: {
      overall: 92,
      materials: 94,
      production: 90,
      packaging: 93,
      carbonFootprint: 91,
      durability: 92
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "CARBON_NEUTRAL"],
    carbonFootprint: 3.2,
    packaging: "minimal-cardboard",
    sustainableFeatures: [
      "100% sustainably harvested bamboo",
      "Natural weaving, no synthetic materials",
      "Biodegradable and compostable",
      "Lightweight yet durable construction",
      "Carbon negative bamboo harvesting",
      "No chemical treatments or finishes",
      "Minimal packaging, zero plastic"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Vietnam, Mekong Delta",
        description: "Sustainably managed bamboo groves",
        icon: "leaf",
        impact: "Bamboo regenerates quickly, carbon negative crop"
      },
      {
        step: "Manufactured",
        location: "Vietnam, Hanoi",
        description: "Traditional weaving cooperatives",
        icon: "factory",
        impact: "Supports local artisans, traditional craft preservation"
      },
      {
        step: "Packaged",
        location: "Vietnam, Ho Chi Minh City",
        description: "Minimal recycled cardboard packaging",
        icon: "package",
        impact: "Zero plastic, minimal waste packaging"
      }
    ],
    tags: ["organization-essential", "plastic-free", "handmade", "carbon-negative"]
  },

  // PERSONAL CARE CATEGORY
  {
    id: "eco-009",
    name: "Bamboo Toothbrush Set",
    category: "personal-care",
    subcategory: "oral-care",
    price: 299,
    originalPrice: 399,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753056-9228ddd37d3f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753056-9228ddd37d3f?w=600&h=600&fit=crop"
    ],
    brand: "EcoSmile",
    colors: ["natural", "black", "blue", "green", "pink"],
    sizes: ["adult", "child"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 523,
    description: "Set of 4 bamboo toothbrushes with soft BPA-free bristles. Handles made from sustainable bamboo, fully biodegradable except bristles. Includes travel case.",
    ecoScore: {
      overall: 87,
      materials: 90,
      production: 84,
      packaging: 89,
      carbonFootprint: 86,
      durability: 86
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "BPA_FREE"],
    carbonFootprint: 0.8,
    packaging: "recycled-paper",
    sustainableFeatures: [
      "Bamboo handles - naturally antimicrobial",
      "BPA-free soft nylon bristles",
      "Fully biodegradable handle",
      "Recyclable bristles (remove before composting)",
      "Plastic-free packaging",
      "Carbon neutral manufacturing",
      "Includes reusable bamboo travel case"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Zhejiang Province",
        description: "Sustainably managed bamboo forests",
        icon: "leaf",
        impact: "Bamboo grows rapidly, no pesticides needed"
      },
      {
        step: "Manufactured",
        location: "China, Ningbo",
        description: "Fair wage factory with renewable energy",
        icon: "factory",
        impact: "Solar powered, fair labor practices"
      },
      {
        step: "Packaged",
        location: "China, Shanghai",
        description: "Recycled paper box with soy-based inks",
        icon: "package",
        impact: "Zero plastic, fully recyclable packaging"
      }
    ],
    tags: ["daily-essential", "plastic-free", "zero-waste", "bestseller"]
  },
  {
    id: "eco-010",
    name: "Organic Shampoo Bar Set",
    category: "personal-care",
    subcategory: "hair-care",
    price: 599,
    originalPrice: 799,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop"
    ],
    brand: "PureLocks",
    colors: ["lavender", "rosemary", "mint", "citrus", "tea-tree"],
    sizes: ["65g", "90g"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 389,
    description: "Set of 3 organic shampoo bars with different scents. Each bar equals 2-3 plastic bottles of liquid shampoo. Sulfate-free and suitable for all hair types.",
    ecoScore: {
      overall: 91,
      materials: 93,
      production: 89,
      packaging: 94,
      carbonFootprint: 88,
      durability: 91
    },
    certifications: ["ORGANIC", "VEGAN", "PLASTIC_FREE"],
    carbonFootprint: 1.2,
    packaging: "paper-box",
    sustainableFeatures: [
      "100% organic ingredients, no sulfates",
      "Plastic-free alternative to bottled shampoo",
      "Concentrated formula - lasts 2-3x longer",
      "Biodegradable and safe for waterways",
      "Palm oil free formula",
      "Minimal packaging - paper boxes only",
      "Cruelty-free and vegan certified"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "UK, Various Organic Farms",
        description: "Organic herbs and essential oils",
        icon: "leaf",
        impact: "Supports organic farming, no pesticides"
      },
      {
        step: "Manufactured",
        location: "UK, London",
        description: "Small batch, cold process production",
        icon: "factory",
        impact: "Low energy process, supports local economy"
      },
      {
        step: "Packaged",
        location: "UK, Manchester",
        description: "Recycled paper boxes with minimal printing",
        icon: "package",
        impact: "Zero plastic, fully recyclable packaging"
      }
    ],
    tags: ["hair-essential", "plastic-free", "organic", "zero-waste"]
  },
  {
    id: "eco-011",
    name: "Reusable Makeup Remover Pads",
    category: "personal-care",
    subcategory: "skincare",
    price: 399,
    originalPrice: 599,
    discount: 33,
    imageUrls: [
      "https://images.unsplash.com/photo-1556228720-195a624e8d03?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
    ],
    brand: "EcoBeauty",
    colors: ["natural", "pink", "blue", "grey"],
    sizes: ["round", "heart"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 467,
    description: "Set of 12 reusable makeup remover pads made from organic cotton and bamboo. Includes mesh laundry bag. Soft, absorbent, and machine washable.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["ORGANIC", "VEGAN", "PLASTIC_FREE"],
    carbonFootprint: 0.6,
    packaging: "cotton-bag",
    sustainableFeatures: [
      "Organic cotton and bamboo blend",
      "Replaces 1000+ disposable cotton pads",
      "Machine washable and long-lasting",
      "Comes with reusable mesh laundry bag",
      "Biodegradable at end of life",
      "Soft on sensitive skin",
      "Zero plastic packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "India, Organic Cotton Farms",
        description: "GOTS certified organic cotton",
        icon: "leaf",
        impact: "Supports sustainable farming, fair trade"
      },
      {
        step: "Manufactured",
        location: "India, Jaipur",
        description: "Fair trade workshop, women-led",
        icon: "factory",
        impact: "Empowers women artisans, fair wages"
      },
      {
        step: "Packaged",
        location: "India, Delhi",
        description: "Reusable cotton bag with mesh laundry bag",
        icon: "package",
        impact: "Zero plastic, reusable packaging system"
      }
    ],
    tags: ["skincare-essential", "zero-waste", "reusable", "bestseller"]
  },
  {
    id: "eco-012",
    name: "Natural Deodorant Stick",
    category: "personal-care",
    subcategory: "body-care",
    price: 349,
    originalPrice: 449,
    discount: 22,
    imageUrls: [
      "https://images.unsplash.com/photo-1556228720-195a624e8d03?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
    ],
    brand: "FreshGuard",
    colors: ["lavender", "citrus", "unscented", "tea-tree", "sage"],
    sizes: ["2.5oz"],
    stockStatus: "in-stock",
    rating: 4.3,
    reviews: 298,
    description: "Aluminum-free natural deodorant in cardboard tube. Effective 24-hour protection with essential oils. No harsh chemicals or synthetic fragrances.",
    ecoScore: {
      overall: 88,
      materials: 90,
      production: 86,
      packaging: 92,
      carbonFootprint: 85,
      durability: 87
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "ALUMINUM_FREE"],
    carbonFootprint: 0.4,
    packaging: "cardboard-tube",
    sustainableFeatures: [
      "Aluminum-free and paraben-free",
      "Cardboard push-up tube, no plastic",
      "Natural essential oil fragrances",
      "Biodegradable formula",
      "Cruelty-free and vegan",
      "Effective without harsh chemicals",
      "Compostable packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Various Organic Farms",
        description: "Organic essential oils and butters",
        icon: "leaf",
        impact: "Supports US organic farmers"
      },
      {
        step: "Manufactured",
        location: "USA, Oregon",
        description: "Small batch, solar-powered facility",
        icon: "factory",
        impact: "100% renewable energy, local production"
      },
      {
        step: "Packaged",
        location: "USA, California",
        description: "Recycled cardboard tubes",
        icon: "package",
        impact: "Zero plastic, fully compostable packaging"
      }
    ],
    tags: ["daily-essential", "plastic-free", "natural", "aluminum-free"]
  },

  // KITCHEN CATEGORY
  {
    id: "eco-013",
    name: "Beeswax Food Wraps",
    category: "kitchen",
    subcategory: "food-storage",
    price: 699,
    originalPrice: 899,
    discount: 22,
    imageUrls: [
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602143407151-71124209d9af?w=600&h=600&fit=crop"
    ],
    brand: "WrapFresh",
    colors: ["honey", "blue", "green", "pink", "assorted"],
    sizes: ["small", "medium", "large"],
    stockStatus: "in-stock",
    rating: 4.7,
    reviews: 445,
    description: "Set of 6 reusable beeswax food wraps. Natural alternative to plastic wrap. Washable, reusable for up to 1 year, and fully compostable at end of life.",
    ecoScore: {
      overall: 90,
      materials: 92,
      production: 88,
      packaging: 91,
      carbonFootprint: 89,
      durability: 90
    },
    certifications: ["PLASTIC_FREE", "ORGANIC", "COMPOSTABLE"],
    carbonFootprint: 0.9,
    packaging: "paper-box",
    sustainableFeatures: [
      "100% cotton fabric with organic beeswax",
      "Replaces hundreds of plastic wrap sheets",
      "Washable and reusable for 12+ months",
      "Fully compostable at end of life",
      "Antibacterial properties of beeswax",
      "Supports local beekeepers",
      "Plastic-free packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Local Beekeepers",
        description: "Organic beeswax from sustainable apiaries",
        icon: "bee",
        impact: "Supports bee populations and local beekeepers"
      },
      {
        step: "Manufactured",
        location: "USA, Vermont",
        description: "Handcrafted in small batches",
        icon: "factory",
        impact: "Supports local artisans, traditional craft"
      },
      {
        step: "Packaged",
        location: "USA, Vermont",
        description: "Recycled paper box with minimal printing",
        icon: "package",
        impact: "Zero plastic, fully recyclable packaging"
      }
    ],
    tags: ["kitchen-essential", "plastic-free", "zero-waste", "bestseller"]
  },
  {
    id: "eco-014",
    name: "Silicone Food Storage Bags",
    category: "kitchen",
    subcategory: "food-storage",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    imageUrls: [
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop"
    ],
    brand: "SealFresh",
    colors: ["clear", "blue", "green", "pink"],
    sizes: ["small", "medium", "large"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 378,
    description: "Set of 4 reusable silicone food storage bags. Airtight seals, freezer safe, dishwasher safe, and oven safe up to 450°F. Replaces 500+ disposable bags.",
    ecoScore: {
      overall: 86,
      materials: 88,
      production: 84,
      packaging: 89,
      carbonFootprint: 83,
      durability: 86
    },
    certifications: ["PLASTIC_FREE", "BPA_FREE", "FOOD_SAFE"],
    carbonFootprint: 2.1,
    packaging: "recycled-cardboard",
    sustainableFeatures: [
      "100% food-grade silicone, no BPA",
      "Replaces 500+ disposable plastic bags",
      "Dishwasher, freezer, and oven safe",
      "Infinitely reusable and durable",
      "Heat resistant up to 450°F",
      "Non-porous, prevents bacterial growth",
      "Recyclable at specialized facilities"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Germany, Medical Grade Silicone",
        description: "High-quality, food-safe silicone",
        icon: "leaf",
        impact: "Premium material ensures longevity and safety"
      },
      {
        step: "Manufactured",
        location: "Germany, Munich",
        description: "Precision manufacturing with quality control",
        icon: "factory",
        impact: "High standards, minimal waste production"
      },
      {
        step: "Packaged",
        location: "Germany, Berlin",
        description: "Recycled cardboard with minimal printing",
        icon: "package",
        impact: "Zero plastic packaging, fully recyclable"
      }
    ],
    tags: ["kitchen-essential", "plastic-free", "reusable", "durable"]
  },
  {
    id: "eco-015",
    name: "Bamboo Cutting Board Set",
    category: "kitchen",
    subcategory: "utensils",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    imageUrls: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=600&fit=crop"
    ],
    brand: "Bamboo Kitchen",
    colors: ["natural", "dark", "carbonized"],
    sizes: ["small", "medium", "large"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 267,
    description: "Set of 3 bamboo cutting boards with juice grooves. Naturally antimicrobial, gentle on knives, and sustainable. Includes bamboo maintenance oil.",
    ecoScore: {
      overall: 91,
      materials: 93,
      production: 89,
      packaging: 92,
      carbonFootprint: 90,
      durability: 91
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "CARBON_NEUTRAL"],
    carbonFootprint: 2.8,
    packaging: "minimal-cardboard",
    sustainableFeatures: [
      "100% sustainably harvested bamboo",
      "Naturally antimicrobial properties",
      "Gentle on knives, extends knife life",
      "Biodegradable and compostable",
      "Carbon negative bamboo harvesting",
      "Includes natural bamboo maintenance oil",
      "Minimal packaging, zero plastic"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Anhui Province",
        description: "Sustainably managed bamboo forests",
        icon: "leaf",
        impact: "Bamboo regenerates quickly, carbon negative crop"
      },
      {
        step: "Manufactured",
        location: "China, Fujian",
        description: "Traditional woodworking with modern techniques",
        icon: "factory",
        impact: "Supports local artisans, traditional skills"
      },
      {
        step: "Packaged",
        location: "China, Shanghai",
        description: "Minimal recycled cardboard packaging",
        icon: "package",
        impact: "Zero plastic, minimal waste packaging"
      }
    ],
    tags: ["kitchen-essential", "plastic-free", "antimicrobial", "sustainable"]
  },
  {
    id: "eco-016",
    name: "Compostable Dish Scrubbers",
    category: "kitchen",
    subcategory: "cleaning",
    price: 349,
    originalPrice: 449,
    discount: 22,
    imageUrls: [
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop"
    ],
    brand: "EcoClean",
    colors: ["natural", "green", "blue"],
    sizes: ["standard"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 189,
    description: "Set of 3 compostable dish scrubbers made from coconut fiber and sustainable wood. Effective cleaning without microplastics. Fully compostable after use.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["PLASTIC_FREE", "COMPOSTABLE", "VEGAN"],
    carbonFootprint: 0.7,
    packaging: "paper-sleeve",
    sustainableFeatures: [
      "Coconut fiber bristles, no plastic",
      "Sustainable wood handles",
      "Fully compostable after use",
      "No microplastic pollution",
      "Effective on tough stains",
      "Biodegradable cleaning action",
      "Plastic-free packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Sri Lanka, Coconut Farms",
        description: "Coconut fiber and sustainable wood",
        icon: "leaf",
        impact: "Uses agricultural byproducts, supports farmers"
      },
      {
        step: "Manufactured",
        location: "Sri Lanka, Colombo",
        description: "Fair trade workshop, handcrafted",
        icon: "factory",
        impact: "Fair wages, traditional craft preservation"
      },
      {
        step: "Packaged",
        location: "Sri Lanka, Colombo",
        description: "Paper sleeve with minimal printing",
        icon: "package",
        impact: "Zero plastic, fully compostable packaging"
      }
    ],
    tags: ["cleaning-essential", "plastic-free", "compostable", "microplastic-free"]
  },

  // ELECTRONICS CATEGORY
  {
    id: "eco-017",
    name: "Solar Power Bank",
    category: "electronics",
    subcategory: "power",
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
    ],
    brand: "SolarTech",
    colors: ["black", "blue", "green"],
    sizes: ["10000mAh", "20000mAh"],
    stockStatus: "in-stock",
    rating: 4.3,
    reviews: 234,
    description: "Solar-powered power bank with 20,000mAh capacity. Dual USB ports, LED flashlight, and rugged design. Perfect for outdoor adventures and emergency backup.",
    ecoScore: {
      overall: 83,
      materials: 85,
      production: 81,
      packaging: 86,
      carbonFootprint: 80,
      durability: 83
    },
    certifications: ["CARBON_NEUTRAL", "RECYCLED", "ENERGY_STAR"],
    carbonFootprint: 5.2,
    packaging: "recycled-cardboard",
    sustainableFeatures: [
      "Solar panel charging capability",
      "Recycled plastic housing",
      "Replaceable battery design",
      "Energy efficient charging",
      "Durable design extends lifespan",
      "Carbon neutral manufacturing",
      "Minimal packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Germany, Solar Panel Manufacturers",
        description: "High-efficiency solar cells",
        icon: "sun",
        impact: "Renewable energy technology development"
      },
      {
        step: "Manufactured",
        location: "Germany, Berlin",
        description: "Renewable energy powered facility",
        icon: "factory",
        impact: "100% renewable energy, carbon neutral"
      },
      {
        step: "Packaged",
        location: "Germany, Munich",
        description: "Recycled cardboard with minimal printing",
        icon: "package",
        impact: "Zero plastic packaging, fully recyclable"
      }
    ],
    tags: ["tech-essential", "renewable-energy", "outdoor", "emergency"]
  },
  {
    id: "eco-018",
    name: "Bamboo Wireless Charger",
    category: "electronics",
    subcategory: "accessories",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop"
    ],
    brand: "EcoCharge",
    colors: ["natural", "dark", "carbonized"],
    sizes: ["standard"],
    stockStatus: "in-stock",
    rating: 4.2,
    reviews: 156,
    description: "Elegant wireless charging pad made from sustainable bamboo. Fast charging for all Qi-enabled devices. LED indicator and non-slip base.",
    ecoScore: {
      overall: 85,
      materials: 88,
      production: 82,
      packaging: 87,
      carbonFootprint: 83,
      durability: 85
    },
    certifications: ["PLASTIC_FREE", "CARBON_NEUTRAL", "QI_CERTIFIED"],
    carbonFootprint: 2.9,
    packaging: "bamboo-box",
    sustainableFeatures: [
      "Sustainable bamboo housing",
      "Energy efficient charging",
      "No plastic in construction",
      "Biodegradable materials",
      "Carbon neutral manufacturing",
      "Minimal electronic components",
      "Bamboo packaging box"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Anhui Province",
        description: "Sustainably harvested bamboo",
        icon: "leaf",
        impact: "Carbon negative bamboo harvesting"
      },
      {
        step: "Manufactured",
        location: "China, Shenzhen",
        description: "Fair wage electronics assembly",
        icon: "factory",
        impact: "Fair labor, energy efficient production"
      },
      {
        step: "Packaged",
        location: "China, Guangzhou",
        description: "Bamboo box with minimal printing",
        icon: "package",
        impact: "Zero plastic, reusable packaging"
      }
    ],
    tags: ["tech-essential", "plastic-free", "minimalist", "sustainable"]
  },
  {
    id: "eco-019",
    name: "Recycled Plastic Headphones",
    category: "electronics",
    subcategory: "audio",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    imageUrls: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032de547870?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
    ],
    brand: "EcoSound",
    colors: ["black", "blue", "green", "white"],
    sizes: ["standard"],
    stockStatus: "in-stock",
    rating: 4.1,
    reviews: 198,
    description: "Over-ear headphones made from 80% recycled plastic. Premium sound quality, noise cancellation, and 30-hour battery life. Replaceable parts for longevity.",
    ecoScore: {
      overall: 78,
      materials: 82,
      production: 75,
      packaging: 80,
      carbonFootprint: 76,
      durability: 78
    },
    certifications: ["RECYCLED", "CARBON_NEUTRAL", "FAIR_TRADE"],
    carbonFootprint: 6.8,
    packaging: "recycled-paper",
    sustainableFeatures: [
      "80% recycled plastic housing",
      "Replaceable battery and ear pads",
      "Repairable design philosophy",
      "Carbon neutral manufacturing",
      "Energy efficient components",
      "Recyclable at end of life",
      "Minimal packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Global, E-Waste Recycling",
        description: "Recycled plastic from e-waste programs",
        icon: "recycle",
        impact: "Diverts plastic from landfills, reduces virgin plastic"
      },
      {
        step: "Manufactured",
        location: "Netherlands, Amsterdam",
        description: "Renewable energy powered facility",
        icon: "factory",
        impact: "100% renewable energy, fair labor practices"
      },
      {
        step: "Packaged",
        location: "Netherlands, Rotterdam",
        description: "Recycled paper with soy-based inks",
        icon: "package",
        impact: "Zero plastic packaging, fully recyclable"
      }
    ],
    tags: ["audio-essential", "recycled", "repairable", "carbon-neutral"]
  },
  {
    id: "eco-020",
    name: "Solar Garden Lights Set",
    category: "electronics",
    subcategory: "lighting",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    imageUrls: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=600&fit=crop"
    ],
    brand: "SolarGlow",
    colors: ["warm-white", "cool-white", "color-changing"],
    sizes: ["4-pack", "6-pack", "8-pack"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 287,
    description: "Set of 6 solar-powered garden lights with adjustable brightness. Automatic dusk-to-dawn operation, weatherproof design, and 8-hour runtime.",
    ecoScore: {
      overall: 86,
      materials: 88,
      production: 84,
      packaging: 87,
      carbonFootprint: 85,
      durability: 86
    },
    certifications: ["SOLAR_POWERED", "CARBON_NEUTRAL", "WEATHERPROOF"],
    carbonFootprint: 3.4,
    packaging: "recycled-cardboard",
    sustainableFeatures: [
      "100% solar powered operation",
      "Recycled plastic construction",
      "Replaceable rechargeable batteries",
      "Automatic operation saves energy",
      "Weatherproof for long life",
      "No electricity costs",
      "Minimal packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Solar Tech Manufacturers",
        description: "High-efficiency solar panels and LEDs",
        icon: "sun",
        impact: "Renewable energy technology advancement"
      },
      {
        step: "Manufactured",
        location: "China, Guangzhou",
        description: "Solar-powered manufacturing facility",
        icon: "factory",
        impact: "50% renewable energy, fair labor practices"
      },
      {
        step: "Packaged",
        location: "China, Shenzhen",
        description: "Recycled cardboard with minimal printing",
        icon: "package",
        impact: "Zero plastic packaging, fully recyclable"
      }
    ],
    tags: ["garden-essential", "solar-powered", "energy-saving", "outdoor"]
  },

  // SPORTS CATEGORY
  {
    id: "eco-021",
    name: "Recycled Rubber Yoga Mat",
    category: "sports",
    subcategory: "fitness",
    price: 1899,
    originalPrice: 2399,
    discount: 21,
    imageUrls: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
    ],
    brand: "EcoFit",
    colors: ["black", "blue", "green", "purple"],
    sizes: ["standard", "extra-long", "extra-wide"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 423,
    description: "Premium yoga mat made from 100% recycled rubber. Superior grip, cushioning, and durability. Non-toxic and free from PVC, latex, and phthalates.",
    ecoScore: {
      overall: 87,
      materials: 90,
      production: 84,
      packaging: 88,
      carbonFootprint: 86,
      durability: 87
    },
    certifications: ["RECYCLED", "TOXIN_FREE", "VEGAN"],
    carbonFootprint: 4.8,
    packaging: "recycled-paper",
    sustainableFeatures: [
      "100% recycled rubber from tires",
      "PVC-free and non-toxic",
      "Superior grip and cushioning",
      "Biodegradable at end of life",
      "Carbon neutral manufacturing",
      "Durable design for longevity",
      "Plastic-free packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Tire Recycling Centers",
        description: "Recycled rubber from used tires",
        icon: "recycle",
        impact: "Diverts tires from landfills, reduces waste"
      },
      {
        step: "Manufactured",
        location: "USA, California",
        description: "Solar-powered facility with fair wages",
        icon: "factory",
        impact: "100% renewable energy, fair labor practices"
      },
      {
        step: "Packaged",
        location: "USA, Oregon",
        description: "Recycled paper with soy-based inks",
        icon: "package",
        impact: "Zero plastic packaging, fully recyclable"
      }
    ],
    tags: ["fitness-essential", "recycled", "toxin-free", "bestseller"]
  },
  {
    id: "eco-022",
    name: "Bamboo Tennis Racket",
    category: "sports",
    subcategory: "racket-sports",
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    imageUrls: [
      "https://images.unsplash.com/photo-1554068393-0d4343eeb6f4?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
    ],
    brand: "EcoRacket",
    colors: ["natural", "black", "blue"],
    sizes: ["adult"],
    stockStatus: "in-stock",
    rating: 4.3,
    reviews: 89,
    description: "Innovative tennis racket with bamboo frame and bio-based strings. Lightweight, strong, and vibration-dampening. Includes organic hemp grip.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "CARBON_NEUTRAL"],
    carbonFootprint: 5.6,
    packaging: "hemp-case",
    sustainableFeatures: [
      "Bamboo frame - natural carbon fiber",
      "Bio-based strings from natural polymers",
      "Organic hemp grip tape",
      "Biodegradable components",
      "Carbon negative bamboo harvesting",
      "Natural vibration dampening",
      "Hemp storage case"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Anhui Province",
        description: "Sustainably harvested bamboo",
        icon: "leaf",
        impact: "Carbon negative bamboo, sustainable forestry"
      },
      {
        step: "Manufactured",
        location: "China, Shanghai",
        description: "Traditional craftsmanship meets modern tech",
        icon: "factory",
        impact: "Preserves traditional skills, fair wages"
      },
      {
        step: "Packaged",
        location: "China, Suzhou",
        description: "Organic hemp carrying case",
        icon: "package",
        impact: "Zero plastic, biodegradable packaging"
      }
    ],
    tags: ["tennis-essential", "innovative", "carbon-negative", "vegan"]
  },
  {
    id: "eco-023",
    name: "Recycled Polyester Running Shoes",
    category: "sports",
    subcategory: "footwear",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
    ],
    brand: "EcoRun",
    colors: ["black", "blue", "green", "pink", "orange"],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 267,
    description: "High-performance running shoes made from 85% recycled materials. Recycled polyester upper, natural rubber sole, and recycled foam midsole.",
    ecoScore: {
      overall: 82,
      materials: 85,
      production: 79,
      packaging: 83,
      carbonFootprint: 80,
      durability: 82
    },
    certifications: ["RECYCLED", "VEGAN", "CARBON_NEUTRAL"],
    carbonFootprint: 7.2,
    packaging: "recycled-shoebox",
    sustainableFeatures: [
      "85% recycled materials overall",
      "Recycled ocean plastic upper",
      "Natural rubber outsole",
      "Recycled EVA foam midsole",
      "Vegan construction",
      "Carbon neutral manufacturing",
      "Recyclable shoe components"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Global, Ocean Cleanup Programs",
        description: "Recycled ocean plastic and rubber",
        icon: "globe",
        impact: "Removes ocean plastic, reduces waste"
      },
      {
        step: "Manufactured",
        location: "Vietnam, Ho Chi Minh City",
        description: "Fair wage factory with renewable energy",
        icon: "factory",
        impact: "Fair labor, 60% renewable energy"
      },
      {
        step: "Packaged",
        location: "Vietnam, Hanoi",
        description: "Recycled cardboard shoebox",
        icon: "package",
        impact: "Zero plastic packaging, recycled materials"
      }
    ],
    tags: ["running-essential", "recycled", "vegan", "ocean-saved"]
  },
  {
    id: "eco-024",
    name: "Cork Yoga Blocks Set",
    category: "sports",
    subcategory: "fitness",
    price: 799,
    originalPrice: 999,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
    ],
    brand: "CorkYoga",
    colors: ["natural", "cork-blue", "cork-green"],
    sizes: ["standard", "lightweight"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 178,
    description: "Set of 2 cork yoga blocks with rounded edges. Lightweight, non-slip, and naturally antimicrobial. Sustainable alternative to foam blocks.",
    ecoScore: {
      overall: 91,
      materials: 94,
      production: 89,
      packaging: 92,
      carbonFootprint: 90,
      durability: 91
    },
    certifications: ["VEGAN", "PLASTIC_FREE", "CARBON_NEUTRAL"],
    carbonFootprint: 2.1,
    packaging: "cork-sleeve",
    sustainableFeatures: [
      "100% sustainable cork",
      "Naturally antimicrobial",
      "Biodegradable and compostable",
      "Carbon negative harvesting",
      "Lightweight yet durable",
      "Non-slip surface",
      "Plastic-free packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Portugal, Alentejo",
        description: "Sustainably harvested cork oak",
        icon: "leaf",
        impact: "Supports forest preservation, cork regenerates"
      },
      {
        step: "Manufactured",
        location: "Portugal, Lisbon",
        description: "Solar-powered cork workshop",
        icon: "factory",
        impact: "100% renewable energy, zero waste"
      },
      {
        step: "Packaged",
        location: "Portugal, Porto",
        description: "Cork sleeve with minimal packaging",
        icon: "package",
        impact: "Zero plastic, reusable packaging"
      }
    ],
    tags: ["yoga-essential", "plastic-free", "carbon-negative", "antimicrobial"]
  },

  // KIDS CATEGORY
  {
    id: "eco-025",
    name: "Organic Cotton Baby Onesie",
    category: "kids",
    subcategory: "baby",
    price: 499,
    originalPrice: 699,
    discount: 29,
    imageUrls: [
      "https://images.unsplash.com/photo-1516483638261-f19dbda07eb8?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
    ],
    brand: "EcoBaby",
    colors: ["white", "pink", "blue", "yellow", "green"],
    sizes: ["0-3m", "3-6m", "6-9m", "9-12m"],
    stockStatus: "in-stock",
    rating: 4.7,
    reviews: 334,
    description: "Super soft organic cotton baby onesie with nickel-free snaps. GOTS certified organic cotton, gentle on sensitive skin. Pack of 3.",
    ecoScore: {
      overall: 92,
      materials: 94,
      production: 90,
      packaging: 93,
      carbonFootprint: 91,
      durability: 92
    },
    certifications: ["ORGANIC", "GOTS", "OEKO_TEX", "FAIR_TRADE"],
    carbonFootprint: 1.8,
    packaging: "cotton-bag",
    sustainableFeatures: [
      "100% GOTS certified organic cotton",
      "Nickel-free snap closures",
      "Gentle on sensitive skin",
      "Machine washable and durable",
      "Fair trade certified production",
      "Biodegradable materials",
      "Organic cotton bag packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "India, Organic Cotton Farms",
        description: "GOTS certified organic cotton",
        icon: "leaf",
        impact: "Supports organic farming, no pesticides"
      },
      {
        step: "Manufactured",
        location: "India, Fair Trade Facility",
        description: "Fair wage production with women empowerment",
        icon: "factory",
        impact: "Empowers women, fair working conditions"
      },
      {
        step: "Packaged",
        location: "India, Mumbai",
        description: "Organic cotton reusable bag",
        icon: "package",
        impact: "Zero plastic, reusable packaging"
      }
    ],
    tags: ["baby-essential", "organic", "sensitive-skin", "bestseller"]
  },
  {
    id: "eco-026",
    name: "Wooden Building Blocks Set",
    category: "kids",
    subcategory: "toys",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1515488042337-57b0b72bdf98?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
    ],
    brand: "EcoPlay",
    colors: ["natural", "rainbow", "pastel"],
    sizes: ["50-pieces", "100-pieces"],
    stockStatus: "in-stock",
    rating: 4.8,
    reviews: 245,
    description: "Classic wooden building blocks made from sustainably sourced wood. Non-toxic water-based paints. Promotes creativity and motor skills development.",
    ecoScore: {
      overall: 90,
      materials: 92,
      production: 88,
      packaging: 91,
      carbonFootprint: 89,
      durability: 90
    },
    certifications: ["FSC", "NON_TOXIC", "VEGAN", "PLASTIC_FREE"],
    carbonFootprint: 3.2,
    packaging: "wooden-box",
    sustainableFeatures: [
      "FSC certified sustainable wood",
      "Non-toxic water-based paints",
      "Plastic-free alternative to plastic toys",
      "Biodegradable and compostable",
      "Durable for generations of play",
      "Natural materials safe for children",
      "Wooden storage box included"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Germany, Certified Forests",
        description: "FSC certified sustainable timber",
        icon: "leaf",
        impact: "Supports sustainable forest management"
      },
      {
        step: "Manufactured",
        location: "Germany, Bavaria",
        description: "Traditional toy making workshop",
        icon: "factory",
        impact: "Preserves traditional craft, fair wages"
      },
      {
        step: "Packaged",
        location: "Germany, Berlin",
        description: "Wooden box with minimal packaging",
        icon: "package",
        impact: "Zero plastic, reusable storage box"
      }
    ],
    tags: ["toy-essential", "plastic-free", "educational", "heirloom"]
  },
  {
    id: "eco-027",
    name: "Organic Cotton Stuffed Animals",
    category: "kids",
    subcategory: "toys",
    price: 699,
    originalPrice: 899,
    discount: 22,
    imageUrls: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515488042337-57b0b72bdf98?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop"
    ],
    brand: "EcoCuddles",
    colors: ["bear", "rabbit", "elephant", "lion"],
    sizes: ["small", "medium"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 189,
    description: "Adorable stuffed animals made from GOTS certified organic cotton. Natural cotton filling, embroidered details (no plastic parts), and machine washable.",
    ecoScore: {
      overall: 91,
      materials: 93,
      production: 89,
      packaging: 92,
      carbonFootprint: 90,
      durability: 91
    },
    certifications: ["ORGANIC", "GOTS", "VEGAN", "PLASTIC_FREE"],
    carbonFootprint: 2.4,
    packaging: "cotton-bag",
    sustainableFeatures: [
      "100% GOTS certified organic cotton",
      "Natural cotton filling (no synthetic stuffing)",
      "Embroidered features (no plastic eyes/parts)",
      "Machine washable and durable",
      "Hypoallergenic and safe for babies",
      "Biodegradable materials",
      "Organic cotton gift bag"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "India, Organic Cotton Co-ops",
        description: "GOTS certified organic cotton",
        icon: "leaf",
        impact: "Supports organic farming communities"
      },
      {
        step: "Manufactured",
        location: "India, Women-led Cooperative",
        description: "Fair trade toy making workshop",
        icon: "factory",
        impact: "Empowers women artisans, fair wages"
      },
      {
        step: "Packaged",
        location: "India, Delhi",
        description: "Organic cotton drawstring bag",
        icon: "package",
        impact: "Zero plastic, reusable gift packaging"
      }
    ],
    tags: ["toy-essential", "baby-safe", "plastic-free", "hypoallergenic"]
  },
  {
    id: "eco-028",
    name: "Bamboo Dinnerware Set for Kids",
    category: "kids",
    subcategory: "tableware",
    price: 799,
    originalPrice: 999,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoKids",
    colors: ["natural", "pastel", "bright"],
    sizes: ["5-piece-set"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 156,
    description: "Complete bamboo dinnerware set for kids includes plate, bowl, cup, spoon, and fork. Lightweight, unbreakable, and biodegradable. BPA-free and non-toxic.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["BPA_FREE", "PLASTIC_FREE", "VEGAN", "NON_TOXIC"],
    carbonFootprint: 2.8,
    packaging: "bamboo-box",
    sustainableFeatures: [
      "100% natural bamboo fiber",
      "BPA-free and non-toxic",
      "Lightweight and unbreakable",
      "Biodegradable and compostable",
      "Heat and stain resistant",
      "Dishwasher safe (top rack)",
      "Bamboo storage box included"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Anhui Province",
        description: "Sustainably harvested bamboo",
        icon: "leaf",
        impact: "Carbon negative bamboo harvesting"
      },
      {
        step: "Manufactured",
        location: "China, Fujian",
        description: "Fair trade facility with safety standards",
        icon: "factory",
        impact: "Fair wages, child safety certified"
      },
      {
        step: "Packaged",
        location: "China, Guangzhou",
        description: "Bamboo box with minimal printing",
        icon: "package",
        impact: "Zero plastic, reusable packaging"
      }
    ],
    tags: ["kids-essential", "plastic-free", "bpa-free", "unbreakable"]
  },

  // BEAUTY CATEGORY
  {
    id: "eco-029",
    name: "Organic Face Oil Serum",
    category: "beauty",
    subcategory: "skincare",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    imageUrls: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
    ],
    brand: "EcoGlow",
    colors: ["rose", "lavender", "citrus"],
    sizes: ["30ml", "50ml"],
    stockStatus: "in-stock",
    rating: 4.7,
    reviews: 412,
    description: "Luxurious organic face oil serum with rosehip, jojoba, and argan oils. Anti-aging, hydrating, and suitable for all skin types. Glass bottle with dropper.",
    ecoScore: {
      overall: 90,
      materials: 92,
      production: 88,
      packaging: 91,
      carbonFootprint: 89,
      durability: 90
    },
    certifications: ["ORGANIC", "VEGAN", "CRUELTY_FREE", "GLUTEN_FREE"],
    carbonFootprint: 1.6,
    packaging: "glass-bottle",
    sustainableFeatures: [
      "100% organic certified ingredients",
      "Cold-pressed oils preserve nutrients",
      "Glass bottle with bamboo dropper",
      "Refillable packaging design",
      "Biodegradable ingredients",
      "Cruelty-free and vegan",
      "Carbon neutral manufacturing"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Morocco, Organic Farms",
        description: "Organic argan and rosehip oils",
        icon: "leaf",
        impact: "Supports women's cooperatives, organic farming"
      },
      {
        step: "Manufactured",
        location: "France, Provence",
        description: "Small batch, solar-powered facility",
        icon: "factory",
        impact: "100% renewable energy, artisan production"
      },
      {
        step: "Packaged",
        location: "France, Paris",
        description: "Glass bottle with bamboo components",
        icon: "package",
        impact: "Refillable, recyclable, minimal plastic"
      }
    ],
    tags: ["beauty-essential", "organic", "anti-aging", "bestseller"]
  },
  {
    id: "eco-030",
    name: "Bamboo Makeup Brush Set",
    category: "beauty",
    subcategory: "tools",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    imageUrls: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop"
    ],
    brand: "EcoBeauty",
    colors: ["natural", "black", "rose-gold"],
    sizes: ["5-piece", "10-piece"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 278,
    description: "Professional makeup brush set with bamboo handles and synthetic vegan bristles. Includes bamboo storage roll. Soft, durable, and cruelty-free.",
    ecoScore: {
      overall: 88,
      materials: 90,
      production: 86,
      packaging: 89,
      carbonFootprint: 87,
      durability: 88
    },
    certifications: ["VEGAN", "CRUELTY_FREE", "PLASTIC_FREE"],
    carbonFootprint: 2.3,
    packaging: "bamboo-roll",
    sustainableFeatures: [
      "Bamboo handles - sustainable and lightweight",
      "100% vegan synthetic bristles",
      "Cruelty-free and ethical",
      "Bamboo storage roll included",
      "Durable and long-lasting",
      "Biodegradable components",
      "Plastic-free packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Anhui Province",
        description: "Sustainably harvested bamboo",
        icon: "leaf",
        impact: "Carbon negative bamboo harvesting"
      },
      {
        step: "Manufactured",
        location: "China, Guangzhou",
        description: "Fair trade workshop, cruelty-free",
        icon: "factory",
        impact: "Fair wages, ethical production"
      },
      {
        step: "Packaged",
        location: "China, Shenzhen",
        description: "Bamboo roll with cotton tie",
        icon: "package",
        impact: "Zero plastic, reusable storage"
      }
    ],
    tags: ["beauty-essential", "vegan", "cruelty-free", "plastic-free"]
  },
  {
    id: "eco-031",
    name: "Natural Lip Balm Set",
    category: "beauty",
    subcategory: "lip-care",
    price: 399,
    originalPrice: 499,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop"
    ],
    brand: "EcoLips",
    colors: ["vanilla", "berry", "mint", "citrus", "rose"],
    sizes: ["4-pack"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 345,
    description: "Set of 4 organic lip balms in cardboard tubes. Made with beeswax, coconut oil, and essential oils. Plastic-free and long-lasting.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["ORGANIC", "PLASTIC_FREE", "CRUELTY_FREE"],
    carbonFootprint: 0.8,
    packaging: "paper-box",
    sustainableFeatures: [
      "100% organic ingredients",
      "Cardboard push-up tubes",
      "Beeswax from sustainable apiaries",
      "Plastic-free packaging",
      "Long-lasting formula",
      "Biodegradable ingredients",
      "Supports local beekeepers"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Local Beekeepers",
        description: "Organic beeswax and honey",
        icon: "bee",
        impact: "Supports bee populations and local beekeepers"
      },
      {
        step: "Manufactured",
        location: "USA, Oregon",
        description: "Small batch, handcrafted production",
        icon: "factory",
        impact: "Artisan production, local economy support"
      },
      {
        step: "Packaged",
        location: "USA, California",
        description: "Recycled paper box with soy inks",
        icon: "package",
        impact: "Zero plastic, fully recyclable packaging"
      }
    ],
    tags: ["beauty-essential", "plastic-free", "organic", "bestseller"]
  },
  {
    id: "eco-032",
    name: "Rosewater Facial Toner",
    category: "beauty",
    subcategory: "skincare",
    price: 599,
    originalPrice: 799,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37b?w=600&h=600&fit=crop"
    ],
    brand: "EcoTone",
    colors: ["rose", "lavender", "chamomile"],
    sizes: ["100ml", "200ml"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 267,
    description: "Pure organic rosewater facial toner. Hydrating, balancing, and refreshing. Glass spray bottle with natural ingredients only.",
    ecoScore: {
      overall: 91,
      materials: 93,
      production: 89,
      packaging: 92,
      carbonFootprint: 90,
      durability: 91
    },
    certifications: ["ORGANIC", "VEGAN", "CRUELTY_FREE"],
    carbonFootprint: 1.2,
    packaging: "glass-spray",
    sustainableFeatures: [
      "100% pure organic rosewater",
      "Glass spray bottle - infinitely recyclable",
      "No synthetic fragrances or additives",
      "Distilled from organic rose petals",
      "Biodegradable formula",
      "Refillable packaging",
      "Supports organic rose farms"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Bulgaria, Rose Valley",
        description: "Organic rose petals and essential oil",
        icon: "leaf",
        impact: "Supports traditional rose cultivation"
      },
      {
        step: "Manufactured",
        location: "Bulgaria, Sofia",
        description: "Traditional distillation methods",
        icon: "factory",
        impact: "Preserves traditional craft, fair wages"
      },
      {
        step: "Packaged",
        location: "Bulgaria, Plovdiv",
        description: "Glass bottle with paper label",
        icon: "package",
        impact: "Infinitely recyclable, minimal packaging"
      }
    ],
    tags: ["skincare-essential", "organic", "hydrating", "vegan"]
  },

  // GARDEN CATEGORY
  {
    id: "eco-033",
    name: "Organic Seed Starter Kit",
    category: "garden",
    subcategory: "growing",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoGarden",
    colors: ["herbs", "vegetables", "flowers"],
    sizes: ["complete-kit"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 189,
    description: "Complete organic seed starter kit with biodegradable pots, organic soil, and heirloom seeds. Includes growing guide and garden markers.",
    ecoScore: {
      overall: 92,
      materials: 94,
      production: 90,
      packaging: 93,
      carbonFootprint: 91,
      durability: 92
    },
    certifications: ["ORGANIC", "HEIRLOOM", "NON_GMO", "PLASTIC_FREE"],
    carbonFootprint: 2.6,
    packaging: "cardboard-box",
    sustainableFeatures: [
      "100% organic, non-GMO heirloom seeds",
      "Biodegradable peat pots",
      "Organic potting soil mix",
      "Bamboo garden markers",
      "Comprehensive growing guide",
      "Plastic-free packaging",
      "Supports biodiversity"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Organic Seed Banks",
        description: "Heirloom and organic seed varieties",
        icon: "seed",
        impact: "Preserves plant diversity, organic farming"
      },
      {
        step: "Manufactured",
        location: "USA, Oregon",
        description: "Small batch, hand-assembly",
        icon: "factory",
        impact: "Local production, community supported"
      },
      {
        step: "Packaged",
        location: "USA, Washington",
        description: "Recycled cardboard with soy inks",
        icon: "package",
        impact: "Zero plastic, fully recyclable packaging"
      }
    ],
    tags: ["garden-essential", "organic", "beginner-friendly", "biodiversity"]
  },
  {
    id: "eco-034",
    name: "Compost Bin System",
    category: "garden",
    subcategory: "composting",
    price: 2499,
    originalPrice: 2999,
    discount: 17,
    imageUrls: [
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoCompost",
    colors: ["black", "green", "terracotta"],
    sizes: ["80-gallon", "120-gallon"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 156,
    description: "Dual-chamber compost bin system made from recycled plastic. Efficient aeration, pest-proof design, and easy access. Turns waste into nutrient-rich soil.",
    ecoScore: {
      overall: 85,
      materials: 87,
      production: 83,
      packaging: 86,
      carbonFootprint: 84,
      durability: 85
    },
    certifications: ["RECYCLED", "PLASTIC_FREE", "DURABLE"],
    carbonFootprint: 8.9,
    packaging: "minimal-cardboard",
    sustainableFeatures: [
      "Made from 100% recycled plastic",
      "Dual-chamber for continuous composting",
      "Pest-proof and weather-resistant",
      "Reduces landfill waste significantly",
      "Creates nutrient-rich soil amendment",
      "Durable design for years of use",
      "Minimal packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Municipal Recycling",
        description: "Post-consumer recycled plastic",
        icon: "recycle",
        impact: "Diverts plastic from landfills"
      },
      {
        step: "Manufactured",
        location: "USA, Michigan",
        description: "Energy-efficient molding facility",
        icon: "factory",
        impact: "Local production, energy efficiency"
      },
      {
        step: "Packaged",
        location: "USA, Michigan",
        description: "Minimal recycled cardboard packaging",
        icon: "package",
        impact: "Zero plastic waste in packaging"
      }
    ],
    tags: ["garden-essential", "zero-waste", "soil-health", "recycled"]
  },
  {
    id: "eco-035",
    name: "Rainwater Harvesting Barrel",
    category: "garden",
    subcategory: "water",
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoWater",
    colors: ["green", "brown", "terra-cotta"],
    sizes: ["50-gallon", "75-gallon", "100-gallon"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 98,
    description: "Decorative rainwater harvesting barrel with diverter kit. UV-resistant, child-safe, and mosquito-proof. Reduces water bills and conserves water.",
    ecoScore: {
      overall: 88,
      materials: 90,
      production: 86,
      packaging: 89,
      carbonFootprint: 87,
      durability: 88
    },
    certifications: ["RECYCLED", "BPA_FREE", "UV_RESISTANT"],
    carbonFootprint: 12.3,
    packaging: "recycled-plastic",
    sustainableFeatures: [
      "Made from 50% recycled plastic",
      "Conserves municipal water resources",
      "Reduces stormwater runoff",
      "Provides free water for gardens",
      "UV-resistant for long life",
      "Child and mosquito proof design",
      "Includes complete diverter kit"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Plastic Recyclers",
        description: "Recycled plastic resin",
        icon: "recycle",
        impact: "Reduces virgin plastic production"
      },
      {
        step: "Manufactured",
        location: "USA, Texas",
        description: "Water conservation equipment facility",
        icon: "factory",
        impact: "Promotes water conservation awareness"
      },
      {
        step: "Packaged",
        location: "USA, Texas",
        description: "Recycled plastic protective packaging",
        icon: "package",
        impact: "Reusable packaging, minimal waste"
      }
    ],
    tags: ["garden-essential", "water-conservation", "recycled", "sustainable"]
  },
  {
    id: "eco-036",
    name: "Organic Garden Tool Set",
    category: "garden",
    subcategory: "tools",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    imageUrls: [
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoTools",
    colors: ["natural", "green"],
    sizes: ["5-piece-set"],
    stockStatus: "in-stock",
    rating: 4.3,
    reviews: 134,
    description: "Set of 5 essential garden tools with bamboo handles and recycled steel heads. Includes trowel, transplanter, weeder, cultivator, and fork. Canvas storage bag included.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["RECYCLED", "VEGAN", "PLASTIC_FREE"],
    carbonFootprint: 4.1,
    packaging: "canvas-bag",
    sustainableFeatures: [
      "Bamboo handles - sustainable and lightweight",
      "Recycled steel tool heads",
      "Durable construction for longevity",
      "Canvas storage bag included",
      "Ergonomic design reduces strain",
      "Biodegradable components",
      "Plastic-free packaging"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "China, Anhui Province",
        description: "Sustainably harvested bamboo",
        icon: "leaf",
        impact: "Carbon negative bamboo harvesting"
      },
      {
        step: "Manufactured",
        location: "China, Jiangsu",
        description: "Fair trade tool making workshop",
        icon: "factory",
        impact: "Fair wages, traditional craftsmanship"
      },
      {
        step: "Packaged",
        location: "China, Shanghai",
        description: "Canvas storage bag with minimal printing",
        icon: "package",
        impact: "Reusable bag, zero plastic packaging"
      }
    ],
    tags: ["garden-essential", "recycled", "ergonomic", "durable"]
  },

  // GIFTS CATEGORY
  {
    id: "eco-037",
    name: "Sustainable Gift Box Set",
    category: "gifts",
    subcategory: "gift-sets",
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoGifts",
    colors: ["zero-waste", "self-care", "garden"],
    sizes: ["complete-set"],
    stockStatus: "in-stock",
    rating: 4.8,
    reviews: 267,
    description: "Curated eco-friendly gift box with 5 sustainable products. Includes reusable items, organic treats, and plastic-free essentials. Perfect for any occasion.",
    ecoScore: {
      overall: 90,
      materials: 92,
      production: 88,
      packaging: 91,
      carbonFootprint: 89,
      durability: 90
    },
    certifications: ["PLASTIC_FREE", "ORGANIC", "FAIR_TRADE"],
    carbonFootprint: 3.8,
    packaging: "reusable-box",
    sustainableFeatures: [
      "5 carefully selected eco-products",
      "Reusable wooden gift box",
      "Plastic-free packaging throughout",
      "Supports multiple eco-brands",
      "Educational about sustainability",
      "Gift that keeps on giving",
      "Carbon neutral shipping"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "Global, Eco-Partners",
        description: "Various sustainable product makers",
        icon: "globe",
        impact: "Supports multiple eco-friendly businesses"
      },
      {
        step: "Manufactured",
        location: "USA, California",
        description: "Hand-assembled gift curation",
        icon: "factory",
        impact: "Local assembly, community employment"
      },
      {
        step: "Packaged",
        location: "USA, Oregon",
        description: "Reusable wooden box with natural fill",
        icon: "package",
        impact: "Zero waste packaging, reusable container"
      }
    ],
    tags: ["gift-essential", "curated", "zero-waste", "bestseller"]
  },
  {
    id: "eco-038",
    name: "Plantable Greeting Cards",
    category: "gifts",
    subcategory: "cards",
    price: 299,
    originalPrice: 399,
    discount: 25,
    imageUrls: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "BloomCards",
    colors: ["birthday", "thank-you", "congratulations", "love"],
    sizes: ["5-pack", "10-pack"],
    stockStatus: "in-stock",
    rating: 4.6,
    reviews: 189,
    description: "Plantable greeting cards embedded with wildflower seeds. Handmade recycled paper with natural dyes. Plant the card and watch flowers grow!",
    ecoScore: {
      overall: 91,
      materials: 93,
      production: 89,
      packaging: 92,
      carbonFootprint: 90,
      durability: 91
    },
    certifications: ["RECYCLED", "PLANTABLE", "PLASTIC_FREE"],
    carbonFootprint: 0.5,
    packaging: "seed-paper-envelope",
    sustainableFeatures: [
      "100% recycled paper with embedded seeds",
      "Plantable and biodegradable",
      "Natural soy-based inks",
      "Supports pollinator habitats",
      "Zero plastic packaging",
      "Creates beauty and life",
      "Handmade artisan crafting"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Paper Recycling",
        description: "Post-consumer recycled paper",
        icon: "recycle",
        impact: "Diverts paper from landfills"
      },
      {
        step: "Manufactured",
        location: "USA, Vermont",
        description: "Handmade paper with seed embedding",
        icon: "factory",
        impact: "Traditional craft, local employment"
      },
      {
        step: "Packaged",
        location: "USA, Vermont",
        description: "Seed paper envelopes",
        icon: "package",
        impact: "Fully plantable packaging"
      }
    ],
    tags: ["gift-essential", "plantable", "recycled", "pollinator-friendly"]
  },
  {
    id: "eco-039",
    name: "Reusable Gift Wrap Set",
    category: "gifts",
    subcategory: "wrapping",
    price: 699,
    originalPrice: 899,
    discount: 22,
    imageUrls: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "WrapAgain",
    colors: ["festive", "botanical", "geometric"],
    sizes: ["3-piece-set"],
    stockStatus: "in-stock",
    rating: 4.5,
    reviews: 156,
    description: "Set of 3 reusable fabric gift wraps with ribbons. Beautiful cotton fabric wraps that can be used again and again. Includes fabric care instructions.",
    ecoScore: {
      overall: 89,
      materials: 91,
      production: 87,
      packaging: 90,
      carbonFootprint: 88,
      durability: 89
    },
    certifications: ["REUSABLE", "PLASTIC_FREE", "FAIR_TRADE"],
    carbonFootprint: 1.8,
    packaging: "cotton-pouch",
    sustainableFeatures: [
      "100% organic cotton fabric",
      "Reusable hundreds of times",
      "Beautiful patterns and designs",
      "Machine washable",
      "Fair trade production",
      "Eliminates paper waste",
      "Cotton storage pouch included"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "India, Organic Cotton",
        description: "GOTS certified organic cotton",
        icon: "leaf",
        impact: "Supports organic farming communities"
      },
      {
        step: "Manufactured",
        location: "India, Fair Trade Workshop",
        description: "Traditional fabric printing techniques",
        icon: "factory",
        impact: "Preserves traditional arts, fair wages"
      },
      {
        step: "Packaged",
        location: "India, Delhi",
        description: "Cotton storage pouch",
        icon: "package",
        impact: "Zero plastic, reusable packaging"
      }
    ],
    tags: ["gift-essential", "reusable", "zero-waste", "fabric"]
  },
  {
    id: "eco-040",
    name: "Eco-Friendly Journal Set",
    category: "gifts",
    subcategory: "stationery",
    price: 799,
    originalPrice: 999,
    discount: 20,
    imageUrls: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586201375761-038272e4d97d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595428614046-34d0be1a78a2?w=600&h=600&fit=crop"
    ],
    brand: "EcoWrite",
    colors: ["kraft", "bamboo", "recycled"],
    sizes: ["set-of-3"],
    stockStatus: "in-stock",
    rating: 4.4,
    reviews: 134,
    description: "Set of 3 eco-friendly journals with recycled paper covers. Includes bamboo pen and recycled paper bookmarks. Perfect for eco-conscious writers.",
    ecoScore: {
      overall: 90,
      materials: 92,
      production: 88,
      packaging: 91,
      carbonFootprint: 89,
      durability: 90
    },
    certifications: ["RECYCLED", "VEGAN", "PLASTIC_FREE"],
    carbonFootprint: 2.1,
    packaging: "paper-band",
    sustainableFeatures: [
      "100% recycled paper covers",
      "Recycled paper pages",
      "Bamboo pen included",
      "Recycled paper bookmarks",
      "Soy-based inks",
      "Plastic-free packaging",
      "Supports sustainable forestry"
    ],
    productJourney: [
      {
        step: "Sourced",
        location: "USA, Paper Recycling",
        description: "Post-consumer recycled paper",
        icon: "recycle",
        impact: "Diverts paper from landfills"
      },
      {
        step: "Manufactured",
        location: "USA, Oregon",
        description: "Sustainable book binding facility",
        icon: "factory",
        impact: "Local production, sustainable practices"
      },
      {
        step: "Packaged",
        location: "USA, Washington",
        description: "Paper band with soy inks",
        icon: "package",
        impact: "Zero plastic, fully recyclable"
      }
    ],
    tags: ["gift-essential", "recycled", "stationery", "sustainable"]
  }
];

export const formatEcoPrice = (price: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const getEcoScoreColor = (score: number): string => {
  if (score >= 90) return "text-green-600";
  if (score >= 80) return "text-green-500";
  if (score >= 70) return "text-yellow-600";
  if (score >= 60) return "text-orange-500";
  return "text-red-500";
};

export const getEcoScoreLabel = (score: number): string => {
  if (score >= 90) return "Exceptional";
  if (score >= 80) return "Excellent";
  if (score >= 70) return "Very Good";
  if (score >= 60) return "Good";
  return "Needs Improvement";
};
