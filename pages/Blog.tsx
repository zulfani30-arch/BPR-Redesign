
import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const articles = [
    { id: 1, title: 'Tips Mengelola Keuangan UMKM', date: '20 Mei 2024', category: 'Bisnis' },
    { id: 2, title: 'Manfaat Deposito untuk Masa Depan', date: '18 Mei 2024', category: 'Investasi' },
    { id: 3, title: 'Cara Aman Bertransaksi Online', date: '15 Mei 2024', category: 'Edukasi' },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">Artikel & Berita</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.div 
            key={article.id}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700"
          >
            <div className="h-48 bg-slate-200 dark:bg-slate-700"></div>
            <div className="p-8">
              <span className="text-xs font-bold text-gold uppercase">{article.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-4">{article.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{article.date}</p>
              <button className="text-primary font-bold">Baca Selengkapnya →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
