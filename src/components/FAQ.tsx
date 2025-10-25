import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const faqs = [
  {
    question: 'What areas do you service?',
    answer: 'We provide logistics services across North America and internationally to over 50 countries. Our network includes major ports, airports, and distribution hubs worldwide.'
  },
  {
    question: 'How do I get a shipping quote?',
    answer: 'You can request a quote by clicking the "Get a Quote" button on our website, calling our sales team, or emailing us at tftexpressllc@gmail.com. We typically respond within 2 hours during business hours.'
  },
  {
    question: 'What types of cargo can you handle?',
    answer: 'We handle a wide range of cargo including general freight, refrigerated goods, oversized loads, hazardous materials, and high-value shipments. Each requires specific handling procedures and documentation.'
  },
  {
    question: 'Do you offer insurance?',
    answer: 'Yes, all shipments include basic insurance coverage. Additional coverage is available for high-value or specialized cargo. Our team can help you determine the right level of coverage.'
  },
  {
    question: 'How can I track my shipment?',
    answer: 'Use our tracking tool on the website by entering your tracking number. You can also contact your dedicated account manager or our customer service team for real-time updates.'
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-slate-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
