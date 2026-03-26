import { motion } from 'motion/react';
import { Smartphone, Zap, ShieldCheck, Gift, ChevronRight, Camera } from 'lucide-react';
import { useState, useRef, ChangeEvent } from 'react';

const INITIAL_PRODUCTS = [
  {
    id: 1,
    brand: 'samsung',
    category: 'latest',
    name: 'Galaxy S24 Ultra',
    tagline: 'AI와 함께하는 새로운 일상',
    features: ['Galaxy AI 탑재', '2억 화소 카메라', '티타늄 프레임'],
    price: '월 45,200원부터',
    image: 'https://images.unsplash.com/photo-1707148560317-09418659546b?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    brand: 'samsung',
    category: 'latest',
    name: 'Galaxy Z Flip6',
    tagline: '당신의 스타일을 완성하는 폴더블',
    features: ['컴팩트한 디자인', '플렉스캠 활용', '강화된 힌지'],
    price: '월 38,900원부터',
    image: 'https://images.unsplash.com/photo-1635352723068-ffb493729351?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    brand: 'apple',
    category: 'latest',
    name: 'iPhone 15 Pro',
    tagline: '티타늄. 그 이상의 강력함',
    features: ['A17 Pro 칩', '티타늄 디자인', '동작 버튼'],
    price: '월 48,500원부터',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    brand: 'samsung',
    category: 'deal',
    name: 'Galaxy A54 5G',
    tagline: '가성비 그 이상의 가치',
    features: ['선명한 디스플레이', '대용량 배터리', '뛰어난 가성비'],
    price: '월 12,500원부터',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    badge: 'Hot Deal'
  },
  {
    id: 5,
    brand: 'apple',
    category: 'deal',
    name: 'iPhone SE (3세대)',
    tagline: '클래식한 디자인, 강력한 성능',
    features: ['A15 Bionic 칩', '컴팩트한 사이즈', 'Touch ID'],
    price: '월 18,200원부터',
    image: 'https://images.unsplash.com/photo-1651055520930-9993306869a1?auto=format&fit=crop&q=80&w=600',
    badge: '특가'
  },
  {
    id: 6,
    brand: 'samsung',
    category: 'deal',
    name: 'Galaxy S23 FE',
    tagline: '플래그십의 핵심만 담다',
    features: ['프리미엄 디자인', '강력한 성능', '합리적 가격'],
    price: '월 22,400원부터',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=600',
    badge: 'Hot Deal'
  },
  {
    id: 7,
    brand: 'apple',
    category: 'iphone',
    name: 'iPhone 15',
    tagline: '새로운 시대를 여는 혁신',
    features: ['Dynamic Island', '48MP 메인 카메라', 'USB-C 커넥터'],
    price: '월 32,500원부터',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 8,
    brand: 'apple',
    category: 'iphone',
    name: 'iPhone 15 Plus',
    tagline: '더 커진 화면, 더 오래가는 배터리',
    features: ['6.7형 디스플레이', '강력한 배터리 성능', 'A16 Bionic 칩'],
    price: '월 36,800원부터',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 9,
    brand: 'apple',
    category: 'iphone',
    name: 'iPhone 14',
    tagline: '검증된 성능의 완성도',
    features: ['안정적인 성능', '뛰어난 카메라', '다양한 컬러'],
    price: '월 24,200원부터',
    image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=600',
  }
];

export default function Services() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const handleImageChange = (id: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setProducts(prev => prev.map(p => 
          p.id === id ? { ...p, image: e.target!.result as string } : p
        ));
      }
    };
    reader.readAsDataURL(file);
  };

  const latestProducts = products.filter(p => p.category === 'latest');
  const iphoneProducts = products.filter(p => p.category === 'iphone' || (p.brand === 'apple' && p.category === 'latest'));
  const dealProducts = products.filter(p => p.category === 'deal');

  const ProductGrid = ({ items, title, id }: { items: typeof products, title: string, id: string }) => (
    <div id={id} className="mb-32">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter break-keep"
        >
          {title}
        </motion.h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            index={index} 
            onImageChange={handleImageChange} 
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-32 px-6 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <ProductGrid items={latestProducts} title="최신폰 라인업" id="products" />
        <ProductGrid items={iphoneProducts} title="아이폰 라인업" id="iphone-lineup" />
        <ProductGrid items={dealProducts} title="특가폰 라인업" id="special-offers" />

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-20">
          {[
            { icon: Zap, title: '즉시 개통', desc: '기다림 없는 빠른 서비스' },
            { icon: ShieldCheck, title: '정품 보장', desc: '100% 공식 정품 기기' },
            { icon: Smartphone, title: '데이터 이전', desc: '전문가의 안전한 이전' },
            { icon: Gift, title: '특별 사은품', desc: 'Phoneplus만의 단독 혜택' }
          ].map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-white/40 group-hover:text-blue-500 transition-colors duration-500" />
              </div>
              <h4 className="font-bold text-white text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-white/30">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index, onImageChange }: any) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageChange(product.id, file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="product-card p-10 flex flex-col group relative bg-[#0f0f0f] border border-white/5 rounded-[40px] hover:border-blue-500/30 transition-all duration-700"
    >
      {product.badge && (
        <div className="absolute top-8 right-8 z-10">
          <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg shadow-blue-600/20">
            {product.badge}
          </span>
        </div>
      )}
      
      <div 
        className="w-full aspect-square mb-10 overflow-hidden rounded-3xl bg-[#f8f8f8] cursor-pointer relative flex items-center justify-center p-8"
        onClick={handleClick}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Admin Image Change Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Camera className="w-6 h-6 text-black" />
          </div>
          <span className="text-white font-bold text-[10px] uppercase tracking-widest">이미지 변경</span>
        </div>

        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleChange}
          accept="image/*"
          className="hidden"
        />
      </div>
      
      <div className="flex-1">
        <div className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] mb-3">
          {product.brand === 'samsung' ? 'Samsung Galaxy' : 'Apple iPhone'}
        </div>
        <h3 className="text-3xl font-bold mb-3 text-white tracking-tight break-keep">{product.name}</h3>
        <p className="text-white/60 text-base mb-8 font-light break-keep leading-relaxed">{product.tagline}</p>
        
        <ul className="space-y-3 mb-10">
          {product.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-white/5 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-1">Starting at</div>
          <div className="text-xl font-bold text-white">{product.price}</div>
        </div>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl shadow-white/5"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
}
