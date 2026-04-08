
# SafePath AI – Phase 1: Core Experience

## Brand & Design System
- Premium color palette: white/soft-slate base, navy/teal accents, safety-state colors (green→amber→orange→red)
- Custom CSS variables for all brand colors, gradients, and shadows
- Pill/bubble buttons with gradient fills, hover lift, soft shadows
- Large rounded cards with layered depth, subtle glassmorphism accents
- Clean typography hierarchy with friendly but serious feel
- Status chip components for Safe/Monitoring/Suspicious/High Risk/Emergency

## Shared Components
- **AppSidebar** – elegant collapsible sidebar with role-aware navigation (parent vs admin)
- **TopNav** – notification bell, user avatar, breadcrumbs
- **StatusChip** – color-coded safety state pills
- **RiskScoreGauge** – circular confidence/risk indicator
- **AlertCard** – expandable alert with severity, reason, confidence, escalation channels
- **TimelineSection** – vertical timeline for events/alerts
- **StatCard** – rounded gradient stat cards with icons
- **BubbleButton** – pill-shaped CTA buttons with gradient + hover lift
- **MapCard** – Leaflet map wrapper with soft overlay styling
- **ExportButton** – PDF/CSV export action button
- Loading skeletons, empty states, error states

## Mock Data Layer
- `src/data/` folder with realistic mock data for children, wearables, routes, alerts, alert deliveries, pickup records
- Type definitions in `src/types/` matching the data models specified

## Pages (Phase 1 – 12 pages)

### Public Pages
1. **Landing Page** (`/`) – Premium hero with gradient background, value proposition ("Predictive child safety, not reactive SOS"), how it works section (wearable → AI engine → alerts → escalation), feature highlights (route intelligence, geofencing, multi-channel alerts), drawbacks-solved section, FAQ accordion, CTA buttons, polished footer
2. **How It Works** (`/how-it-works`) – Step-by-step visual flow: wearable data → route modeling → geofencing → anomaly detection → risk scoring → escalation
3. **Contact/Demo** (`/contact`) – Contact form, school partnership inquiry, demo request

### Auth Pages
4. **Parent Login** (`/login`) – Split layout, warm/friendly design, premium feel
5. **School Admin Login** (`/admin/login`) – Professional variant
6. **Register** (`/register`) – Role selection (parent/school)
7. **Forgot Password** (`/forgot-password`)

### Parent Experience
8. **Parent Dashboard** (`/dashboard`) – Child summary card with photo/name/school, current safety state (large status chip), live location summary, usual vs actual route widget, active alerts list, predictive risk score gauge, device battery/signal indicators, recent safety timeline, quick action buttons
9. **Live Tracking** (`/tracking`) – Full Leaflet map with child marker, home/school geofence circles, actual route polyline, expected route overlay, route anomaly markers, stop duration markers, sidebar panel with connectivity state, battery, last update, sync status
10. **Alerts & Risk Insights** (`/alerts`) – Active/recent alerts with severity & confidence filters, grouped timeline, "why this was flagged" expandable drawer with contributing conditions, alert delivery channel status (app/SMS/email/call), escalation history
11. **Child Profile** (`/child/:id`) – Full child details, school info, routine schedule, assigned wearable, parent/school contacts, pickup permissions, status overview
12. **Route Intelligence** (`/routes`) – Usual vs actual route map comparison, route stability score, anomaly history, travel time trend chart, common stop points, predictive route risk panel

## Routing & Layout
- Public layout (no sidebar) for landing/auth pages
- Parent dashboard layout (sidebar + topnav) for authenticated parent pages
- React Router with nested route groups
- Role context for future admin pages

## Key UX Details
- All safety states visually distinct with color + icon + label
- Alert explanations in plain language ("Child deviated from usual route at 3:42 PM")
- Multi-channel escalation shown as icon row (📱 SMS ✉️ Email 📞 Call 🔔 App)
- Export buttons on alerts and route intelligence pages
- Mobile responsive throughout
- Smooth transitions and hover effects
