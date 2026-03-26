import { motion } from 'motion/react';
import { Heart, MessageCircle, UserPlus } from 'lucide-react';
import { useStorage } from '../lib/storage';

const REVIEWS = [
  {
    id: '1',
    user: '복뎅맘5785',
    avatar: 'https://i.pravatar.cc/150?u=1',
    reviewCount: 2,
    photoCount: 2,
    title: '휴대폰가입상담',
    content: '수능끝난아들 휴대폰 바꿔주러 방문했어요 너무친절하게 기기상담과 요금제설계까지 도와주셨습니다 선우매니저님 너무친절하고 예쁘세요 고맙습니다 다음엔 세가바꾸러...',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=600',
    likes: 3,
    tag: '친절해요'
  },
  {
    id: '2',
    user: 'njs****',
    avatar: 'https://i.pravatar.cc/150?u=2',
    reviewCount: 1,
    photoCount: 1,
    title: '휴대폰가입상담',
    content: '폰은새폰인데 요금은저렴해졌읍니다 고마워요 아가씨 친절하네요',
    imageUrl: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=600',
    likes: 4,
    tag: '친절해요'
  },
  {
    id: '3',
    user: '히컵93',
    avatar: 'https://i.pravatar.cc/150?u=3',
    reviewCount: 1,
    photoCount: 1,
    title: '휴대폰가입상담',
    content: '매장 상담 친절하시고 설명 귀에 쏙쏙들어오네요 ^^',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    likes: 4,
    tag: '친절해요'
  },
  {
    id: '4',
    user: 'par****',
    avatar: 'https://i.pravatar.cc/150?u=4',
    reviewCount: 1,
    photoCount: 1,
    title: '휴대폰가입상담',
    content: '청춘대길에서 저렴하게 휴대폰도 구매하고 이것저것많이챙겨주시는군요...',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80&w=600',
    likes: 2,
    tag: '친절해요'
  },
  {
    id: '5',
    user: '민*지 고객님',
    avatar: 'https://i.pravatar.cc/150?u=5',
    reviewCount: 5,
    photoCount: 3,
    title: '갤럭시 S24 울트라 개통',
    content: '상담이 너무 꼼꼼해서 좋았어요. 요금제도 딱 맞는걸로 추천해주셔서 통신비가 많이 줄었습니다!',
    imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600',
    likes: 12,
    tag: '설명이 자세해요'
  }
];

export default function Portfolio() {
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section id="portfolio" className="py-32 px-6 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight break-keep"
        >
          고객님들의 생생한 후기
        </motion.h2>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[320px] md:w-[380px] flex-shrink-0 bg-[#111111] border border-white/5 rounded-2xl shadow-sm overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="p-4 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">{review.user}</span>
                    <span className="text-[10px] text-white/40">리뷰 {review.reviewCount} · 사진 {review.photoCount}</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-bold rounded-full hover:bg-blue-500/20 transition-colors">
                  <UserPlus className="w-3 h-3" />
                  팔로우
                </button>
              </div>

              {/* Card Image */}
              <div className="aspect-square overflow-hidden bg-white/5">
                <img 
                  src={review.imageUrl} 
                  alt={review.title}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="text-sm font-bold text-white mb-2">{review.title}</h4>
                <p className="text-xs text-white/50 leading-relaxed line-clamp-3 mb-4 whitespace-normal">
                  {review.content}
                </p>
                <button className="text-[10px] text-white/30 font-medium text-left mb-4">더보기</button>
                
                {/* Card Footer */}
                <div className="mt-auto flex items-center gap-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-pink-500/10 rounded-md">
                    <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                    <span className="text-[10px] font-bold text-pink-500">{review.tag}</span>
                  </div>
                  <span className="text-[10px] text-white/30 font-bold">+{review.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dots (Visual Only) */}
      <div className="flex justify-center gap-2 mt-12">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-white/10'}`} 
          />
        ))}
      </div>
    </section>
  );
}
