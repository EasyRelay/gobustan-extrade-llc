import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { staggerContainer, scaleIn } from '../utils/animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp',
    role: 'Supply Chain Manager',
    content: 'Gobustan Extrade has transformed our logistics operations. Their real-time tracking and dedicated support have been game-changers for our business.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'GlobalManufacturing',
    role: 'Operations Director',
    content: 'Exceptional service and reliability. We ship internationally and their customs clearance expertise saved us countless hours and headaches.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'FreshFoods Inc',
    role: 'Logistics Coordinator',
    content: 'Their refrigerated fleet is top-notch. Every shipment arrives on time and in perfect condition. Highly recommend for temperature-sensitive cargo.',
    rating: 5
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real feedback from businesses that trust us with their logistics
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-100" aria-hidden="true" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
