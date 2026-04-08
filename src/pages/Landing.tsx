import { Link } from 'react-router-dom';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { Shield, Radio, Brain, Bell, MapPin, Users, ChevronRight, CheckCircle, Zap, Eye, Phone, ArrowRight, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login"><BubbleButton variant="ghost" size="sm">Parent Login</BubbleButton></Link>
            <Link to="/admin/login"><BubbleButton variant="outline" size="sm">School Login</BubbleButton></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 30%, hsl(220 70% 45% / 0.1), transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> AI-Powered Predictive Child Safety
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Your child's safety,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">predicted before risk happens</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              SafePath AI uses a passive wearable and intelligent route analysis to detect unusual behavior automatically — no SOS button needed. Real-time AI monitoring for parents and schools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/register"><BubbleButton size="lg">Get Started Free <ArrowRight className="w-4 h-4" /></BubbleButton></Link>
              <Link to="/contact"><BubbleButton variant="outline" size="lg">Request Demo</BubbleButton></Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-safe" /> No SOS dependency</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-safe" /> AI route intelligence</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-safe" /> Multi-channel alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Drawbacks Solved */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Real Problems. Real Solutions.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Existing child safety devices have critical gaps. SafePath AI was designed to close every one of them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: 'Small children can\'t press SOS', solution: 'Fully automatic AI monitoring — zero child interaction needed', icon: Brain },
              { problem: 'GPS alone isn\'t enough', solution: 'Route intelligence, stop analysis, timing anomalies & explainable risk scores', icon: MapPin },
              { problem: 'Wi-Fi may not be available', solution: 'Cellular/GSM-aware with offline buffering & delayed sync support', icon: Radio },
              { problem: 'App may not be open during emergency', solution: 'Escalation via app + SMS + email + automated emergency call', icon: Phone },
              { problem: 'Parents can\'t read raw data', solution: 'Plain-language alerts with clear safety states & confidence scores', icon: Eye },
              { problem: 'Parent-only monitoring delays response', solution: 'Dual monitoring — parents + school admins as second safety layer', icon: Users },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-background p-6 hover:-translate-y-1 transition-all hover:shadow-safe-lg group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-high-risk mb-2">Problem: {item.problem}</p>
                <p className="text-sm text-foreground">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How SafePath AI Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From passive wearable to predictive safety — a complete intelligent monitoring pipeline.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Passive Wearable', desc: 'Smart badge or pendant continuously sends location, motion & connectivity data', icon: Radio },
              { step: '02', title: 'AI Route Analysis', desc: 'Models usual routes, detects deviations, prolonged stops & inactivity anomalies', icon: Brain },
              { step: '03', title: 'Predictive Alerts', desc: 'Generates confidence-scored risk alerts with plain-language explanations', icon: Bell },
              { step: '04', title: 'Smart Escalation', desc: 'Multi-channel alerts to parents & school via app, SMS, email, and auto-call', icon: Phone },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="rounded-2xl border bg-card p-6 text-center hover:-translate-y-1 transition-all hover:shadow-safe-lg h-full">
                  <div className="text-4xl font-extrabold text-primary/10 mb-3">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {i < 3 && <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-border z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comprehensive Safety Intelligence</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Route Intelligence', desc: 'Learns usual routes and instantly flags deviations with visual comparison', icon: MapPin },
              { title: 'Geofence Awareness', desc: 'Automatic home & school geofencing with entry/exit tracking', icon: Shield },
              { title: 'Predictive Risk Scoring', desc: 'Confidence-based risk scores with transparent AI explanations', icon: Brain },
              { title: 'Multi-Channel Alerts', desc: 'App, SMS, email, and automated call escalation for critical events', icon: Bell },
              { title: 'School Monitoring', desc: 'Dual safety layer — schools as authorized second monitors', icon: Users },
              { title: 'Pickup Verification', desc: 'Authorized person matching with mismatch detection', icon: CheckCircle },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border bg-background p-5 flex items-start gap-4 hover:-translate-y-0.5 transition-all hover:shadow-safe-md">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-monitoring text-monitoring" />)}
          </div>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-6">
            "SafePath AI gave us peace of mind we never had before. The route intelligence caught something unusual before we even noticed — the system alerted us 8 minutes before our daughter arrived home late."
          </blockquote>
          <p className="text-muted-foreground font-medium">— Priya S., Parent of two</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: 'Does my child need to press a button for safety alerts?', a: 'No. SafePath AI is fully passive — the wearable continuously monitors location, route, and motion. The AI detects anomalies automatically without any child interaction.' },
              { q: 'What happens if Wi-Fi or internet is unavailable?', a: 'The wearable uses cellular/GSM connectivity as primary. When offline, data is buffered locally and synced when connectivity returns. The dashboard shows real-time sync status.' },
              { q: 'How does the AI decide something is suspicious?', a: 'The system models usual behavior — routes, timings, stop patterns, and geofence interactions. When current behavior deviates significantly, it generates a confidence-scored alert with a plain-language explanation.' },
              { q: 'Can schools also monitor children?', a: 'Yes. Schools can be set up as authorized second monitors with their own dashboard, seeing entry/exit, route anomalies, pickup verification, and device health for enrolled children.' },
              { q: 'What types of wearables are supported?', a: 'SafePath AI supports smart school badges, pendants, and clip-on wearables. The device is passive, lightweight, and designed for daily wear by young children.' },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-background px-5">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-4">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 gradient-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Protect What Matters Most</h2>
          <p className="text-white/80 text-lg mb-8">Start monitoring your child's safety with predictive AI intelligence today.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/register"><BubbleButton variant="secondary" size="lg">Create Free Account</BubbleButton></Link>
            <Link to="/contact"><BubbleButton variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">Request School Demo</BubbleButton></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-background/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-background">SafePath AI</span>
              </div>
              <p className="text-sm">AI-enabled predictive child safety intelligence for modern families and schools.</p>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-3">Product</h4>
              <div className="space-y-2 text-sm">
                <Link to="/how-it-works" className="block hover:text-background transition-colors">How It Works</Link>
                <Link to="/contact" className="block hover:text-background transition-colors">Request Demo</Link>
                <Link to="/register" className="block hover:text-background transition-colors">Sign Up</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-3">Safety</h4>
              <div className="space-y-2 text-sm">
                <span className="block">Route Intelligence</span>
                <span className="block">Predictive Alerts</span>
                <span className="block">School Monitoring</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <span className="block">hello@safepath.ai</span>
                <span className="block">+91 1800 123 4567</span>
                <Link to="/contact" className="block hover:text-background transition-colors">Support Center</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 text-sm text-center">
            © 2026 SafePath AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
