import { Link } from 'react-router-dom';
import { Shield, Heart } from 'lucide-react';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ParentLogin() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 gradient-primary relative items-center justify-center p-12">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 30% 70%, hsl(185 60% 42% / 0.4), transparent 60%)' }} />
        <div className="relative text-white max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome back, Parent</h2>
          <p className="text-white/80 text-lg leading-relaxed">Your child's safety dashboard is one step away. Sign in to view real-time location, route intelligence, and predictive safety alerts.</p>
          <div className="mt-8 space-y-3">
            {['Real-time safety monitoring', 'AI-powered route intelligence', 'Instant multi-channel alerts'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"><span className="text-xs">✓</span></div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>
          </Link>
          <h1 className="text-2xl font-bold mb-1">Parent Login</h1>
          <p className="text-muted-foreground mb-8">Sign in to monitor your child's safety</p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="parent@example.com" className="rounded-xl h-11" /></div>
            <div className="space-y-2">
              <div className="flex justify-between"><Label>Password</Label><Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link></div>
              <Input type="password" placeholder="••••••••" className="rounded-xl h-11" />
            </div>
            <Link to="/dashboard"><BubbleButton type="button" size="lg" className="w-full">Sign In</BubbleButton></Link>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/register" className="text-primary font-medium hover:underline">Create one</Link>
          </p>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            School administrator? <Link to="/admin/login" className="text-primary font-medium hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
