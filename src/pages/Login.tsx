import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase login logic will go here
    console.log('Login attempt:', email);
    // For now, just navigate to dashboard
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card p-10 rounded-3xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black mb-2 tracking-tighter">
            PHONEPLUS<span className="text-brand">2013</span>
          </h1>
          <p className="text-gray-400 text-sm">관리자 대시보드에 로그인하세요.</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@phoneplus2013.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-brand focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 focus:border-brand focus:outline-none transition-colors"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-brand text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            로그인 <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-xs text-gray-500 hover:text-white transition-colors"
          >
            홈페이지로 돌아가기
          </button>
        </div>
      </motion.div>
    </div>
  );
}
