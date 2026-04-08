import { Link } from 'react-router-dom';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { Shield, Mail, Phone, MapPin, Building } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Contact() {
  const [formType, setFormType] = useState<'general' | 'school' | 'demo'>('general');

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>
          </Link>
          <Link to="/login"><BubbleButton variant="ghost" size="sm">Login</BubbleButton></Link>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Whether you're a parent, school, or potential partner — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="flex gap-2 mb-8 flex-wrap">
              {[
                { key: 'general', label: 'General Contact' },
                { key: 'school', label: 'School Partnership' },
                { key: 'demo', label: 'Product Demo' },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setFormType(t.key as any)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formType === t.key ? 'gradient-primary text-white shadow-safe-md' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input placeholder="Your name" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@example.com" className="rounded-xl" />
                </div>
              </div>
              {formType === 'school' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>School Name</Label><Input placeholder="School name" className="rounded-xl" /></div>
                  <div className="space-y-2"><Label>Role / Title</Label><Input placeholder="Principal, Admin, etc." className="rounded-xl" /></div>
                </div>
              )}
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" placeholder="+91 98765 43210" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label>{formType === 'demo' ? 'What would you like to see in the demo?' : 'Message'}</Label>
                <Textarea placeholder={formType === 'demo' ? 'Tell us about your needs...' : 'How can we help?'} className="rounded-xl min-h-[120px]" />
              </div>
              <BubbleButton type="submit" size="lg" className="w-full sm:w-auto">
                {formType === 'demo' ? 'Request Demo' : formType === 'school' ? 'Submit Partnership Inquiry' : 'Send Message'}
              </BubbleButton>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border bg-card p-6 space-y-5">
              <h3 className="font-bold text-lg">Contact Information</h3>
              {[
                { icon: Mail, label: 'Email', value: 'hello@safepath.ai' },
                { icon: Phone, label: 'Phone', value: '+91 1800 123 4567' },
                { icon: MapPin, label: 'Address', value: 'SafePath AI HQ, Mumbai, India' },
                { icon: Building, label: 'School Partnerships', value: 'schools@safepath.ai' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="font-bold text-lg mb-3">Support Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Monday - Friday</span><span className="font-medium">9:00 AM - 8:00 PM IST</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Saturday</span><span className="font-medium">10:00 AM - 4:00 PM IST</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Emergency Support</span><span className="font-medium text-safe">24/7</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
