
import React from 'react';
import { NavItem, Product, Statistic, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', path: '/' },
  { label: 'Produk', path: '/produk' },
  { label: 'Kalkulator', path: '/kalkulator' },
  { label: 'Artikel', path: '/artikel' },
  { label: 'Karir', path: '/karir' },
  { label: 'Kontak', path: '/kontak' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'tabungan-parhuta',
    title: 'Tabungan Parhuta',
    description: 'Tabungan harian dengan bunga kompetitif dan tanpa biaya administrasi bulanan.',
    icon: '💰',
    category: 'Tabungan',
    color: 'bg-blue-100'
  },
  {
    id: 'kredit-modal-kerja',
    title: 'Kredit Modal Kerja',
    description: 'Solusi pendanaan untuk mengembangkan bisnis UMKM Anda dengan proses cepat.',
    icon: '📈',
    category: 'Kredit',
    color: 'bg-green-100'
  },
  {
    id: 'deposito-berjangka',
    title: 'Deposito Berjangka',
    description: 'Investasi aman dengan bagi hasil yang menguntungkan dan pilihan tenor fleksibel.',
    icon: '🔒',
    category: 'Deposito',
    color: 'bg-amber-100'
  },
  {
    id: 'kredit-konsumsi',
    title: 'Kredit Konsumsi',
    description: 'Penuhi kebutuhan mendesak atau impian Anda dengan cicilan ringan.',
    icon: '🏠',
    category: 'Kredit',
    color: 'bg-purple-100'
  }
];

export const STATISTICS: Statistic[] = [
  { label: 'Nasabah Aktif', value: 25000, suffix: '+', icon: 'users' },
  { label: 'Total Aset', value: 500, suffix: 'M+', icon: 'briefcase' },
  { label: 'Tahun Melayani', value: 15, suffix: '', icon: 'clock' },
  { label: 'Kantor Cabang', value: 8, suffix: '', icon: 'map-pin' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pengusaha UMKM',
    content: 'Proses pengajuan kredit di BPR Karya Parhuta sangat cepat dan membantu bisnis keripik saya berkembang pesat.',
    avatar: 'https://picsum.photos/seed/budi/100/100'
  },
  {
    id: 2,
    name: 'Siti Aminah',
    role: 'Guru',
    content: 'Tabungan Parhuta sangat praktis. Saya merasa aman menyimpan masa depan pendidikan anak-anak di sini.',
    avatar: 'https://picsum.photos/seed/siti/100/100'
  },
  {
    id: 3,
    name: 'Rudi Hermawan',
    role: 'Karyawan Swasta',
    content: 'Deposito di sini memberikan bunga yang jauh lebih baik dibanding bank umum lainnya. Sangat direkomendasikan.',
    avatar: 'https://picsum.photos/seed/rudi/100/100'
  }
];
