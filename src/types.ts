export type Language = 'zh' | 'en' | 'uz';

export interface TechSpecs {
  length: string; // e.g. "10.5m", "12m"
  dimensions: string; // e.g. "10500 x 2500 x 3200 mm"
  passengerCapacity: string; // e.g. "80 / 18-35"
  batteryType: string; // e.g. "LTO (Lithium Titanate) / Lithium Iron Phosphate"
  batteryCapacity: string; // e.g. "120 kWh"
  chargingTime: string; // e.g. "10-15 min (Fast Charge)"
  motorPower: string; // e.g. "150 kW / 245 kW Peak"
  range: string; // e.g. "300 km"
  maxSpeed: string; // e.g. "80 km/h"
  maxClimbing: string; // e.g. "20%"
}

export interface Product {
  id: string;
  name: {
    zh: string;
    en: string;
    uz: string;
  };
  modelCode: string;
  category: string; // 'bus' | 'logistics' | 'special'
  subCategory?: string; // '12m_class' | '10m_class' | '8m_class' | 'hydrogen' | 'van' | 'refrigerated' | 'sweeper'
  image: string;
  badge?: {
    zh: string;
    en: string;
    uz: string;
  };
  description: {
    zh: string;
    en: string;
    uz: string;
  };
  tagline: {
    zh: string;
    en: string;
    uz: string;
  };
  keyFeatures: {
    zh: string[];
    en: string[];
    uz: string[];
  };
  specs: TechSpecs;
}

export interface NavItem {
  key: string;
  label: {
    zh: string;
    en: string;
    uz: string;
  };
  link?: string;
}

export interface TranslationDictionary {
  [key: string]: {
    zh: string;
    en: string;
    uz: string;
  };
}
