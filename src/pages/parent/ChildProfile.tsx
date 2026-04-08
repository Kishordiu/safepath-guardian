import { useParams } from 'react-router-dom';
import { children, wearables, alerts, pickupRecords } from '@/data/mockData';
import { StatusChip } from '@/components/safepath/StatusChip';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { UserCircle, School, Home, Clock, Battery, Wifi, Phone, Mail, ShieldCheck, AlertTriangle, Calendar } from 'lucide-react';

export default function ChildProfile() {
  const { id } = useParams();
  const child = children.find(c => c.id === id) || children[0];
  const device = wearables.find(w => w.id === child.assignedWearableId)!;
  const childAlerts = alerts.filter(a => a.childId === child.id);
  const childPickups = pickupRecords.filter(p => p.childId === child.id);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold">Child Profile</h1>
        <BubbleButton variant="outline" size="sm">Edit Profile</BubbleButton>
      </div>

      {/* Main Card */}
      <div className="rounded-2xl border bg-card p-6 shadow-safe-md">
        <div className="flex flex-col sm:flex-row items-start gap-5">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
            <UserCircle className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h2 className="text-2xl font-bold">{child.name}</h2>
              <StatusChip status={child.currentStatus} />
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground"><Calendar className="w-4 h-4" /> Age: {child.age} years</span>
              <span className="flex items-center gap-2 text-muted-foreground"><School className="w-4 h-4" /> {child.grade} • {child.school}</span>
              <span className="flex items-center gap-2 text-muted-foreground"><Home className="w-4 h-4" /> Home: {child.homeLocation.lat.toFixed(4)}, {child.homeLocation.lng.toFixed(4)}</span>
              <span className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4" /> School: {child.routineSchedule.schoolStart} - {child.routineSchedule.schoolEnd}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Device */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold mb-4">Assigned Wearable</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Device ID</span><span className="font-mono text-xs">{device.id}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Type</span><span className="capitalize font-medium">{device.deviceType}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Battery</span><span className="flex items-center gap-1"><Battery className={`w-4 h-4 ${device.batteryLevel > 50 ? 'text-safe' : 'text-monitoring'}`} />{device.batteryLevel}%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Signal</span><span className="flex items-center gap-1"><Wifi className="w-4 h-4 text-safe" />{device.signalStrength}%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Firmware</span><span>{device.firmwareVersion}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Status</span><span className="capitalize px-2 py-0.5 rounded-full text-xs bg-safe/15 text-safe font-medium">{device.status}</span></div>
          </div>
        </div>

        {/* Routine */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold mb-4">Routine Schedule</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">School Hours</span><span className="font-medium">{child.routineSchedule.schoolStart} – {child.routineSchedule.schoolEnd}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Expected Commute</span><span className="font-medium">{child.routineSchedule.expectedCommuteMins} min</span></div>
            <div><span className="text-muted-foreground">Active Days</span>
              <div className="flex gap-1 mt-1">
                {child.routineSchedule.daysOfWeek.map(d => (
                  <span key={d} className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary font-medium">{d.slice(0, 3)}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Parent Contact */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold mb-4">Parent / Guardian</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2"><UserCircle className="w-4 h-4 text-primary" /><span className="font-medium">{child.parentName}</span></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-muted-foreground" /><span>{child.parentEmail}</span></div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-muted-foreground" /><span>{child.parentPhone}</span></div>
          </div>
        </div>

        {/* School Contact */}
        <div className="rounded-2xl border bg-card p-5">
          <h3 className="text-sm font-semibold mb-4">School Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2"><School className="w-4 h-4 text-primary" /><span className="font-medium">{child.schoolAdminName}</span></div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-muted-foreground" /><span>{child.schoolAdminEmail}</span></div>
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-muted-foreground" /><span>{child.schoolAdminPhone}</span></div>
          </div>
        </div>
      </div>

      {/* Recent Alerts Summary */}
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Recent Alerts</h3>
          <span className="text-xs text-muted-foreground">{childAlerts.length} total</span>
        </div>
        {childAlerts.length > 0 ? (
          <div className="space-y-2">
            {childAlerts.slice(0, 3).map(a => (
              <div key={a.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                <AlertTriangle className={`w-4 h-4 flex-shrink-0 ${a.severity === 'high' || a.severity === 'critical' ? 'text-high-risk' : a.severity === 'medium' ? 'text-monitoring' : 'text-safe'}`} />
                <span className="text-sm flex-1 truncate">{a.triggerReason}</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{new Date(a.timestamp).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No alerts recorded</p>
        )}
      </div>

      {/* Pickup History */}
      <div className="rounded-2xl border bg-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Pickup History</h3>
          <span className="text-xs text-muted-foreground">{childPickups.length} records</span>
        </div>
        <div className="space-y-2">
          {childPickups.map(p => (
            <div key={p.id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
              <ShieldCheck className={`w-4 h-4 flex-shrink-0 ${p.mismatchFlag ? 'text-high-risk' : 'text-safe'}`} />
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium">{p.authorizedPerson}</span>
                {p.notes && <p className="text-xs text-muted-foreground truncate">{p.notes}</p>}
              </div>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${p.mismatchFlag ? 'bg-high-risk/15 text-high-risk' : 'bg-safe/15 text-safe'}`}>
                {p.verificationState}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
