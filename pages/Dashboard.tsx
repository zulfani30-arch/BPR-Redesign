
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', balance: 45000000 },
  { name: 'Feb', balance: 46200000 },
  { name: 'Mar', balance: 45800000 },
  { name: 'Apr', balance: 48000000 },
  { name: 'May', balance: 49500000 },
  { name: 'Jun', balance: 52000000 },
];

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-4 pb-20">
      <div className="container mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Halo, Pak Budi</h1>
            <p className="text-slate-500">Selamat datang kembali di dashboard keuangan Anda.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-lg">Transfer</button>
            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2 rounded-xl font-bold">Download Report</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card Total Saldo */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-2 bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <p className="text-blue-200 uppercase tracking-widest text-xs font-bold mb-2">Total Saldo Tersedia</p>
              <h2 className="text-5xl font-extrabold mb-10">Rp 52.000.000</h2>
              <div className="flex gap-12">
                <div>
                  <p className="text-blue-200 text-xs mb-1">Tabungan Parhuta</p>
                  <p className="font-bold">Rp 12.000.000</p>
                </div>
                <div>
                  <p className="text-blue-200 text-xs mb-1">Deposito Aktif</p>
                  <p className="font-bold">Rp 40.000.000</p>
                </div>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <div className="w-64 h-64 border-[40px] border-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-xl mb-6">Aksi Cepat</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Bayar Listrik', icon: '⚡' },
                { label: 'Isi Pulsa', icon: '📱' },
                { label: 'Top-Up e-Wal', icon: '💳' },
                { label: 'BPJS/Asurans', icon: '🏥' },
              ].map((action, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors gap-2">
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-xs font-semibold">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Activity Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-xl mb-8">Pertumbuhan Aset</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e3a8a" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    formatter={(v) => `Rp ${v.toLocaleString()}`}
                  />
                  <Area type="monotone" dataKey="balance" stroke="#1e3a8a" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-xl mb-6">Transaksi Terakhir</h3>
            <div className="space-y-6">
              {[
                { label: 'Indomaret Utama', date: '24 Jun, 14:30', amount: -150000, type: 'out' },
                { label: 'Bunga Deposito', date: '21 Jun, 09:00', amount: 450000, type: 'in' },
                { label: 'Transfer Ke Siti', date: '19 Jun, 18:15', amount: -2000000, type: 'out' },
                { label: 'Gaji Bulanan', date: '01 Jun, 00:05', amount: 7500000, type: 'in' },
              ].map((tx, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${tx.type === 'in' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {tx.type === 'in' ? '+' : '-'}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{tx.label}</p>
                      <p className="text-xs text-slate-400">{tx.date}</p>
                    </div>
                  </div>
                  <p className={`font-bold ${tx.type === 'in' ? 'text-green-600' : 'text-slate-800 dark:text-white'}`}>
                    {tx.type === 'out' ? '-' : ''}Rp {Math.abs(tx.amount).toLocaleString('id-ID')}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 text-primary font-bold text-sm">Lihat Semua Riwayat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
