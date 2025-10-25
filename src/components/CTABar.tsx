import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function CTABar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-white mb-4"
          >
            Ready to Streamline Your Logistics?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto"
          >
            Get a free quote today and discover how we can optimize your supply chain
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:tftexpressllc@gmail.com?subject=Quote Request"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:-translate-y-1 active:translate-y-0 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm text-teal-100"
          >
            By requesting a quote, you agree to our{' '}
            <a href="/terms" className="underline hover:text-white focus:outline-none focus:text-white">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline hover:text-white focus:outline-none focus:text-white">
              Privacy Policy
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
