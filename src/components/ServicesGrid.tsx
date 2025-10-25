import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Ship, Truck, Warehouse, FileCheck, Home } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    features: [
      'Express and standard air cargo',
      'Door-to-door delivery',
      'Customs clearance coordination'
    ]
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    features: [
      'FCL and LCL shipping',
      'Port-to-port and door-to-door',
      'Competitive ocean rates'
    ]
  },
  {
    icon: Truck,
    title: 'Road Transport',
    features: [
      'Full truckload (FTL) and less-than-truckload (LTL)',
      'Dedicated fleet management',
      'Real-time GPS tracking'
    ]
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    features: [
      'Secure storage facilities',
      'Inventory management systems',
      'Cross-docking services'
    ]
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    features: [
      'Import/export documentation',
      'Duty and tax calculation',
      'Regulatory compliance support'
    ]
  },
  {
    icon: Home,
    title: 'Last Mile Delivery',
    features: [
      'Residential and commercial delivery',
      'Scheduled delivery windows',
      'Proof of delivery confirmation'
    ]
  }
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6 group-hover:bg-teal-600 transition-colors">
                <service.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600">
                    <span className="text-teal-600 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
