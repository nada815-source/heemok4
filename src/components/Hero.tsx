import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image/Video Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/calligraphy-hero/1920/1080?blur=2"
          alt="HEEMOK Calligraphy Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F7F2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="text-white/60 uppercase tracking-[0.5em] text-xs md:text-sm font-medium">
            Master Calligrapher & Designer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-serif text-white mb-10 leading-tight tracking-tight"
        >
          희목 <span className="text-white/30">(HEEMOK)</span>
          <br />
          <span className="text-3xl md:text-5xl font-light italic opacity-80">
            The Breath of Ink
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/50 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed tracking-wide mb-12"
        >
          전통의 깊이와 현대의 감각이 만나는 지점. 붓 끝에서 피어나는 단아한 정서와 예술적 무게감을 경험해 보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <a
            href="#works"
            className="inline-block px-10 py-4 border border-white/20 text-white text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-heemok-text transition-all duration-500 group"
          >
            Explore Works
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-heemok-text/40 text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-heemok-text/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
