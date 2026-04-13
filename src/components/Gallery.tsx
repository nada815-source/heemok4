import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { works } from '../data';
import { Category, Work } from '../types';
import WorkModal from './WorkModal';

const categories: Category[] = ['All', 'Logo', 'Fine Art', 'Commercial Title'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter(work => work.category === activeCategory);

  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 bg-heemok-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.5em] text-heemok-point font-medium mb-4 block"
          >
            Discovery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif mb-12"
          >
            Selected Works
          </motion.h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`text-xs md:text-sm uppercase tracking-[0.3em] font-medium transition-all duration-300 relative group pb-2 ${
                  activeCategory === category ? 'text-heemok-point' : 'text-heemok-text/40 hover:text-heemok-text'
                }`}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-px bg-heemok-point transition-all duration-500 ${
                  activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white shadow-sm group-hover:shadow-xl transition-all duration-700">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-heemok-text/0 group-hover:bg-heemok-text/10 transition-colors duration-700" />
                  
                  {/* Hover Info */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 border border-white/40 flex items-center justify-center rounded-full backdrop-blur-sm">
                      <span className="text-white text-[10px] uppercase tracking-[0.2em]">View</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-heemok-point mb-2 block opacity-60">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-serif tracking-tight group-hover:text-heemok-point transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <WorkModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
      />
    </section>
  );
}
