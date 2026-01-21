
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 group flex flex-col h-full"
    >
      <div className={`w-16 h-16 ${product.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
        {product.icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-gold mb-2 block">{product.category}</span>
      <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
        {product.title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {product.description}
      </p>
      <button className="flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:gap-4 transition-all group-hover:text-gold">
        Selengkapnya 
        <span className="text-xl">→</span>
      </button>
    </motion.div>
  );
};

export default ProductCard;
