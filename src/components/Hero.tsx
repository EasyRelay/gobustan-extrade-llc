import { motion } from 'framer-motion';
import { Package, Globe, Award } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            >
              Global Logistics. <span className="text-teal-600">Local Reliability.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Fast, trackable freight — sea, air, and road — engineered for businesses of all sizes.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote"
                className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold text-lg hover:bg-teal-700 hover:-translate-y-1 active:translate-y-0 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-center"
              >
                Get a Quote
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4">
                  <Package className="w-6 h-6 text-teal-600" aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">99.8%</p>
                <p className="text-sm text-slate-600">On-time Delivery</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4">
                  <Globe className="w-6 h-6 text-teal-600" aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">50+</p>
                <p className="text-sm text-slate-600">Countries</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4">
                  <Award className="w-6 h-6 text-teal-600" aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">15+</p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>
            </div>
            <div className="mt-6 bg-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <p className="text-lg font-semibold mb-2">Trusted by Industry Leaders</p>
              <p className="text-teal-100">Delivering excellence across every mile</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
