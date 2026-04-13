import { motion } from 'motion/react';
import { blogPosts } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Philosophy Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/heemok-portrait/1200/1500"
                alt="HEEMOK Artist Portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-heemok-point/10 mix-blend-multiply" />
              {/* Seal Overlay */}
              <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-heemok-point/40 flex items-center justify-center">
                <span className="text-heemok-point/60 text-3xl font-serif font-bold">희목</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-heemok-point font-medium mb-6 block">
              Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
              비움으로 채우는 <br />
              <span className="italic text-heemok-point">붓의 사유</span>
            </h2>
            <div className="space-y-8 text-heemok-text/70 leading-relaxed text-lg font-light">
              <p>
                희목(HEEMOK)은 전통 서예의 정적인 아름다움과 현대 디자인의 동적인 에너지를 융합하는 아티스트입니다. 
                붓 끝에서 시작되는 한 획은 단순히 글자를 형상화하는 것을 넘어, 그 순간의 호흡과 감정을 종이 위에 박제하는 행위입니다.
              </p>
              <p>
                우리는 너무 많은 정보와 시각적 소음 속에 살고 있습니다. 희목의 작업은 그 소음을 걷어내고 
                '여백'이라는 공간을 통해 사용자에게 숨 쉴 틈을 제공합니다. 비어있음은 곧 무엇이든 담을 수 있는 무한한 가능성입니다.
              </p>
              <p className="font-serif italic text-heemok-text/90 border-l-2 border-heemok-point/30 pl-6 py-2">
                "먹의 농담은 인생의 깊이와 닮아 있습니다. 때로는 진하게, 때로는 흐릿하게 번져가는 그 궤적 속에 우리의 삶이 투영됩니다."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Log / Blog Section */}
        <div id="log" className="pt-24 border-t border-heemok-text/5">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.5em] text-heemok-point font-medium mb-4 block">
                Archive
              </span>
              <h2 className="text-4xl md:text-5xl font-serif">Log & Process</h2>
            </div>
            <a href="#" className="hidden md:block text-xs uppercase tracking-[0.3em] font-medium hover:text-heemok-point transition-colors">
              View All Posts →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-8 bg-heemok-bg shadow-sm group-hover:shadow-lg transition-all duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-heemok-point font-bold">
                    {post.date}
                  </span>
                  <div className="w-8 h-px bg-heemok-text/10" />
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-heemok-point transition-colors">
                  {post.title}
                </h3>
                <p className="text-heemok-text/60 font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <span className="text-xs uppercase tracking-[0.2em] font-medium border-b border-heemok-text/20 pb-1 group-hover:border-heemok-point transition-colors">
                  Read More
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
