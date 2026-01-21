
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Calculator from './pages/Calculator';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <motion.main
      key={location.pathname}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen pt-20"
    >
      {children}
    </motion.main>
  );
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={`${isDarkMode ? 'dark bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
        <CustomCursor />
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/produk" element={<PageWrapper><Products /></PageWrapper>} />
            <Route path="/kalkulator" element={<PageWrapper><Calculator /></PageWrapper>} />
            <Route path="/artikel" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/karir" element={<PageWrapper><Career /></PageWrapper>} />
            <Route path="/kontak" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
