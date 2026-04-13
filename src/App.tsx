/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-heemok-point selection:text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Works Section */}
        <Gallery />

        {/* About & Philosophy Section */}
        <About />

        {/* Multi-step Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Reveal Animation Script (Simple Implementation) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed bottom-10 right-10 z-40 hidden md:block"
      >
        <div className="w-12 h-12 border border-heemok-text/10 flex items-center justify-center bg-heemok-bg/50 backdrop-blur-sm hover:bg-heemok-point hover:text-white transition-all duration-500 cursor-pointer group">
          <span className="text-[10px] font-serif font-bold group-hover:scale-110 transition-transform">희목</span>
        </div>
      </motion.div>
    </div>
  );
}

