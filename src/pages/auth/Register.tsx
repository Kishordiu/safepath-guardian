import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { BubbleButton } from '@/components/safepath/BubbleButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState<'parent' | 'school'>('parent');

  return (
    <div className="min-h-screen flex items-center justify-center p-6 gradient-hero">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 justify-center mb-8">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SafePath AI</span>
        </Link>
        <div className="rounded-2xl border bg-card p-8 shadow-safe-lg">
          <h1 className="text-2xl font-bold text-center mb-1">Create Account</h1>
          <p className="text-muted-foreground text-center mb-6">Start protecting your child today</p>
          <div className="flex gap-2 mb-6">
            {(['parent', 'school'] as const).map((r) => (
              <button key={r} onClick={() => setRole(r)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${role === r ? 'gradient-primary text-white shadow-safe-md' : 'bg-muted text-muted-foreground'}`}>
                {r === 'parent' ? '👨‍👩‍👧 Parent' : '🏫 School'}
              </button>
            ))}
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2"><Label>Full Name</Label><Input placeholder="Your full name" className="rounded-xl h-11" /></div>
            <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" className="rounded-xl h-11" /></div>
            {role === 'school' && <div className="space-y-2"><Label>School Name</Label><Input placeholder="School name" className="rounded-xl h-11" /></div>}
            <div className="space-y-2"><Label>Phone Number</Label><Input type="tel" placeholder="+91 98765 43210" className="rounded-xl h-11" /></div>
            <div className="space-y-2"><Label>Password</Label><Input type="password" placeholder="Create a strong password" className="rounded-xl h-11" /></div>
            <BubbleButton type="submit" size="lg" className="w-full">Create Account</BubbleButton>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
