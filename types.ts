
export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Tabungan' | 'Kredit' | 'Deposito';
  color: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
