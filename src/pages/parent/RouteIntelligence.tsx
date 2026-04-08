import { children, routes } from '@/data/mockData';
import { MapCard } from '@/components/safepath/MapCard';
import { RiskScoreGauge } from '@/components/safepath/RiskScoreGauge';
import { StatCard } from '@/components/safepath/StatCard';
import { ExportButton } from '@/components/safepath/ExportButton';
import { Route, TrendingUp, MapPin, AlertTriangle, Clock, BarChart3 } from 'lucide-react';

export default function RouteIntelligence() {
  const child = children[0];
  const route = routes.find(r => r.childId === child.id)!;

  const travelTimeTrend = [
    { day: 'Mon', time: 17 }, { day: 'Tue', time: 18 }, { day: 'Wed', time: 16 },
    { day: 'Thu', time: 19 }, { day: 'Fri', time: 17 },
  ];

  const anomalyHistory = [
    { date: 'Apr 7', type: 'Route Deviation', severity: 'Medium', desc: 'Deviated 200m near park area' },
    { date: 'Apr 3', type: 'Prolonged Stop', severity: 'Low', desc: '6 min stop at unrecognized location' },
    { date: 'Mar 28', type: 'Timing Anomaly', severity: 'Low', desc: 'Arrived 12 min later than expected' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold">Route Intelligence — {child.name}</h1>
          <p className="text-sm text-muted-foreground">AI-powered route analysis and predictive risk assessment</p>
        </div>
        <ExportButton label="Export Route Report" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Route Stability" value={`${route.stabilityScore}%`} icon={Route} variant="safe" />
        <StatCard label="Avg Travel Time" value="17.4m" subtitle="Expected: 18m" icon={Clock} />
        <StatCard label="Anomalies (30d)" value="3" icon={AlertTriangle} variant="warning" />
        <StatCard label="Risk Level" value="Low" icon={TrendingUp} variant="safe" />
      </div>

      {/* Map Comparison */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border bg-card p-4">
            <h3 className="text-sm font-semibold mb-3">Usual Route vs Actual Route</h3>
            <MapCard
              center={route.expectedRoute[Math.floor(route.expectedRoute.length / 2)]}
              expectedRoute={route.expectedRoute}
              actualRoute={route.actualRoute}
              geofences={[route.homeGeofence, route.schoolGeofence]}
              stopPoints={route.stopPoints}
              height="h-[380px]"
            />
            <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded-full" style={{ background: 'hsl(185,60%,42%)' }} /> Actual</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded-full opacity-40" style={{ background: 'hsl(220,70%,45%)' }} /> Expected</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border bg-card p-5 flex justify-center">
            <RiskScoreGauge score={18} label="Predictive Route Risk" size="lg" />
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold mb-3">Common Stop Points</h3>
            <div className="space-y-2">
              {route.stopPoints.map((sp, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-muted/50 text-sm">
                  <MapPin className={`w-4 h-4 ${sp.isExpected ? 'text-safe' : 'text-monitoring'}`} />
                  <div className="flex-1">
                    <span className="font-medium">{sp.label || 'Unknown'}</span>
                    <span className="text-xs text-muted-foreground ml-2">{sp.durationMins}m</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${sp.isExpected ? 'bg-safe/15 text-safe' : 'bg-monitoring/15 text-monitoring'}`}>
                    {sp.isExpected ? 'Expected' : 'Unusual'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Travel Time Trend */}
      <div className="rounded-2xl border bg-card p-5">
        <h3 className="text-sm font-semibold mb-4">Travel Time Trend (This Week)</h3>
        <div className="flex items-end gap-3 h-32">
          {travelTimeTrend.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs font-medium">{d.time}m</span>
              <div className="w-full rounded-t-lg gradient-primary transition-all" style={{ height: `${(d.time / 25) * 100}%` }} />
              <span className="text-xs text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <BarChart3 className="w-3.5 h-3.5" /> Average: 17.4 min • Expected: 18 min
        </div>
      </div>

      {/* Anomaly History */}
      <div className="rounded-2xl border bg-card p-5">
        <h3 className="text-sm font-semibold mb-4">Route Anomaly History</h3>
        <div className="space-y-2">
          {anomalyHistory.map((a, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <AlertTriangle className={`w-4 h-4 flex-shrink-0 ${a.severity === 'Medium' ? 'text-monitoring' : 'text-safe'}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{a.type}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${a.severity === 'Medium' ? 'bg-monitoring/15 text-monitoring' : 'bg-safe/15 text-safe'}`}>{a.severity}</span>
                </div>
                <p className="text-xs text-muted-foreground">{a.desc}</p>
              </div>
              <span className="text-xs text-muted-foreground">{a.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
