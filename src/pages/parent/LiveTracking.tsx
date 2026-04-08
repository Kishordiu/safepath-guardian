import { children, wearables, routes } from '@/data/mockData';
import { MapCard } from '@/components/safepath/MapCard';
import { StatusChip } from '@/components/safepath/StatusChip';
import { Battery, Wifi, Clock, Navigation, Radio } from 'lucide-react';

export default function LiveTracking() {
  const child = children[0];
  const device = wearables.find(w => w.id === child.assignedWearableId)!;
  const route = routes.find(r => r.childId === child.id)!;
  const currentPos = route.actualRoute[route.actualRoute.length - 2];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold">Live Tracking — {child.name}</h1>
          <p className="text-sm text-muted-foreground">Real-time location and route monitoring</p>
        </div>
        <StatusChip status={child.currentStatus} />
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <MapCard
            center={currentPos}
            childPosition={currentPos}
            expectedRoute={route.expectedRoute}
            actualRoute={route.actualRoute}
            geofences={[route.homeGeofence, route.schoolGeofence]}
            stopPoints={route.stopPoints}
            height="h-[500px]"
          />
          <div className="flex gap-4 mt-3 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded-full" style={{ background: 'hsl(185,60%,42%)' }} /> Actual Route</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 rounded-full opacity-40" style={{ background: 'hsl(220,70%,45%)' }} /> Expected Route</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full border-2" style={{ borderColor: 'hsl(220,70%,45%)', background: 'hsl(220,70%,45%,0.08)' }} /> Geofence</span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Status Panel */}
          <div className="rounded-2xl border bg-card p-5 space-y-4">
            <h3 className="text-sm font-semibold">Device Status</h3>
            {[
              { label: 'Battery', value: `${device.batteryLevel}%`, icon: Battery, color: device.batteryLevel > 50 ? 'text-safe' : 'text-monitoring' },
              { label: 'Signal', value: `${device.signalStrength}%`, icon: Wifi, color: device.signalStrength > 70 ? 'text-safe' : 'text-monitoring' },
              { label: 'Connectivity', value: device.connectivityState, icon: Radio, color: device.connectivityState === 'online' ? 'text-safe' : 'text-monitoring' },
              { label: 'Last Update', value: `${Math.floor((Date.now() - new Date(device.lastSeen).getTime()) / 60000)}m ago`, icon: Clock, color: 'text-muted-foreground' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  {item.label}
                </span>
                <span className="text-sm font-medium capitalize">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Route Info */}
          <div className="rounded-2xl border bg-card p-5 space-y-4">
            <h3 className="text-sm font-semibold">Route Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Travel Time</span>
                <span className="font-medium">{route.travelTimeMins}m <span className="text-muted-foreground">/ {route.expectedTravelTimeMins}m</span></span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Stability</span>
                <span className={`font-medium ${route.stabilityScore > 80 ? 'text-safe' : route.stabilityScore > 60 ? 'text-monitoring' : 'text-high-risk'}`}>{route.stabilityScore}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Stops</span>
                <span className="font-medium">{route.stopPoints.length}</span>
              </div>
              {route.anomalyFlags.length > 0 && (
                <div>
                  <span className="text-xs text-muted-foreground">Anomalies:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {route.anomalyFlags.map((f, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-monitoring/15 text-monitoring font-medium">{f}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="rounded-2xl border bg-card p-5">
            <h3 className="text-sm font-semibold mb-3">Current Location</h3>
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-primary" />
              <span className="text-sm">{currentPos.lat.toFixed(4)}, {currentPos.lng.toFixed(4)}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Near expected route corridor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
