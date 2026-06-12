import { FaLeaf, FaHandshake, FaTruck, FaGraduationCap } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    title: 'Dairy Farming',
    description: 'Modern dairy farming techniques with animal welfare at the core. We maintain healthy livestock for premium milk production.',
    icon: FaLeaf,
    features: ['Organic Feed', 'Veterinary Care', 'Clean Environment']
  },
  {
    id: 2,
    title: 'Organic Agriculture',
    description: 'Sustainable farming practices without synthetic pesticides. Growing healthy crops for a healthier future.',
    icon: FaLeaf,
    features: ['No Pesticides', 'Soil Health', 'Crop Rotation']
  },
  {
    id: 3,
    title: 'Gaushala & Cow Care',
    description: 'Cruelty-free gaushala management rooted in Gau Seva — health, nutrition and lifelong shelter for every cow.',
    icon: FaLeaf,
    features: ['Health Monitoring', 'Nutrition Planning', 'Lifelong Shelter']
  },
  {
    id: 4,
    title: 'Farm Consulting',
    description: 'Expert consultation for farmers on modern agricultural techniques and sustainability practices.',
    icon: FaHandshake,
    features: ['Expert Advice', 'Best Practices', 'Technical Support']
  },
  {
    id: 5,
    title: 'Milk Distribution',
    description: 'Fresh milk delivery directly from farm to door, ensuring quality and hygiene at every step.',
    icon: FaTruck,
    features: ['Daily Delivery', 'Cold Chain', 'On-Time Arrival']
  },
  {
    id: 6,
    title: 'Agricultural Training',
    description: 'Training programs for farmers on organic farming, animal care, and sustainable agriculture.',
    icon: FaGraduationCap,
    features: ['Hands-on Training', 'Certification', 'Ongoing Support']
  }
];
