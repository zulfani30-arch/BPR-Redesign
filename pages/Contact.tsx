
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-bold mb-8">Hubungi Kami</h1>
          <p className="text-slate-500 mb-12 text-lg">
            Ada pertanyaan atau butuh bantuan lebih lanjut? Kami siap mendengarkan dan memberikan solusi terbaik untuk Anda.
          </p>

          <div className="space-y-8 mb-12">
            {[
              { label: 'Kantor Pusat', value: 'Jl. Raya Utama No. 123, Menteng, Jakarta Pusat', icon: '📍' },
              { label: 'Email Support', value: 'support@karyaparhuta.co.id', icon: '✉️' },
              { label: 'Call Center (24/7)', value: '(021) 1234-5678', icon: '📞' },
              { label: 'WhatsApp', value: '+62 812 3456 7890', icon: '💬' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{item.label}</h4>
                  <p className="text-slate-500">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-64 rounded-3xl overflow-hidden grayscale contrast-125 border border-slate-200">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.15539420556!2d106.7891564!3d-6.2877541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4b786f1e7%3A0x74516766579e0e5a!2sJakarta%20Pusat%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1716531584345!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">✓</div>
              <h3 className="text-3xl font-bold">Pesan Terkirim!</h3>
              <p className="text-slate-500">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda dalam waktu 1x24 jam.</p>
              <button onClick={() => setSubmitted(false)} className="text-primary font-bold">Kirim pesan lain</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nama Lengkap</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Alamat Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Subjek</label>
                <input 
                  required
                  type="text" 
                  placeholder="Pertanyaan seputar Kredit"
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Pesan</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-slate-400' : 'bg-primary hover:bg-blue-800'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mengirim...
                  </>
                ) : 'Kirim Pesan'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
