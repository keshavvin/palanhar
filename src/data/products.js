// "एक गाय – अनेक उत्पाद – अनंत संभावनाएं" — one cow, many products.
// Categories: Dairy, Panchgavya (gau-based), Agriculture.

export const dairyProducts = [
  {
    id: 1,
    name: 'A2 Cow Milk',
    category: 'Dairy',
    description: 'Pure A2 milk from our indigenous Desi cows, delivered fresh daily.',
    price: '₹90/L',
    image: '🥛',
    features: ['A2 Protein', 'Desi Cow', 'Fresh Daily']
  },
  {
    id: 2,
    name: 'A2 Desi Ghee (Bilona)',
    category: 'Dairy',
    description: 'Traditional bilona-method ghee hand-churned from A2 cow milk curd.',
    price: '₹2,400/L',
    image: '🧈',
    features: ['Bilona Method', 'A2 Cow Milk', 'Clay-Pot Churned']
  },
  {
    id: 3,
    name: 'Fresh Makkhan (White Butter)',
    category: 'Dairy',
    description: 'Creamy white butter churned fresh from A2 cow milk cream.',
    price: '₹600/kg',
    image: '🧈',
    features: ['A2 Cream', 'Hand Churned', 'No Additives']
  },
  {
    id: 4,
    name: 'Paneer',
    category: 'Dairy',
    description: 'Soft and delicious cottage cheese made from fresh A2 cow milk.',
    price: '₹400/kg',
    image: '🧀',
    features: ['Soft', 'Fresh', 'High Protein']
  },
  {
    id: 5,
    name: 'Fresh Dahi (Curd)',
    category: 'Dairy',
    description: 'Creamy curd set with traditional fermentation in earthen pots.',
    price: '₹120/kg',
    image: '🥣',
    features: ['Probiotic', 'A2 Milk', 'Earthen-Pot Set']
  },
  {
    id: 6,
    name: 'Chhachh (Buttermilk)',
    category: 'Dairy',
    description: 'Light, refreshing buttermilk — a natural byproduct of bilona churning.',
    price: '₹40/L',
    image: '🥛',
    features: ['Digestive', 'Natural', 'Fresh Daily']
  }
];

export const panchgavyaProducts = [
  {
    id: 7,
    name: 'Gobar Khad (Cow Dung Manure)',
    category: 'Panchgavya',
    description: 'Well-decomposed desi cow dung manure — the traditional foundation of fertile, living soil.',
    price: '₹10/kg',
    image: '🌱',
    features: ['100% Natural', 'Soil Revival', 'Chemical Free']
  },
  {
    id: 8,
    name: 'Vermi Compost',
    category: 'Panchgavya',
    description: 'Nutrient-rich compost from gobar and biogas slurry, processed by earthworms.',
    price: '₹15/kg',
    image: '🪱',
    features: ['Gobar Based', 'Nutrient Rich', 'Organic Certified']
  },
  {
    id: 9,
    name: 'Gomutra Ark',
    category: 'Panchgavya',
    description: 'Distilled desi cow urine ark prepared under hygienic ayurvedic processes.',
    price: '₹120/L',
    image: '🫙',
    features: ['Ayurvedic', 'Distilled', 'Traditional']
  },
  {
    id: 10,
    name: 'Jaivik Keetnashak (Organic Pesticide)',
    category: 'Panchgavya',
    description: 'Gomutra and herbal-extract based crop protection — safe for soil, crops and farmers.',
    price: '₹150/L',
    image: '🧪',
    features: ['Gomutra Based', 'Herbal', 'Crop Safe']
  },
  {
    id: 11,
    name: 'Panchgavya Dhoopbatti',
    category: 'Panchgavya',
    description: 'Natural incense handmade from cow dung, ghee and herbal ingredients.',
    price: '₹80/pack',
    image: '🪔',
    features: ['Panchgavya', 'Handmade', 'Natural Aroma']
  },
  {
    id: 12,
    name: 'Panchgavya Ayurvedic Products',
    category: 'Panchgavya',
    description: 'Traditional wellness range prepared from the five gifts of the cow — milk, dahi, ghee, gomutra and gobar.',
    price: '₹100-500',
    image: '🌿',
    features: ['Traditional', 'Ayurvedic', 'Natural']
  },
  {
    id: 13,
    name: 'Compressed Biogas (CBG)',
    category: 'Panchgavya',
    description: 'Clean renewable energy generated from gobar through our integrated biogas plant.',
    price: 'On Request',
    image: '🔋',
    features: ['Clean Energy', 'Gobar Based', 'Sustainable']
  },
  {
    id: 14,
    name: 'Bio Paint',
    category: 'Panchgavya',
    description: 'Eco-friendly, gobar-based natural paint — breathable, non-toxic and gentle on homes.',
    price: 'On Request',
    image: '🎨',
    features: ['Gobar Based', 'Non-Toxic', 'Eco Friendly']
  }
];

export const agricultureProducts = [
  {
    id: 15,
    name: 'Fresh Organic Vegetables',
    category: 'Agriculture',
    description: 'Seasonal vegetables grown with our own gobar khad and organic fertilizers.',
    price: '₹40-100/kg',
    image: '🥬',
    features: ['Seasonal', 'Fresh', 'Pesticide Free']
  },
  {
    id: 16,
    name: 'Organic Grains & Pulses',
    category: 'Agriculture',
    description: 'Wholesome grains and pulses cultivated through natural, chemical-free farming.',
    price: '₹80-150/kg',
    image: '🌾',
    features: ['Natural Farming', 'Protein Rich', 'Chemical Free']
  }
];

export const allProducts = [...dairyProducts, ...panchgavyaProducts, ...agricultureProducts];
