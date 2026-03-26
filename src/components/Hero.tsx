import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-20"
    >
      {/* Background with Premium Samsung-style Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep background texture/image - More subtle and tech-oriented */}
        <div className="absolute inset-0 bg-[#030303]" />
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Dark Abstract"
          className="w-full h-full object-cover opacity-20 scale-110 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
        
        {/* Layered Overlays for Depth and Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,25,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.04),transparent_50%)]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
        
        {/* Parallax Glows - Refined and deeper */}
        <motion.div 
          style={{ x: rotateY, y: rotateX }}
          className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-500/5 rounded-full blur-[180px]" 
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.4em] text-blue-400 uppercase">
              Premium Mobile Experience
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.05] tracking-tighter text-white break-keep">
            <span className="inline-block mb-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              최적의 요금을
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
              설계해드립니다
            </span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light break-keep">
            Phoneplus는 당신의 사용 패턴을 분석하여 <br />
            <span className="text-white font-normal">가장 합리적이고 완벽한</span> 모바일 라이프를 제안합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#f3f4f6' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full transition-all shadow-xl shadow-white/5"
            >
              상담 예약하기
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold rounded-full transition-colors"
            >
              기종 리스트 보기
            </motion.button>
          </div>
        </motion.div>

        {/* Product Image Section -> Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[520px] group">
            {/* Premium Glow Effect behind the video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Glassmorphism Frame */}
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl shadow-black/50">
              <iframe
                src="https://www.youtube.com/embed/V85cdxuqUfw?autoplay=1&mute=1&loop=1&playlist=V85cdxuqUfw&controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full scale-[1.02]" // Slightly scale to hide potential thin edges
              ></iframe>
              
              {/* Subtle Overlay to blend video edges and add reflection */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-40" />
              <div className="absolute inset-0 pointer-events-none border-[1px] border-white/20 rounded-3xl" />
            </div>
            
            {/* Floating Badge (Overlay on Video) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-2xl px-8 py-5 rounded-2xl border border-white/20 shadow-2xl pointer-events-none z-20"
            >
              <div className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] mb-1">Special Offer</div>
              <div className="text-2xl font-black text-white tracking-tight">최대 혜택 보장</div>
            </motion.div>

            {/* Decorative Corner Accents */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-blue-500/30 rounded-bl-3xl pointer-events-none" />

            {/* 3D Mascot - Floating near the video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              style={{ rotateX, rotateY }}
              className="absolute -bottom-20 -right-20 w-64 h-64 z-30 pointer-events-none hidden lg:block"
            >
              <motion.img
                src="/mascot.png" 
                alt="Phoneplus Mascot"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                onError={(e) => {
                  // Fallback to a placeholder if the file is not found
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400";
                  (e.target as HTMLImageElement).style.opacity = "0.2";
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
