
import React from 'react';
// Import Variants to fix typing issues with custom animation objects
import { motion, Variants } from 'framer-motion';
import { PRODUCTS, STATISTICS, TESTIMONIALS } from '../constants';
import Counter from '../components/Counter';
import FinancialCalculator from '../components/FinancialCalculator';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const tagline = "Membangun Masa Depan Finansial Anda";
  
  // Explicitly type containerVariants as Variants to prevent inference issues
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  // Explicitly type childVariants as Variants and use literal types for transition properties
  const childVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover scale-110"
            alt="Banking background"
          />
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1, y: 100 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1], 
                y: [-20, 20, -20],
                x: [-10, 10, -10]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bg-white/10 blur-xl rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: `${i * 15}%`,
                top: `${i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight flex flex-wrap"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {tagline.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-flex mr-[0.3em] overflow-hidden whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={childVariants}
                        className={(word === "Masa" || word === "Depan") ? "text-gold" : ""}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed"
              >
                BPR Karya Parhuta hadir sebagai mitra terpercaya bagi UMKM dan masyarakat untuk mewujudkan impian finansial melalui solusi perbankan modern.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold hover:bg-yellow-600 text-slate-900 font-bold px-8 py-4 rounded-full shadow-lg transition-colors"
                >
                  Buka Rekening
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 border border-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full transition-all"
                >
                  Layanan Kami
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-slate-50 dark:fill-slate-900">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 glass-dark dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700"
            >
              <Counter endValue={stat.value} suffix={stat.suffix} />
              <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Layanan Unggulan Kami
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Berbagai produk pilihan yang dirancang khusus untuk memenuhi beragam kebutuhan finansial Anda, mulai dari tabungan harian hingga modal usaha.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Calculator Section */}
      <section className="bg-slate-100 dark:bg-slate-800/30 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Hitung Kemudahan Cicilan Anda</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
              Gunakan kalkulator simulasi kredit kami untuk merencanakan keuangan Anda secara transparan. Tidak ada biaya tersembunyi, semua dihitung secara terbuka.
            </p>
            <ul className="space-y-4">
              {['Bunga Kompetitif', 'Proses Cepat & Mudah', 'Tenor Hingga 5 Tahun', 'Tanpa Biaya Admin Ribet'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-300">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FinancialCalculator />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
          <p className="text-slate-500">Kepercayaan nasabah adalah prioritas utama dan energi bagi pertumbuhan kami.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm"
            >
              <div className="text-gold text-4xl mb-4">"</div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 italic">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-gold" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
