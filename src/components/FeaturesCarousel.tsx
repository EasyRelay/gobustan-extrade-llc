import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, BarChart3, Users, Globe2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Monitor every shipment with GPS precision and automated status updates'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Gain insights into shipping patterns, costs, and performance metrics'
  },
  {
    icon: Users,
    title: 'Dedicated Account Team',
    description: 'Personal support from logistics experts who understand your business'
  },
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Access to worldwide partners and infrastructure for seamless international shipping'
  }
];

export default function FeaturesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technology-driven solutions that give you complete visibility and control
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-teal-600 rounded-xl mb-4">
                <feature.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
