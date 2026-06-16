// Mock data layer for the Palanhar Investor Module demo (SRS: Investor Management
// & Dividend Distribution System). All figures are illustrative for the demo.

export const formatINR = (amount, { decimals = 0 } = {}) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);

export const formatINRCompact = (amount) => {
  if (amount >= 1_00_00_000) return `₹${(amount / 1_00_00_000).toFixed(2)} Cr`;
  if (amount >= 1_00_000) return `₹${(amount / 1_00_000).toFixed(2)} L`;
  return formatINR(amount);
};

// ---------------------------------------------------------------------------
// 5. Investment Plans (admin configurable)
// ---------------------------------------------------------------------------
export const investmentPlans = [
  {
    id: 'A',
    name: 'ऑप्शन A — गौ मित्र',
    minAmount: 10_000,
    icon: '🌱',
    tagline: 'बिगिन योर गौ सेवा जर्नी',
    highlights: [
      'मिनिमम इन्वेस्टमेंट ₹10,000',
      'सपोर्ट्स फीड & केयर फॉर अवर गिर काऊज',
      'डिजिटल शेयर सर्टिफिकेट',
      'एनुअल डिविडेंड एलिजिबिलिटी',
      'इन्वेस्टर डैशबोर्ड एक्सेस',
    ],
    popular: false,
  },
  {
    id: 'B',
    name: 'ऑप्शन B — गौ पालक',
    minAmount: 50_000,
    icon: '🐄',
    tagline: 'नर्चर द गौशाला एज़ इट ग्रोज़',
    highlights: [
      'मिनिमम इन्वेस्टमेंट ₹50,000',
      'सपोर्ट्स काऊ केयर, शेल्टर & वेटरनरी नीड्स',
      'डिजिटल शेयर सर्टिफिकेट',
      'एनुअल डिविडेंड एलिजिबिलिटी',
      'प्रायोरिटी सपोर्ट डेस्क',
      'क्वार्टरली गौशाला रिपोर्ट्स',
    ],
    popular: true,
  },
  {
    id: 'C',
    name: 'ऑप्शन C — गौ रक्षक',
    minAmount: 1_00_000,
    icon: '🏆',
    tagline: 'बिकम अ गार्डियन ऑफ द हर्ड',
    highlights: [
      'इन्वेस्टमेंट ₹1,00,000 एंड अबव',
      'सपोर्ट्स द फुल सर्कल — काऊज, फार्म & पंचगव्य',
      'डिजिटल शेयर सर्टिफिकेट',
      'एनुअल डिविडेंड एलिजिबिलिटी',
      'डेडिकेटेड रिलेशनशिप मैनेजर',
      'इनविटेशन टू एनुअल गौशाला विज़िट',
    ],
    popular: false,
  },
];

// ---------------------------------------------------------------------------
// 7. Dividend math (SRS formula)
// Dividend = (Investor Shareholding ÷ Total Shareholding) × Dividend Pool
// ---------------------------------------------------------------------------
export const dividendExample = {
  financialYear: 'FY 2025-26',
  netProfit: 10_00_00_000, // ₹10 Crore
  boardApprovedRatePct: 15,
  totalInvestmentPool: 1_00_00_000, // ₹1 Crore (demo pool)
};

export const calculateDividend = ({
  investment,
  totalPool = dividendExample.totalInvestmentPool,
  netProfit = dividendExample.netProfit,
  ratePct = dividendExample.boardApprovedRatePct,
}) => {
  const dividendPool = (netProfit * ratePct) / 100;
  const shareFraction = totalPool > 0 ? investment / totalPool : 0;
  return {
    dividendPool,
    shareFraction,
    sharePct: shareFraction * 100,
    dividend: Math.round(shareFraction * dividendPool),
  };
};

// ---------------------------------------------------------------------------
// Current (logged-in) demo investor — 6. Share Allocation
// ---------------------------------------------------------------------------
export const currentInvestor = {
  name: 'राजेश कुमार शर्मा',
  investorId: 'PAL-INV-0042',
  memberSince: '12 Apr 2024',
  kycStatus: 'Approved',
  email: 'rajesh.sharma@example.com',
  mobile: '+91 98765 43210',
  pan: 'ABCDE••••F',
  aadhaar: '•••• •••• 4321',
  bank: { name: 'स्टेट बैंक ऑफ इंडिया', account: '•••• ••• 8842', ifsc: 'SBIN0001234' },
  nominee: { name: 'सुनीता शर्मा', relation: 'स्पाउस' },
  totalInvestment: 1_00_000,
  shares: 1000,
  faceValue: 100,
  currentValue: 1_12_500,
  dividendEarned: 15_000,
  dividendPaid: 10_000,
  dividendPending: 5_000,
  certificates: [
    {
      certificateNo: 'PAL-SHARE-2026-0042',
      issuedOn: '15 Apr 2024',
      amount: 1_00_000,
      shares: 1000,
      plan: 'ऑप्शन C — लिगेसी',
    },
  ],
};

export const portfolioGrowth = [
  { month: 'Apr 24', value: 100000 },
  { month: 'Jun 24', value: 101200 },
  { month: 'Aug 24', value: 102800 },
  { month: 'Oct 24', value: 104100 },
  { month: 'Dec 24', value: 106000 },
  { month: 'Feb 25', value: 107400 },
  { month: 'Apr 25', value: 108900 },
  { month: 'Jun 25', value: 110200 },
  { month: 'Aug 25', value: 111000 },
  { month: 'Oct 25', value: 111800 },
  { month: 'Dec 25', value: 112100 },
  { month: 'Feb 26', value: 112500 },
];

// 9. Dividend history (per financial year)
export const dividendHistory = [
  {
    fy: 'FY 2023-24',
    netProfit: 6_50_00_000,
    ratePct: 10,
    yourDividend: 4_000,
    status: 'Paid',
    paidOn: '22 Jul 2024',
  },
  {
    fy: 'FY 2024-25',
    netProfit: 8_20_00_000,
    ratePct: 12,
    yourDividend: 6_000,
    status: 'Paid',
    paidOn: '18 Jul 2025',
  },
  {
    fy: 'FY 2025-26',
    netProfit: 10_00_00_000,
    ratePct: 15,
    yourDividend: 5_000,
    status: 'Declared',
    paidOn: null,
  },
];

// 8. Dividend wallet
export const walletSummary = {
  declared: 15_000,
  paid: 10_000,
  pending: 5_000,
};

export const walletTransactions = [
  { id: 1, date: '18 Jul 2025', type: 'Dividend Credit', amount: 6_000, status: 'Completed' },
  { id: 2, date: '21 Jul 2025', type: 'Transfer to Bank', amount: -6_000, status: 'Completed' },
  { id: 3, date: '22 Jul 2024', type: 'Dividend Credit', amount: 4_000, status: 'Completed' },
  { id: 4, date: '25 Jul 2024', type: 'Reinvested', amount: -4_000, status: 'Completed' },
  { id: 5, date: '30 May 2026', type: 'Dividend Declared', amount: 5_000, status: 'Pending Payout' },
];

// 13. Documents repository
export const investorDocuments = [
  { id: 1, name: 'PAN कार्ड', category: 'KYC', status: 'Verified', date: '12 Apr 2024' },
  { id: 2, name: 'आधार कार्ड', category: 'KYC', status: 'Verified', date: '12 Apr 2024' },
  { id: 3, name: 'बैंक प्रूफ (कैंसिल्ड चेक)', category: 'KYC', status: 'Verified', date: '13 Apr 2024' },
  { id: 4, name: 'इन्वेस्टमेंट सर्टिफिकेट — PAL-SHARE-2026-0042', category: 'Certificate', status: 'Issued', date: '15 Apr 2024' },
  { id: 5, name: 'डिविडेंड स्टेटमेंट FY 2024-25', category: 'Statement', status: 'Available', date: '18 Jul 2025' },
  { id: 6, name: 'अकाउंट स्टेटमेंट 2025-26', category: 'Statement', status: 'Available', date: '01 Apr 2026' },
  { id: 7, name: 'ऑडिटेड बैलेंस शीट FY 2024-25', category: 'Financial Report', status: 'Available', date: '30 Jun 2025' },
  { id: 8, name: 'एनुअल रिपोर्ट FY 2024-25', category: 'Financial Report', status: 'Available', date: '30 Jun 2025' },
];

// 12. Notifications
export const investorNotifications = [
  { id: 1, date: '30 May 2026', title: 'डिविडेंड डिक्लेयर्ड', text: 'बोर्ड अप्रूव्ड 15% डिविडेंड फॉर FY 2025-26। योर शेयर: ₹5,000।', type: 'dividend' },
  { id: 2, date: '01 Apr 2026', title: 'स्टेटमेंट रेडी', text: 'योर एनुअल अकाउंट स्टेटमेंट फॉर 2025-26 इज़ अवेलेबल फॉर डाउनलोड।', type: 'document' },
  { id: 3, date: '18 Jul 2025', title: 'डिविडेंड पेड', text: '₹6,000 क्रेडिटेड टू योर डिविडेंड वॉलेट फॉर FY 2024-25।', type: 'payment' },
  { id: 4, date: '12 Apr 2024', title: 'KYC अप्रूव्ड', text: 'योर रजिस्ट्रेशन एंड KYC हैव बीन अप्रूव्ड। इन्वेस्टर आईडी: PAL-INV-0042।', type: 'kyc' },
];

// ---------------------------------------------------------------------------
// 10. Admin / CMD dashboard data
// ---------------------------------------------------------------------------
export const adminStats = {
  totalInvestors: 1248,
  activeInvestors: 1106,
  pendingApprovals: 23,
  totalFundsRaised: 4_25_00_000,
  dividendLiability: 63_75_000,
  dividendPaid: 48_20_000,
  pendingPayments: 15_55_000,
};

export const fundsRaisedMonthly = [
  { month: 'Jul 25', amount: 2400000 },
  { month: 'Aug 25', amount: 2900000 },
  { month: 'Sep 25', amount: 3300000 },
  { month: 'Oct 25', amount: 3100000 },
  { month: 'Nov 25', amount: 3800000 },
  { month: 'Dec 25', amount: 4500000 },
  { month: 'Jan 26', amount: 4100000 },
  { month: 'Feb 26', amount: 4700000 },
  { month: 'Mar 26', amount: 5200000 },
  { month: 'Apr 26', amount: 4900000 },
  { month: 'May 26', amount: 5600000 },
];

export const investorDistribution = [
  { name: 'ऑप्शन A (₹10K+)', value: 645, color: '#81C784' },
  { name: 'ऑप्शन B (₹50K+)', value: 412, color: '#2E7D32' },
  { name: 'ऑप्शन C (₹1L+)', value: 191, color: '#F9A825' },
];

export const KYC_STATUSES = ['Pending', 'Under Review', 'Approved', 'Rejected'];

export const pendingInvestorQueue = [
  { id: 'PAL-INV-1249', name: 'मीना देवी', mobile: '+91 90012 33445', amount: 50_000, plan: 'B', kycStatus: 'Under Review', appliedOn: '08 Jun 2026', pan: true, aadhaar: true, bank: true },
  { id: 'PAL-INV-1250', name: 'सुरेश चंद गुप्ता', mobile: '+91 98220 11223', amount: 1_50_000, plan: 'C', kycStatus: 'Pending', appliedOn: '09 Jun 2026', pan: true, aadhaar: false, bank: false },
  { id: 'PAL-INV-1251', name: 'कविता जोशी', mobile: '+91 91234 55667', amount: 10_000, plan: 'A', kycStatus: 'Under Review', appliedOn: '10 Jun 2026', pan: true, aadhaar: true, bank: false },
  { id: 'PAL-INV-1252', name: 'मोहम्मद इरफान', mobile: '+91 99887 66554', amount: 75_000, plan: 'B', kycStatus: 'Pending', appliedOn: '11 Jun 2026', pan: false, aadhaar: false, bank: false },
  { id: 'PAL-INV-1253', name: 'अनीता कुमावत', mobile: '+91 94140 22113', amount: 2_00_000, plan: 'C', kycStatus: 'Under Review', appliedOn: '11 Jun 2026', pan: true, aadhaar: true, bank: true },
];

export const shareRegister = [
  { investorId: 'PAL-INV-0001', name: 'हरीश चंद्र मीना', certificateNo: 'PAL-SHARE-2024-0001', shares: 5000, amount: 5_00_000, issuedOn: '02 Jan 2024' },
  { investorId: 'PAL-INV-0042', name: 'राजेश कुमार शर्मा', certificateNo: 'PAL-SHARE-2026-0042', shares: 1000, amount: 1_00_000, issuedOn: '15 Apr 2024' },
  { investorId: 'PAL-INV-0118', name: 'सुशीला बाई', certificateNo: 'PAL-SHARE-2024-0118', shares: 500, amount: 50_000, issuedOn: '21 Aug 2024' },
  { investorId: 'PAL-INV-0356', name: 'दिनेश प्रजापत', certificateNo: 'PAL-SHARE-2025-0356', shares: 100, amount: 10_000, issuedOn: '03 Feb 2025' },
  { investorId: 'PAL-INV-0789', name: 'गीता शर्मा', certificateNo: 'PAL-SHARE-2025-0789', shares: 1500, amount: 1_50_000, issuedOn: '17 Sep 2025' },
];

// 11. Compliance — audit trail (every action logged)
export const auditTrail = [
  { id: 1, timestamp: '12 Jun 2026, 10:42', actor: 'एडमिन (प्रिया)', action: 'अप्रूव्ड KYC फॉर PAL-INV-1248' },
  { id: 2, timestamp: '11 Jun 2026, 16:05', actor: 'CMD', action: 'अप्रूव्ड डिविडेंड रेट 15% फॉर FY 2025-26' },
  { id: 3, timestamp: '11 Jun 2026, 11:30', actor: 'सिस्टम', action: 'जनरेटेड सर्टिफिकेट PAL-SHARE-2026-1247' },
  { id: 4, timestamp: '10 Jun 2026, 14:12', actor: 'एडमिन (प्रिया)', action: 'वेरिफाइड बैंक अकाउंट फॉर PAL-INV-1245' },
  { id: 5, timestamp: '10 Jun 2026, 09:55', actor: 'सिस्टम', action: 'डिविडेंड पेआउट बैच #38 प्रोसेस्ड (212 इन्वेस्टर्स)' },
  { id: 6, timestamp: '09 Jun 2026, 18:20', actor: 'एडमिन (अरुण)', action: 'रिजेक्टेड KYC फॉर PAL-INV-1244 (PAN मिसमैच)' },
];

// 4. Registration flow steps (Investor Registration Flow)
export const registrationSteps = [
  { id: 1, key: 'mobile', title: 'मोबाइल वेरिफिकेशन', desc: 'OTP सेंट टू योर मोबाइल नंबर' },
  { id: 2, key: 'email', title: 'ईमेल वेरिफिकेशन', desc: 'कन्फर्म योर ईमेल एड्रेस' },
  { id: 3, key: 'profile', title: 'प्रोफाइल क्रिएशन', desc: 'बेसिक पर्सनल डिटेल्स' },
  { id: 4, key: 'pan', title: 'PAN अपलोड', desc: 'अपलोड PAN कार्ड कॉपी' },
  { id: 5, key: 'aadhaar', title: 'आधार अपलोड', desc: 'अपलोड आधार कार्ड कॉपी' },
  { id: 6, key: 'bank', title: 'बैंक डिटेल्स', desc: 'अकाउंट फॉर डिविडेंड पेआउट्स' },
  { id: 7, key: 'nominee', title: 'नॉमिनी डिटेल्स', desc: 'योर नॉमिनी इन्फॉर्मेशन' },
  { id: 8, key: 'review', title: 'KYC सबमिशन', desc: 'रिव्यू & सबमिट फॉर अप्रूवल' },
];

// Financial roadmap (from the company business plan)
export const growthProjections = [
  { year: 'ईयर 1', revenue: 2_00_00_000, profit: 30_00_000 },
  { year: 'ईयर 2', revenue: 7_00_00_000, profit: 1_20_00_000 },
  { year: 'ईयर 3', revenue: 18_00_00_000, profit: 4_00_00_000 },
];

export const financialTargets = {
  fiveYearRevenueTarget: 80_00_00_000, // ₹80 Cr by year 5
  dscr: 2.36, // average debt service coverage ratio
  dailyMilkLitres: 2000,
  cowCount: 200,
};

// How the money flows — used on the Invest page journey visual
export const financialFlow = [
  { step: 1, icon: '📝', title: 'रजिस्टर & KYC', desc: 'OTP वेरिफिकेशन, PAN, आधार एंड बैंक डिटेल्स — अप्रूव्ड बाय अवर कम्प्लायंस टीम।' },
  { step: 2, icon: '💰', title: 'इन्वेस्ट इन गौ सेवा', desc: 'चूज़ अ सेवा प्लान। फंड्स गो डायरेक्टली टू काऊ केयर, द गौशाला एंड फार्म ऑपरेशंस।' },
  { step: 3, icon: '📜', title: 'शेयर्स अलॉटेड', desc: 'सिस्टम इश्यूज़ योर इन्वेस्टर आईडी एंड शेयर सर्टिफिकेट, रिकॉर्डेड इन द शेयर रजिस्टर।' },
  { step: 4, icon: '🐄', title: 'गौशाला क्रिएट्स वैल्यू', desc: 'A2 डेयरी, पंचगव्य प्रोडक्ट्स एंड ऑर्गेनिक प्रोड्यूस क्रिएट द कंपनीज़ एनुअल नेट प्रॉफिट।' },
  { step: 5, icon: '🏛️', title: 'बोर्ड डिक्लेयर्स डिविडेंड', desc: 'CMD अप्रूव्स द डिविडेंड रेट ऑन नेट प्रॉफिट, e.g. 15% ऑफ ₹10 Cr = ₹1.5 Cr पूल।' },
  { step: 6, icon: '👛', title: 'डिविडेंड टू योर वॉलेट', desc: 'योर शेयर = (योर होल्डिंग ÷ टोटल पूल) × डिविडेंड पूल, क्रेडिटेड ऑटोमैटिकली।' },
  { step: 7, icon: '🏦', title: 'विदड्रॉ ऑर रीइन्वेस्ट', desc: 'ट्रांसफर टू योर वेरिफाइड बैंक अकाउंट ऑर रीइन्वेस्ट टू डीपन योर सेवा।' },
];
