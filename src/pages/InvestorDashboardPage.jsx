import DashboardHeader from '../components/dashboard/DashboardHeader';
import PortfolioStats from '../components/dashboard/PortfolioStats';
import PortfolioGrowthChart from '../components/dashboard/PortfolioGrowthChart';
import DividendWallet from '../components/dashboard/DividendWallet';
import ShareCertificate from '../components/dashboard/ShareCertificate';
import DividendHistoryTable from '../components/dashboard/DividendHistoryTable';
import WalletTransactions from '../components/dashboard/WalletTransactions';
import DocumentsRepository from '../components/dashboard/DocumentsRepository';
import InvestPlans from '../components/invest/InvestPlans';

export default function InvestorDashboardPage() {
  return (
    <div className="bg-cream-white/40 min-h-screen py-10">
      <div className="container-custom flex flex-col gap-6">
        <DashboardHeader />

        <PortfolioStats />

        {/* Choose a scheme → KYC → payment flow */}
        <div className="rounded-2xl border border-primary-green/10 bg-white shadow-sm">
          <InvestPlans />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <PortfolioGrowthChart />
          <DividendWallet />
        </div>

        <ShareCertificate />

        <DividendHistoryTable />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2">
            <WalletTransactions />
          </div>
          <div className="lg:col-span-3">
            <DocumentsRepository />
          </div>
        </div>
      </div>
    </div>
  );
}
