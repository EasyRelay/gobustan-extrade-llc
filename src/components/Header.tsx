import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Har bir section link bosilganda shu funksiya ishlaydi
  const handleNavClick = (hash: string) => {
    if (location.pathname === '/') {
      // Agar allaqachon Home sahifada bo‘lsa
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Aks holda Home sahifaga o‘tib, keyin scroll qiladi
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-50 backdrop-blur-md shadow-md' : 'bg-slate-50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 bg-slate-50">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/short-logo.png" alt="Gobustan Extrade" className="w-40 h-14" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('#hero')} className="text-slate-700 hover:text-teal-600 font-medium">Home</button>
            <button onClick={() => handleNavClick('#services')} className="text-slate-700 hover:text-teal-600 font-medium">Services</button>
            <button onClick={() => handleNavClick('#features-carousel')} className="text-slate-700 hover:text-teal-600 font-medium">Features</button>
            <button onClick={() => handleNavClick('#testimonials')} className="text-slate-700 hover:text-teal-600 font-medium">Testimonials</button>
            <button onClick={() => handleNavClick('#faq')} className="text-slate-700 hover:text-teal-600 font-medium">FAQ</button>
            <button
              onClick={() => handleNavClick('#quote')}
              className="px-6 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all"
            >
              Get a Quote
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-teal-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-slate-200">
                <button onClick={() => handleNavClick('#hero')} className="block px-4 py-2">Home</button>
                <button onClick={() => handleNavClick('#services')} className="block w-full text-left px-4 py-2">Services</button>
                <button onClick={() => handleNavClick('#fleet')} className="block w-full text-left px-4 py-2">Fleet</button>
                <button onClick={() => handleNavClick('#tracking')} className="block w-full text-left px-4 py-2">Tracking</button>
                <button onClick={() => handleNavClick('#pricing')} className="block w-full text-left px-4 py-2">Pricing</button>
                <button
                  onClick={() => handleNavClick('#quote')}
                  className="block mx-4 px-6 py-2.5 bg-teal-600 text-white rounded-lg font-semibold"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
