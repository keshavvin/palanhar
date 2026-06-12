export const dairyProducts = [
  {
    id: 1,
    name: 'Fresh Milk',
    category: 'Dairy',
    description: 'Pure and fresh cow milk, delivered daily from our healthy cattle.',
    price: '₹50/L',
    image: '🥛',
    features: ['100% Pure', 'No Preservatives', 'Fresh Daily']
  },
  {
    id: 2,
    name: 'Buffalo Milk',
    category: 'Dairy',
    description: 'Rich and creamy buffalo milk with high nutritional value.',
    price: '₹60/L',
    image: '🥛',
    features: ['High Protein', 'Creamier', 'Calcium Rich']
  },
  {
    id: 3,
    name: 'Organic Ghee',
    category: 'Dairy',
    description: 'Pure clarified butter made from organic milk using traditional methods.',
    price: '₹800/kg',
    image: '🧈',
    features: ['Grass-fed', 'Traditional', 'Pure Ghee']
  },
  {
    id: 4,
    name: 'Fresh Butter',
    category: 'Dairy',
    description: 'Creamy butter churned from fresh dairy milk.',
    price: '₹400/kg',
    image: '🧈',
    features: ['Fresh', 'Pure Cream', 'No Additives']
  },
  {
    id: 5,
    name: 'Paneer',
    category: 'Dairy',
    description: 'Soft and delicious cottage cheese made from fresh milk.',
    price: '₹300/kg',
    image: '🧀',
    features: ['Soft', 'Fresh', 'High Protein']
  },
  {
    id: 6,
    name: 'Fresh Curd',
    category: 'Dairy',
    description: 'Creamy yogurt made with traditional fermentation process.',
    price: '₹80/kg',
    image: '🥣',
    features: ['Probiotic', 'Fresh', 'Creamy']
  }
];

export const agricultureProducts = [
  {
    id: 7,
    name: 'Organic Wheat',
    category: 'Agriculture',
    description: 'Pure organic wheat grown without chemical pesticides.',
    price: '₹25/kg',
    image: '🌾',
    features: ['Organic', 'High Fiber', 'Nutrient Rich']
  },
  {
    id: 8,
    name: 'Organic Rice',
    category: 'Agriculture',
    description: 'Premium basmati rice cultivated using organic farming methods.',
    price: '₹80/kg',
    image: '🌾',
    features: ['Basmati', 'Organic', 'Long Grain']
  },
  {
    id: 9,
    name: 'Fresh Vegetables',
    category: 'Agriculture',
    description: 'Seasonal fresh vegetables picked daily from our organic farms.',
    price: '₹40-100/kg',
    image: '🥬',
    features: ['Seasonal', 'Fresh', 'Pesticide Free']
  },
  {
    id: 10,
    name: 'Organic Fruits',
    category: 'Agriculture',
    description: 'Healthy organic fruits grown without harmful chemicals.',
    price: '₹60-120/kg',
    image: '🍎',
    features: ['Natural', 'Organic', 'Sweet & Juicy']
  },
  {
    id: 11,
    name: 'Pulses & Lentils',
    category: 'Agriculture',
    description: 'Pure pulses and lentils rich in protein and nutrition.',
    price: '₹80-150/kg',
    image: '🫘',
    features: ['Protein Rich', 'Organic', 'Natural']
  },
  {
    id: 12,
    name: 'Organic Honey',
    category: 'Agriculture',
    description: 'Pure raw honey harvested from our organic bee farms.',
    price: '₹400-600/kg',
    image: '🍯',
    features: ['Raw Honey', 'Natural', 'Antibiotic']
  }
];

export const allProducts = [...dairyProducts, ...agricultureProducts];
