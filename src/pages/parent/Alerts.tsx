import { alerts } from '@/data/mockData';
import { AlertCard } from '@/components/safepath/AlertCard';
import { ExportButton } from '@/components/safepath/ExportButton';
import { useState } from 'react';

const severities = ['all', 'critical', 'high', 'medium', 'low'] as const;
const types = ['all', 'route-deviation', 'prolonged-stop', 'inactivity', 'geofence-breach', 'device-offline', 'pickup-mismatch'] as const;

export default function AlertsPage() {
  const [severity, setSeverity] = useState<string>('all');
  const [type, setType] = useState<string>('all');
  const [tab, setTab] = useState<'active' | 'recent'>('active');

  const filtered = alerts.filter(a => {
    if (severity !== 'all' && a.severity !== severity) return false;
    if (type !== 'all' && a.type !== type) return false;
    if (tab === 'active') return !a.isRead;
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold">Alerts & Risk Insights</h1>
          <p className="text-sm text-muted-foreground">AI-detected anomalies with explainable risk analysis</p>
        </div>
        <ExportButton label="Export Alerts" />
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {(['active', 'recent'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${tab === t ? 'gradient-primary text-white shadow-safe-md' : 'bg-muted text-muted-foreground'}`}>
            {t === 'active' ? `Active (${alerts.filter(a => !a.isRead).length})` : 'All Recent'}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex gap-1 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground self-center mr-1">Severity:</span>
          {severities.map(s => (
            <button key={s} onClick={() => setSeverity(s)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${severity === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-1 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground self-center mr-1">Type:</span>
          {types.map(t => (
            <button key={t} onClick={() => setType(t)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${type === t ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>
              {t === 'all' ? 'All' : t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Alert List */}
      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map(a => <AlertCard key={a.id} alert={a} />)
        ) : (
          <div className="rounded-2xl border bg-card p-12 text-center">
            <p className="font-medium text-lg mb-1">No alerts match your filters</p>
            <p className="text-sm text-muted-foreground">Try adjusting the severity or type filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
