import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, ArrowUpRight, Monitor, Wifi, Droplets } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      title: '파트너쉽 / 제휴 제안',
      subtext: 'choidc80@gmail.com',
      action: '메일 보내기',
      href: 'mailto:choidc80@gmail.com'
    },
    {
      title: '유튜브 채널 바로가기',
      subtext: 'https://www.youtube.com/@phoneplus2013',
      action: '유튜브채널 바로가기',
      href: 'https://www.youtube.com/@phoneplus2013'
    },
    {
      title: '카카오채팅방 참여하기',
      subtext: '@phoneplus2013',
      action: '오픈채팅방 참여하기',
      href: 'https://pf.kakao.com/_phoneplus2013'
    },
    {
      title: '창업 문의 / 가맹 상담',
      subtext: '성공적인 비즈니스 파트너를 모십니다.',
      action: '상담 신청하기',
      href: 'mailto:choidc80@gmail.com'
    }
  ];

  const floatingButtons = [
    { icon: Monitor, label: '상담문의', color: 'bg-[#00D15B]' },
    { icon: MessageCircle, label: '카톡상담', color: 'bg-[#FEE500] text-black', href: 'https://pf.kakao.com/_phoneplus2013' },
    { icon: Wifi, label: '인터넷 상담', color: 'bg-[#8b5cf6]' },
    { icon: Droplets, label: '정수기 렌탈문의', color: 'bg-[#0ea5e9]' },
  ];

  return (
    <section id="contact" className="py-40 px-6 bg-black border-t border-white/5 relative">
      {/* Floating Consultation Buttons */}
      <div className="fixed top-24 right-6 z-50 hidden md:flex flex-col gap-3">
        {floatingButtons.map((btn, i) => (
          <motion.a
            key={i}
            href={btn.href || '#contact'}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`${btn.color || 'bg-[#00D15B]'} text-white w-20 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xl shadow-black/20 border border-white/10 backdrop-blur-sm`}
          >
            <btn.icon className="w-7 h-7" />
            <span className="text-[10px] font-bold leading-tight text-center break-keep px-1">
              {btn.label}
            </span>
          </motion.a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-32">
          {/* Typography: Samsung Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-6 block">
              Premium Consultation
            </span>
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight break-keep leading-[1.1]">
              최적의 요금을 <br />
              <span className="text-blue-500 italic drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">설계해드립니다</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-light break-keep max-w-2xl mx-auto leading-relaxed">
              불필요한 통신비 지출을 줄이고, 당신의 사용 패턴에 <br className="hidden md:block" />
              가장 완벽하게 부합하는 맞춤형 플랜을 제안합니다.
            </p>
          </motion.div>

          {/* Form: Minimalist & Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name"
                    placeholder="성함"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blue-500 focus:outline-none transition-all text-lg font-medium text-white placeholder-white/20"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="연락처"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-blue-500 focus:outline-none transition-all text-lg font-medium text-white placeholder-white/20"
                  />
                </div>
              </div>

              <div className="relative">
                <select className="w-full bg-black border-b border-white/10 py-4 focus:border-blue-500 focus:outline-none transition-all appearance-none text-lg font-medium text-white cursor-pointer">
                  <option value="" disabled selected className="bg-black">문의 유형을 선택해주세요</option>
                  <optgroup label="Device Purchase" className="bg-black">
                    <option className="bg-black">Galaxy S24 Ultra</option>
                    <option className="bg-black">Galaxy Z Flip6</option>
                    <option className="bg-black">iPhone 15 Pro</option>
                    <option className="bg-black">기타 기종 문의</option>
                  </optgroup>
                  <optgroup label="Business" className="bg-black">
                    <option className="bg-black">창업 문의 / 가맹 상담</option>
                    <option className="bg-black">파트너쉽 / 제휴 제안</option>
                  </optgroup>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 group cursor-pointer py-4">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy"
                    className="peer appearance-none w-5 h-5 border border-white/10 rounded-full checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer"
                  />
                  <CheckCircle2 className="absolute w-5 h-5 text-white scale-0 peer-checked:scale-75 transition-transform pointer-events-none" />
                </div>
                <label htmlFor="privacy" className="text-sm text-white/40 cursor-pointer select-none font-medium">
                  개인정보 수집 및 이용에 동의합니다. (필수)
                </label>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <a 
                  href="#"
                  className="w-full py-6 bg-white text-black font-bold rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-blue-500/10"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  상담 예약하기
                </a>
                <p className="text-[11px] text-white/30 font-medium tracking-wide">
                  상담 신청 시 전문 상담사가 순차적으로 연락을 드립니다.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* New "Contact us" Section from Image */}
        <div className="mt-40">
          <h3 className="text-4xl font-bold text-white mb-12 flex items-center gap-1">
            Contact us<span className="text-purple-500">.</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-xl font-bold text-white break-keep">{link.title}</h4>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-sm text-white/20 mb-8 truncate font-medium">{link.subtext}</p>
                
                <span className="text-red-600 font-bold text-sm group-hover:underline">
                  {link.action}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
