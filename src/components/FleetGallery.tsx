import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Truck, Package, Snowflake, Weight } from 'lucide-react';
import { staggerContainer, scaleIn } from '../utils/animations';

const fleet = [
  {
    type: 'Dry Van',
    icon: Truck,
    capacity: '53ft / 45,000 lbs',
    availability: 'Available',
    specs: 'Standard freight, climate controlled',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    type: 'Refrigerated',
    icon: Snowflake,
    capacity: '53ft / 43,000 lbs',
    availability: 'Available',
    specs: 'Temperature range: -20°F to 70°F',
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    type: 'Flatbed',
    icon: Package,
    capacity: '48ft / 48,000 lbs',
    availability: 'Available',
    specs: 'Oversized cargo, construction materials',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    type: 'Heavy Haul',
    icon: Weight,
    capacity: 'Custom / 150,000 lbs',
    availability: 'On Request',
    specs: 'Specialized equipment, permits arranged',
    color: 'bg-red-100 text-red-600'
  }
];

const filters = ['All', 'Long-haul', 'Refrigerated', 'Heavy Cargo'];

export default function FleetGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <section id="fleet" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Fleet</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Modern, well-maintained vehicles for every shipping need
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fleet.map((vehicle, index) => (
            <motion.article
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 rounded-2xl ${vehicle.color} flex items-center justify-center mb-4`}>
                <vehicle.icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{vehicle.type}</h3>
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                <p>
                  <span className="font-semibold">Capacity:</span> {vehicle.capacity}
                </p>
                <p>
                  <span className="font-semibold">Specs:</span> {vehicle.specs}
                </p>
              </div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  vehicle.availability === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {vehicle.availability}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
