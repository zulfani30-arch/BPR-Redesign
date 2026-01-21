
import React from 'react';
import { motion } from 'framer-motion';

const Career: React.FC = () => {
  const jobs = [
    { id: 1, title: 'Account Officer', location: 'Jakarta', type: 'Full-time' },
    { id: 2, title: 'Teller', location: 'Bandung', type: 'Full-time' },
    { id: 3, title: 'IT Support', location: 'Jakarta', type: 'Contract' },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">Gabung Bersama Kami</h1>
        <p className="text-slate-500 text-lg mb-12">
          Membangun karir di dunia perbankan dengan integritas dan semangat melayani. Temukan posisi yang tepat untuk Anda.
        </p>

        <div className="space-y-6">
          {jobs.map((job) => (
            <motion.div 
              key={job.id}
              whileHover={{ x: 10 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center shadow-md border border-slate-100 dark:border-slate-700"
            >
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-slate-500">{job.location} • {job.type}</p>
              </div>
              <button className="mt-4 md:mt-0 bg-primary text-white px-8 py-3 rounded-full font-bold">
                Lamar Sekarang
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
