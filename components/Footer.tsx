
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">KP</span>
              </div>
              <span className="font-bold text-xl tracking-tight">BPR Karya Parhuta</span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed">
              Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS).
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a key={social} href={`#${social}`} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                  <span className="capitalize text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-gold">Tautan Cepat</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-blue-100 hover:text-gold transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-gold">Produk Kami</h4>
            <ul className="space-y-4">
              <li><Link to="/produk" className="text-blue-100 hover:text-gold transition-colors text-sm">Kredit Modal Kerja</Link></li>
              <li><Link to="/produk" className="text-blue-100 hover:text-gold transition-colors text-sm">Kredit Konsumsi</Link></li>
              <li><Link to="/produk" className="text-blue-100 hover:text-gold transition-colors text-sm">Tabungan Parhuta</Link></li>
              <li><Link to="/produk" className="text-blue-100 hover:text-gold transition-colors text-sm">Deposito Berjangka</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-gold">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Jl. Raya Utama No. 123, Kota Pusat, Indonesia</span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex gap-3">
                <span>✉️</span>
                <span>info@karyaparhuta.co.id</span>
              </li>
              <li className="mt-6 flex items-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/id/thumb/a/a2/Logo_LPS.svg/1200px-Logo_LPS.svg.png" className="h-8 brightness-0 invert" alt="LPS" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Logo_OJK.svg/1200px-Logo_OJK.svg.png" className="h-8 brightness-0 invert" alt="OJK" />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-blue-300">
          <p>© {new Date().getFullYear()} PT BPR Karya Parhuta. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
