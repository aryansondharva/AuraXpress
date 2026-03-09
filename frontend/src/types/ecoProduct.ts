export interface EcoProduct {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  imageUrls: string[];
  brand: string;
  colors: string[];
  sizes: string[];
  stockStatus: "in-stock" | "out-of-stock" | "limited-stock";
  rating: number;
  reviews: number;
  description: string;
  ecoScore: {
    overall: number;
    materials: number;
    production: number;
    packaging: number;
    carbonFootprint: number;
    durability: number;
  };
  certifications: Certification[];
  carbonFootprint: number;
  packaging: string;
  sustainableFeatures: string[];
  productJourney: ProductJourneyStep[];
  tags: string[];
}

export interface ProductJourneyStep {
  step: string;
  location: string;
  description: string;
  icon: string;
  impact: string;
}

export type Certification = 
  | "ORGANIC"
  | "FAIR_TRADE"
  | "CARBON_NEUTRAL"
  | "VEGAN"
  | "RECYCLED"
  | "PLASTIC_FREE"
  | "BPA_FREE"
  | "COMPOSTABLE"
  | "OEKO_TEX"
  | "GOTS"
  | "FSC"
  | "NON_TOXIC"
  | "TOXIN_FREE"
  | "CRUELTY_FREE"
  | "GLUTEN_FREE"
  | "ALUMINUM_FREE"
  | "HEIRLOOM"
  | "NON_GMO"
  | "SOLAR_POWERED"
  | "ENERGY_STAR"
  | "QI_CERTIFIED"
  | "WEATHERPROOF"
  | "UV_RESISTANT"
  | "DURABLE"
  | "PLANTABLE"
  | "REUSABLE";

export type EcoCategory = 
  | "clothing"
  | "home"
  | "personal-care"
  | "kitchen"
  | "electronics"
  | "sports"
  | "kids"
  | "beauty"
  | "garden"
  | "gifts";

export type StockStatus = "in-stock" | "out-of-stock" | "limited-stock";

export interface EcoCategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  icon?: string;
}
