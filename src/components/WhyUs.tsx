import { motion } from 'motion/react';
import { ShieldCheck, Users, Calculator, Award } from 'lucide-react';

const WHY_US_DATA = [
  {
    id: 1,
    title: '13년 전통의 정직함',
    description: '한 곳에서 13년 동안 변치 않고 운영된 믿을 수 있는 매장입니다. 정직이 최고의 가치입니다.',
    icon: ShieldCheck,
    badge: 'BEST',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    title: '베테랑의 책임 상담',
    description: '직원 이동 없이 한 매장에서 장기 근무한 숙련된 전문가들이 끝까지 책임지고 상담해 드립니다.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    title: '최적의 요금 설계',
    description: '같은 기종, 같은 가격이라도 사용 패턴에 딱 맞는 최적의 요금 설계로 통신비 부담을 줄여드립니다.',
    icon: Calculator,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 4,
    title: '인천 1등 매장',
    description: '인천에서 가장 많은 고객님이 선택한 이유, 직접 경험해보시면 알 수 있습니다.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 px-6 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#A855F7] font-bold text-sm tracking-widest uppercase mb-4 block"
          >
            인천 1등! 휴대폰의 모든 것 폰플러스2013
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            왜 "폰플러스" 이어야만 하죠?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {WHY_US_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl bg-black border border-white/5 flex flex-col h-full group hover:border-white/20 transition-all duration-500 ${
                index % 2 === 1 ? 'md:mt-12' : ''
              }`}
            >
              {item.badge && (
                <div className="absolute -top-3 right-6 z-10">
                  <span className="px-4 py-1 bg-[#A855F7] text-white text-[10px] font-bold rounded-lg uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 break-keep">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <div className="aspect-video rounded-2xl overflow-hidden bg-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
