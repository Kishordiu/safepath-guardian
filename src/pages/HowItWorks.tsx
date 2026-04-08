import { Link } from 'react-router-dom';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { Shield, Radio, Brain, MapPin, Bell, Phone, Users, Eye, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Radio, title: 'Wearable Data Collection',
    desc: 'A passive smart badge, pendant, or clip continuously transmits location, motion, inactivity, and connectivity data via cellular/GSM — no Wi-Fi required.',
    details: ['GPS + cell tower positioning', 'Motion & accelerometer data', 'Connectivity health monitoring', 'Offline data buffering'],
  },
  {
    icon: MapPin, title: 'Route Modeling & Geofencing',
    desc: 'The system learns your child\'s usual routes, models expected commute times, and creates automatic geofences around home and school.',
    details: ['Usual route learning from daily patterns', 'Home & school geofence auto-detection', 'Expected travel time modeling', 'Common stop point identification'],
  },
  {
    icon: Brain, title: 'Predictive Risk Detection',
    desc: 'AI continuously compares real-time data against learned patterns, detecting route deviations, prolonged stops, abnormal inactivity, and timing anomalies.',
    details: ['Route deviation detection', 'Prolonged stop identification', 'Inactivity anomaly analysis', 'Timing inconsistency flags'],
  },
  {
    icon: Eye, title: 'Explainable Risk Scoring',
    desc: 'Every alert includes a confidence-based risk score and a plain-language explanation of exactly why it was triggered.',
    details: ['Confidence score (0-100%)', 'Contributing condition breakdown', 'Predicted risk type classification', 'Trend & escalation tracking'],
  },
  {
    icon: Users, title: 'Dual Monitoring Layer',
    desc: 'Both parents and school administrators receive real-time safety intelligence, creating a redundant monitoring system.',
    details: ['Parent dashboard with full route view', 'School admin safety overview', 'Pickup verification system', 'Coordinated incident response'],
  },
  {
    icon: Phone, title: 'Multi-Channel Escalation',
    desc: 'Critical alerts escalate automatically through multiple channels to ensure no emergency goes unnoticed.',
    details: ['In-app push notifications', 'SMS alerts to parent & school', 'Email notifications', 'Automated emergency calls'],
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/login"><BubbleButton variant="ghost" size="sm">Login</BubbleButton></Link>
            <Link to="/register"><BubbleButton size="sm">Get Started</BubbleButton></Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            How <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From passive wearable to predictive safety intelligence — a complete six-stage monitoring pipeline designed to protect your child without requiring any manual action.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-safe-md group-hover:-translate-y-1 transition-transform">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-border mt-2 min-h-[2rem]" />}
              </div>
              <div className="rounded-2xl border bg-card p-6 flex-1 hover:shadow-safe-md transition-shadow">
                <div className="text-xs font-bold text-primary/60 mb-1">STEP {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {step.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-safe flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 gradient-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to protect your child with AI?</h2>
          <p className="text-white/80 mb-8">Join thousands of families using predictive child safety.</p>
          <div className="flex justify-center gap-3">
            <Link to="/register"><BubbleButton variant="secondary" size="lg">Create Account <ArrowRight className="w-4 h-4" /></BubbleButton></Link>
            <Link to="/contact"><BubbleButton variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">Contact Sales</BubbleButton></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
