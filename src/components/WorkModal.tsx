import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Work } from '../types';

interface WorkModalProps {
  work: Work | null;
  onClose: () => void;
}

export default function WorkModal({ work, onClose }: WorkModalProps) {
  if (!work) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-heemok-bg/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl w-full bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-heemok-point hover:text-white transition-all duration-300"
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto flex flex-col justify-center">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.4em] text-heemok-point font-medium mb-4 block">
                {work.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                {work.title}
              </h2>
              <div className="w-12 h-px bg-heemok-text/20 mb-8" />
              <p className="text-heemok-text/70 leading-relaxed mb-10 text-lg">
                {work.description}
              </p>
            </div>

            <div className="bg-heemok-bg/50 p-8 border-l-2 border-heemok-point/30">
              <h3 className="text-sm uppercase tracking-[0.3em] font-serif mb-4 opacity-60">Philosophy</h3>
              <p className="text-heemok-text/80 font-serif italic leading-loose">
                "{work.philosophy}"
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
