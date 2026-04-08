import { Link } from 'react-router-dom';
import { children, wearables, alerts, routes, timelineEvents } from '@/data/mockData';
import { StatusChip } from '@/components/safepath/StatusChip';
import { RiskScoreGauge } from '@/components/safepath/RiskScoreGauge';
import { StatCard } from '@/components/safepath/StatCard';
import { AlertCard } from '@/components/safepath/AlertCard';
import { TimelineSection } from '@/components/safepath/TimelineSection';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { MapPin, Route, AlertTriangle, Battery, Wifi, Clock, Shield, UserCircle, Navigation } from 'lucide-react';

export default function ParentDashboard() {
  const child = children[0];
  const device = wearables.find(w => w.id === child.assignedWearableId)!;
  const route = routes.find(r => r.childId === child.id)!;
  const activeAlerts = alerts.filter(a => !a.isRead);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Greeting + Child Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Good Morning, {child.parentName.split(' ')[0]} 👋</h1>
          <p className="text-muted-foreground text-sm">Here's {child.name}'s safety overview</p>
        </div>
        <StatusChip status={child.currentStatus} size="lg" />
      </div>

      {/* Child Card */}
      <div className="rounded-2xl border bg-card p-5 flex flex-col sm:flex-row items-start gap-5 shadow-safe-md">
        <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
          <UserCircle className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl font-bold">{child.name}</h2>
            <StatusChip status={child.currentStatus} size="sm" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">{child.age} years • {child.grade} • {child.school}</p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Battery className={`w-4 h-4 ${device.batteryLevel > 50 ? 'text-safe' : device.batteryLevel > 20 ? 'text-monitoring' : 'text-high-risk'}`} />
              {device.batteryLevel}%
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Wifi className={`w-4 h-4 ${device.connectivityState === 'online' ? 'text-safe' : 'text-monitoring'}`} />
              {device.connectivityState}
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-4 h-4" />
              Updated {Math.floor((Date.now() - new Date(device.lastSeen).getTime()) / 60000)}m ago
            </span>
          </div>
        </div>
        <RiskScoreGauge score={22} label="Risk Score" size="sm" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Route Stability" value={`${route.stabilityScore}%`} icon={Route} variant="safe" trend="up" trendValue="2% this week" />
        <StatCard label="Active Alerts" value={activeAlerts.length} icon={AlertTriangle} variant={activeAlerts.length > 0 ? 'warning' : 'safe'} />
        <StatCard label="Today's Travel" value={`${route.travelTimeMins}m`} subtitle={`Expected: ${route.expectedTravelTimeMins}m`} icon={Navigation} />
        <StatCard label="Safety Score" value="96" icon={Shield} variant="safe" trend="up" trendValue="Excellent" />
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2">
        <Link to="/tracking"><BubbleButton variant="primary" size="sm"><MapPin className="w-4 h-4" /> Live Map</BubbleButton></Link>
        <Link to="/alerts"><BubbleButton variant="outline" size="sm"><AlertTriangle className="w-4 h-4" /> View Alerts</BubbleButton></Link>
        <Link to="/routes"><BubbleButton variant="outline" size="sm"><Route className="w-4 h-4" /> Route Intelligence</BubbleButton></Link>
        <Link to={`/child/${child.id}`}><BubbleButton variant="ghost" size="sm"><UserCircle className="w-4 h-4" /> Full Profile</BubbleButton></Link>
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Alerts */}
        <div className="lg:col-span-3 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Recent Alerts</h3>
          {activeAlerts.length > 0 ? (
            activeAlerts.map(a => <AlertCard key={a.id} alert={a} />)
          ) : (
            <div className="rounded-2xl border bg-card p-8 text-center">
              <Shield className="w-10 h-10 mx-auto text-safe mb-3" />
              <p className="font-medium">All Clear</p>
              <p className="text-sm text-muted-foreground">No active alerts right now</p>
            </div>
          )}
        </div>
        {/* Timeline */}
        <div className="lg:col-span-2">
          <TimelineSection events={timelineEvents} />
        </div>
      </div>
    </div>
  );
}
