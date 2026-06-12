export const dairyProducts = [
  {
    id: 1,
    name: 'A2 Cow Milk',
    category: 'Dairy',
    description: 'Pure A2 milk from our indigenous Desi Gir cows, delivered fresh daily.',
    price: '₹90/L',
    image: '🥛',
    features: ['A2 Protein', 'Desi Gir Cow', 'Fresh Daily']
  },
  {
    id: 2,
    name: 'A2 Desi Ghee (Bilona)',
    category: 'Dairy',
    description: 'Traditional bilona-method ghee hand-churned from A2 Gir cow milk curd.',
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

export const agricultureProducts = [
  {
    id: 8,
    name: 'Vermi Compost',
    category: 'Agriculture',
    description: 'Nutrient-rich organic compost from gobar and biogas slurry for healthy soil.',
    price: '₹15/kg',
    image: '🌱',
    features: ['Gobar Based', 'Soil Health', 'Chemical Free']
  },
  {
    id: 9,
    name: 'Organic Fertilizer & Pesticide',
    category: 'Agriculture',
    description: 'Natural crop care made from cow dung, gomutra and herbal extracts.',
    price: '₹60-150/kg',
    image: '🧪',
    features: ['Gomutra Based', 'Herbal', 'Crop Safe']
  },
  {
    id: 10,
    name: 'Gomutra Ark',
    category: 'Agriculture',
    description: 'Distilled cow urine ark prepared under hygienic ayurvedic processes.',
    price: '₹120/L',
    image: '🫙',
    features: ['Ayurvedic', 'Distilled', 'Traditional']
  },
  {
    id: 11,
    name: 'Panchgavya Dhoopbatti',
    category: 'Agriculture',
    description: 'Natural incense handmade from cow dung, ghee and herbal ingredients.',
    price: '₹80/pack',
    image: '🪔',
    features: ['Panchgavya', 'Handmade', 'Natural Aroma']
  },
  {
    id: 12,
    name: 'Fresh Organic Vegetables',
    category: 'Agriculture',
    description: 'Seasonal vegetables grown with our own organic fertilizers.',
    price: '₹40-100/kg',
    image: '🥬',
    features: ['Seasonal', 'Fresh', 'Pesticide Free']
  },
  {
    id: 13,
    name: 'Compressed Biogas (CBG)',
    category: 'Agriculture',
    description: 'Clean energy generated from gobar through our integrated biogas plant.',
    price: 'On Request',
    image: '🔋',
    features: ['Clean Energy', 'Gobar Based', 'Sustainable']
  }
];

export const allProducts = [...dairyProducts, ...agricultureProducts];
