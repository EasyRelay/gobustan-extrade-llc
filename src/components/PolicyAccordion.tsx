import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Section {
  title: string;
  content: ReactNode;
}

interface PolicyAccordionProps {
  sections: Section[];
}

export default function PolicyAccordion({ sections }: PolicyAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-slate-900 text-lg pr-8">{section.title}</span>
            <ChevronDown
              className={`w-6 h-6 text-teal-600 flex-shrink-0 transition-transform ${
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
                <div className="px-6 pb-6 text-slate-700 leading-relaxed prose prose-slate max-w-none">
                  {section.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      ))}
    </div>
  );
}
