
import React from 'react';
import { motion } from 'framer-motion';
import FinancialCalculator from '../components/FinancialCalculator';

const Calculator: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Kalkulator Finansial
        </motion.h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Simulasikan pinjaman atau investasi Anda dengan mudah dan transparan.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <FinancialCalculator />
      </div>
    </div>
  );
};

export default Calculator;
