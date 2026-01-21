
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const categories = ['Tabungan', 'Kredit', 'Deposito'];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Produk & Layanan Kami
        </motion.h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Temukan solusi finansial yang tepat untuk setiap tahap kehidupan Anda. Dari tabungan pendidikan hingga modal pengembangan usaha.
        </p>
      </div>

      {categories.map(category => (
        <section key={category} className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold">{category}</h2>
            <div className="h-0.5 flex-grow bg-slate-100 dark:bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => p.category === category).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
            {PRODUCTS.filter(p => p.category === category).length === 0 && (
              <div className="col-span-full p-20 bg-slate-50 dark:bg-slate-800/50 rounded-3xl text-center text-slate-400 italic">
                Akan segera hadir layanan {category} lainnya.
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="bg-primary rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Butuh Konsultasi Keuangan?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Tim ahli kami siap membantu Anda memilih produk yang paling sesuai dengan kebutuhan dan profil risiko Anda.
          </p>
          <button className="bg-gold hover:bg-yellow-600 text-slate-900 font-bold px-10 py-4 rounded-full transition-colors">
            Hubungi Advisor Kami
          </button>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center">
          <span className="text-[20rem]">💰</span>
        </div>
      </section>
    </div>
  );
};

export default Products;
