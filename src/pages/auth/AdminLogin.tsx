import { Link } from 'react-router-dom';
import { Shield, Building } from 'lucide-react';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12" style={{ background: 'linear-gradient(135deg, hsl(220 30% 12%), hsl(220 40% 20%))' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 60% 40%, hsl(185 60% 42% / 0.5), transparent 60%)' }} />
        <div className="relative text-white max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
            <Building className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">School Administration</h2>
          <p className="text-white/70 text-lg leading-relaxed">Access the school safety monitoring dashboard. View student safety status, manage devices, and coordinate with parents on safety incidents.</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>
          </Link>
          <h1 className="text-2xl font-bold mb-1">School Admin Login</h1>
          <p className="text-muted-foreground mb-8">Access the school safety monitoring dashboard</p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2"><Label>School Email</Label><Input type="email" placeholder="admin@school.edu" className="rounded-xl h-11" /></div>
            <div className="space-y-2">
              <div className="flex justify-between"><Label>Password</Label><Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot password?</Link></div>
              <Input type="password" placeholder="••••••••" className="rounded-xl h-11" />
            </div>
            <Link to="/dashboard"><BubbleButton type="button" size="lg" className="w-full">Sign In as Admin</BubbleButton></Link>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Parent account? <Link to="/login" className="text-primary font-medium hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
