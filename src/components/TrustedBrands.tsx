import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2 } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const brands = [
  { name: 'TechCorp', sector: 'Technology & Electronics' },
  { name: 'GlobalManufacturing', sector: 'Industrial Manufacturing' },
  { name: 'FreshFoods Inc', sector: 'Food & Beverage' },
  { name: 'AutoParts Direct', sector: 'Automotive' },
  { name: 'MediSupply Pro', sector: 'Healthcare & Medical' },
  { name: 'RetailGiants Co', sector: 'Retail & E-commerce' }
];

export default function TrustedBrands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Trusted by Leading Brands</h2>
          <p className="text-slate-600">Delivering excellence across every industry</p>
        </motion.div>

        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-slate-50 rounded-xl p-6 h-24 flex items-center justify-center hover:bg-teal-50 transition-colors relative">
                <Building2 className="w-12 h-12 text-slate-400 group-hover:text-teal-600 transition-colors" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-teal-50 rounded-xl p-2">
                  <p className="text-xs text-center font-semibold text-teal-800">{brand.sector}</p>
                </div>
              </div>
              <p className="text-center text-sm text-slate-700 font-medium mt-2">{brand.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
