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
    name: 'Option A — Seedling',
    minAmount: 10_000,
    icon: '🌱',
    tagline: 'Start your journey in ethical farming',
    highlights: [
      'Minimum investment ₹10,000',
      'Digital share certificate',
      'Annual dividend eligibility',
      'Investor dashboard access',
    ],
    popular: false,
  },
  {
    id: 'B',
    name: 'Option B — Harvest',
    minAmount: 50_000,
    icon: '🌾',
    tagline: 'Grow with our dairy & farm operations',
    highlights: [
      'Minimum investment ₹50,000',
      'Digital share certificate',
      'Annual dividend eligibility',
      'Priority support desk',
      'Quarterly farm reports',
    ],
    popular: true,
  },
  {
    id: 'C',
    name: 'Option C — Legacy',
    minAmount: 1_00_000,
    icon: '🏆',
    tagline: 'Partner in Palanhar’s long-term growth',
    highlights: [
      'Investment ₹1,00,000 and above',
      'Digital share certificate',
      'Annual dividend eligibility',
      'Dedicated relationship manager',
      'Invitation to annual farm visit',
      'Early access to new plans',
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
  name: 'Rajesh Kumar Sharma',
  investorId: 'PAL-INV-0042',
  memberSince: '12 Apr 2024',
  kycStatus: 'Approved',
  email: 'rajesh.sharma@example.com',
  mobile: '+91 98765 43210',
  pan: 'ABCDE••••F',
  aadhaar: '•••• •••• 4321',
  bank: { name: 'State Bank of India', account: '•••• ••• 8842', ifsc: 'SBIN0001234' },
  nominee: { name: 'Sunita Sharma', relation: 'Spouse' },
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
      plan: 'Option C — Legacy',
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
  { id: 1, name: 'PAN Card', category: 'KYC', status: 'Verified', date: '12 Apr 2024' },
  { id: 2, name: 'Aadhaar Card', category: 'KYC', status: 'Verified', date: '12 Apr 2024' },
  { id: 3, name: 'Bank Proof (Cancelled Cheque)', category: 'KYC', status: 'Verified', date: '13 Apr 2024' },
  { id: 4, name: 'Investment Certificate — PAL-SHARE-2026-0042', category: 'Certificate', status: 'Issued', date: '15 Apr 2024' },
  { id: 5, name: 'Dividend Statement FY 2024-25', category: 'Statement', status: 'Available', date: '18 Jul 2025' },
  { id: 6, name: 'Account Statement 2025-26', category: 'Statement', status: 'Available', date: '01 Apr 2026' },
  { id: 7, name: 'Audited Balance Sheet FY 2024-25', category: 'Financial Report', status: 'Available', date: '30 Jun 2025' },
  { id: 8, name: 'Annual Report FY 2024-25', category: 'Financial Report', status: 'Available', date: '30 Jun 2025' },
];

// 12. Notifications
export const investorNotifications = [
  { id: 1, date: '30 May 2026', title: 'Dividend Declared', text: 'Board approved 15% dividend for FY 2025-26. Your share: ₹5,000.', type: 'dividend' },
  { id: 2, date: '01 Apr 2026', title: 'Statement Ready', text: 'Your annual account statement for 2025-26 is available for download.', type: 'document' },
  { id: 3, date: '18 Jul 2025', title: 'Dividend Paid', text: '₹6,000 credited to your dividend wallet for FY 2024-25.', type: 'payment' },
  { id: 4, date: '12 Apr 2024', title: 'KYC Approved', text: 'Your registration and KYC have been approved. Investor ID: PAL-INV-0042.', type: 'kyc' },
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
  { name: 'Option A (₹10K+)', value: 645, color: '#81C784' },
  { name: 'Option B (₹50K+)', value: 412, color: '#2E7D32' },
  { name: 'Option C (₹1L+)', value: 191, color: '#F9A825' },
];

export const KYC_STATUSES = ['Pending', 'Under Review', 'Approved', 'Rejected'];

export const pendingInvestorQueue = [
  { id: 'PAL-INV-1249', name: 'Meena Devi', mobile: '+91 90012 33445', amount: 50_000, plan: 'B', kycStatus: 'Under Review', appliedOn: '08 Jun 2026', pan: true, aadhaar: true, bank: true },
  { id: 'PAL-INV-1250', name: 'Suresh Chand Gupta', mobile: '+91 98220 11223', amount: 1_50_000, plan: 'C', kycStatus: 'Pending', appliedOn: '09 Jun 2026', pan: true, aadhaar: false, bank: false },
  { id: 'PAL-INV-1251', name: 'Kavita Joshi', mobile: '+91 91234 55667', amount: 10_000, plan: 'A', kycStatus: 'Under Review', appliedOn: '10 Jun 2026', pan: true, aadhaar: true, bank: false },
  { id: 'PAL-INV-1252', name: 'Mohammed Irfan', mobile: '+91 99887 66554', amount: 75_000, plan: 'B', kycStatus: 'Pending', appliedOn: '11 Jun 2026', pan: false, aadhaar: false, bank: false },
  { id: 'PAL-INV-1253', name: 'Anita Kumawat', mobile: '+91 94140 22113', amount: 2_00_000, plan: 'C', kycStatus: 'Under Review', appliedOn: '11 Jun 2026', pan: true, aadhaar: true, bank: true },
];

export const shareRegister = [
  { investorId: 'PAL-INV-0001', name: 'Harish Chandra Meena', certificateNo: 'PAL-SHARE-2024-0001', shares: 5000, amount: 5_00_000, issuedOn: '02 Jan 2024' },
  { investorId: 'PAL-INV-0042', name: 'Rajesh Kumar Sharma', certificateNo: 'PAL-SHARE-2026-0042', shares: 1000, amount: 1_00_000, issuedOn: '15 Apr 2024' },
  { investorId: 'PAL-INV-0118', name: 'Sushila Bai', certificateNo: 'PAL-SHARE-2024-0118', shares: 500, amount: 50_000, issuedOn: '21 Aug 2024' },
  { investorId: 'PAL-INV-0356', name: 'Dinesh Prajapat', certificateNo: 'PAL-SHARE-2025-0356', shares: 100, amount: 10_000, issuedOn: '03 Feb 2025' },
  { investorId: 'PAL-INV-0789', name: 'Geeta Sharma', certificateNo: 'PAL-SHARE-2025-0789', shares: 1500, amount: 1_50_000, issuedOn: '17 Sep 2025' },
];

// 11. Compliance — audit trail (every action logged)
export const auditTrail = [
  { id: 1, timestamp: '12 Jun 2026, 10:42', actor: 'Admin (Priya)', action: 'Approved KYC for PAL-INV-1248' },
  { id: 2, timestamp: '11 Jun 2026, 16:05', actor: 'CMD', action: 'Approved dividend rate 15% for FY 2025-26' },
  { id: 3, timestamp: '11 Jun 2026, 11:30', actor: 'System', action: 'Generated certificate PAL-SHARE-2026-1247' },
  { id: 4, timestamp: '10 Jun 2026, 14:12', actor: 'Admin (Priya)', action: 'Verified bank account for PAL-INV-1245' },
  { id: 5, timestamp: '10 Jun 2026, 09:55', actor: 'System', action: 'Dividend payout batch #38 processed (212 investors)' },
  { id: 6, timestamp: '09 Jun 2026, 18:20', actor: 'Admin (Arun)', action: 'Rejected KYC for PAL-INV-1244 (PAN mismatch)' },
];

// 4. Registration flow steps (Investor Registration Flow)
export const registrationSteps = [
  { id: 1, key: 'mobile', title: 'Mobile Verification', desc: 'OTP sent to your mobile number' },
  { id: 2, key: 'email', title: 'Email Verification', desc: 'Confirm your email address' },
  { id: 3, key: 'profile', title: 'Profile Creation', desc: 'Basic personal details' },
  { id: 4, key: 'pan', title: 'PAN Upload', desc: 'Upload PAN card copy' },
  { id: 5, key: 'aadhaar', title: 'Aadhaar Upload', desc: 'Upload Aadhaar card copy' },
  { id: 6, key: 'bank', title: 'Bank Details', desc: 'Account for dividend payouts' },
  { id: 7, key: 'nominee', title: 'Nominee Details', desc: 'Your nominee information' },
  { id: 8, key: 'review', title: 'KYC Submission', desc: 'Review & submit for approval' },
];

// Financial roadmap (from the company business plan)
export const growthProjections = [
  { year: 'Year 1', revenue: 2_00_00_000, profit: 30_00_000 },
  { year: 'Year 2', revenue: 7_00_00_000, profit: 1_20_00_000 },
  { year: 'Year 3', revenue: 18_00_00_000, profit: 4_00_00_000 },
];

export const financialTargets = {
  fiveYearRevenueTarget: 80_00_00_000, // ₹80 Cr by year 5
  dscr: 2.36, // average debt service coverage ratio
  dailyMilkLitres: 2000,
  cowCount: 200,
};

// How the money flows — used on the Invest page journey visual
export const financialFlow = [
  { step: 1, icon: '📝', title: 'Register & KYC', desc: 'OTP verification, PAN, Aadhaar and bank details — approved by our compliance team.' },
  { step: 2, icon: '💰', title: 'Invest in a Plan', desc: 'Choose Option A, B or C. Funds go directly to Palanhar farm operations.' },
  { step: 3, icon: '📜', title: 'Shares Allotted', desc: 'System issues your Investor ID and share certificate, recorded in the share register.' },
  { step: 4, icon: '🐄', title: 'Farm Generates Profit', desc: 'Dairy and organic produce revenue creates the company’s annual net profit.' },
  { step: 5, icon: '🏛️', title: 'Board Declares Dividend', desc: 'CMD approves the dividend rate on net profit, e.g. 15% of ₹10 Cr = ₹1.5 Cr pool.' },
  { step: 6, icon: '👛', title: 'Dividend to Your Wallet', desc: 'Your share = (your holding ÷ total pool) × dividend pool, credited automatically.' },
  { step: 7, icon: '🏦', title: 'Withdraw or Reinvest', desc: 'Transfer to your verified bank account or reinvest to grow your holding.' },
];
