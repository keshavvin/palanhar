// Product price list — Ingredient (name) · Quantity · MRP · Margin.
// NOTE: This is a SAMPLE seed. Replace/extend with the full catalogue —
// paste the real rows here (or share a CSV and they'll be loaded as:
//   { name, qty, mrp, margin }   grouped under each category).
export const priceList = [
  {
    category: 'A2 डेयरी उत्पाद',
    items: [
      { name: 'A2 गाय का दूध', qty: '1 L', mrp: 90, margin: '15%' },
      { name: 'A2 देसी घी (बिलोना)', qty: '500 ml', mrp: 1200, margin: '20%' },
      { name: 'ताज़ा मक्खन', qty: '500 g', mrp: 300, margin: '18%' },
      { name: 'पनीर', qty: '250 g', mrp: 100, margin: '15%' },
      { name: 'ताज़ा दही', qty: '500 g', mrp: 60, margin: '12%' },
    ],
  },
  {
    category: 'पंचगव्य एवं गौ-आधारित उत्पाद',
    items: [
      { name: 'गोमूत्र अर्क', qty: '500 ml', mrp: 120, margin: '25%' },
      { name: 'पंचगव्य धूपबत्ती', qty: '1 पैक', mrp: 80, margin: '30%' },
      { name: 'पंचगव्य आयुर्वेदिक साबुन', qty: '100 g', mrp: 90, margin: '28%' },
    ],
  },
  {
    category: 'जैविक खाद एवं कृषि इनपुट',
    items: [
      { name: 'गोबर खाद', qty: '5 kg', mrp: 50, margin: '20%' },
      { name: 'वर्मी कम्पोस्ट', qty: '5 kg', mrp: 75, margin: '22%' },
      { name: 'जैविक कीटनाशक', qty: '1 L', mrp: 150, margin: '25%' },
    ],
  },
];
