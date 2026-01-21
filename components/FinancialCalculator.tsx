
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const FinancialCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(50000000);
  const [tenor, setTenor] = useState(12);
  const [interestRate, setInterestRate] = useState(1.2); // per bulan

  const calculation = useMemo(() => {
    const totalInterest = loanAmount * (interestRate / 100) * tenor;
    const totalPayment = loanAmount + totalInterest;
    const monthlyPayment = totalPayment / tenor;

    return {
      monthlyPayment,
      totalInterest,
      totalPayment,
      principal: loanAmount,
    };
  }, [loanAmount, tenor, interestRate]);

  const chartData = [
    { name: 'Pokok Pinjaman', value: calculation.principal, color: '#1e3a8a' },
    { name: 'Total Bunga', value: calculation.totalInterest, color: '#d4af37' },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-700">
      <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Simulasi Kredit</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-slate-600 dark:text-slate-400 font-medium">Jumlah Pinjaman</label>
              <span className="text-primary dark:text-blue-400 font-bold">Rp {loanAmount.toLocaleString('id-ID')}</span>
            </div>
            <input 
              type="range" 
              min="5000000" 
              max="500000000" 
              step="1000000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>5 Juta</span>
              <span>500 Juta</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-4">
              <label className="text-slate-600 dark:text-slate-400 font-medium">Jangka Waktu (Bulan)</label>
              <span className="text-primary dark:text-blue-400 font-bold">{tenor} Bulan</span>
            </div>
            <input 
              type="range" 
              min="3" 
              max="60" 
              step="1"
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>3 Bulan</span>
              <span>60 Bulan</span>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-slate-700/50 p-6 rounded-2xl border border-blue-100 dark:border-slate-600">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Estimasi Angsuran / Bulan</p>
            <p className="text-3xl font-extrabold text-primary dark:text-blue-400">
              Rp {Math.round(calculation.monthlyPayment).toLocaleString('id-ID')}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `Rp ${value.toLocaleString('id-ID')}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mt-4 text-center">
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
              <p className="text-xs text-slate-500 mb-1">Total Pinjaman</p>
              <p className="font-bold text-sm">Rp {calculation.principal.toLocaleString('id-ID')}</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-xl">
              <p className="text-xs text-slate-500 mb-1">Total Bunga</p>
              <p className="font-bold text-sm text-gold">Rp {calculation.totalInterest.toLocaleString('id-ID')}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700">
        <button className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all hover:shadow-xl active:scale-[0.98]">
          Ajukan Sekarang
        </button>
      </div>
    </div>
  );
};

export default FinancialCalculator;
