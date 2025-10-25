import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-50 backdrop-blur-md shadow-md' : 'bg-slate-50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 bg-slate-50">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Gobustan Extrade home">
            <img src="/short-logo.png" alt="Gobustan Extrade" className="w-40 h-14 text-teal-600 group-hover:text-teal-700 transition-colors" aria-hidden="true" />
            {/* <span className="text-xl font-bold text-slate-900">Gobustan Extrade</span> */}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Home
            </Link>
            <a href="#services" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Services
            </a>
            <a href="#fleet" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Fleet
            </a>
            <a href="#tracking" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Tracking
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
              Pricing
            </a>
            <a
              href="#quote"
              className="px-6 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <Link
                  to="/"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <a
                  href="#services"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#fleet"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fleet
                </a>
                <a
                  href="#tracking"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tracking
                </a>
                <a
                  href="#pricing"
                  className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#quote"
                  className="block mx-4 px-6 py-2.5 bg-teal-600 text-white text-center rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
