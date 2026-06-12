import { useCallback, useState } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminKpiGrid from '../components/admin/AdminKpiGrid';
import AdminCharts from '../components/admin/AdminCharts';
import DividendConsole from '../components/admin/DividendConsole';
import AdminApprovalQueue from '../components/admin/AdminApprovalQueue';
import AdminShareRegister from '../components/admin/AdminShareRegister';
import AdminAuditTrail from '../components/admin/AdminAuditTrail';
import { auditTrail } from '../data/investorData';

const nowStamp = () =>
  new Date().toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

export default function AdminDashboardPage() {
  // Local-state copy of the audit trail so governance actions taken in this
  // session (dividend declarations, approvals) appear live at the top.
  const [trail, setTrail] = useState(auditTrail);

  const addAuditEntry = useCallback(({ actor, action }) => {
    setTrail((prev) => [
      { id: `live-${Date.now()}-${prev.length}`, timestamp: nowStamp(), actor, action, isNew: true },
      ...prev,
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-cream-white/40 py-10">
      <div className="container-custom flex flex-col gap-6">
        <AdminHeader />
        <AdminKpiGrid />
        <AdminCharts />
        <DividendConsole onAudit={addAuditEntry} />
        <AdminApprovalQueue onAudit={addAuditEntry} />
        <AdminShareRegister />
        <AdminAuditTrail entries={trail} />
      </div>
    </div>
  );
}
