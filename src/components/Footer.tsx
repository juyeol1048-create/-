import { Instagram, Youtube, MessageCircle, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <a href="#" className="text-2xl font-black tracking-tighter text-white">
            PHONEPLUS<span className="text-white/40">2013</span>
          </a>
          
          <div className="flex items-center gap-8">
            <a href="https://www.youtube.com/@phoneplus2013" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="https://pf.kakao.com/_phoneplus2013" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
            © {currentYear} Phoneplus 2013. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
