import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, TrendingUp } from 'lucide-react';
import { staggerContainer, scaleIn } from '../utils/animations';

type PricingModel = 'per-shipment' | 'subscription' | 'enterprise';

export default function FlexiblePricingPlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [model, setModel] = useState<PricingModel>('per-shipment');

  const plans = {
    'per-shipment': [
      {
        name: 'Standard',
        price: 'From $200',
        period: 'per shipment',
        features: [
          'Door-to-door delivery',
          'Standard tracking',
          'Insurance up to $10,000',
          'Email support'
        ]
      },
      {
        name: 'Express',
        price: 'From $450',
        period: 'per shipment',
        features: [
          'Priority handling',
          'Real-time GPS tracking',
          'Insurance up to $25,000',
          'Dedicated support',
          'Expedited customs'
        ],
        popular: true
      },
      {
        name: 'Custom',
        price: 'Quote',
        period: 'based on needs',
        features: [
          'Specialized equipment',
          'White glove service',
          'Custom insurance',
          '24/7 priority support',
          'Compliance management'
        ]
      }
    ],
    'subscription': [
      {
        name: 'Business',
        price: '$2,400',
        period: 'per month',
        features: [
          'Up to 15 shipments/month',
          'Real-time tracking',
          'Insurance included',
          'Dedicated account manager',
          '10% volume discount'
        ]
      },
      {
        name: 'Professional',
        price: '$5,500',
        period: 'per month',
        features: [
          'Up to 40 shipments/month',
          'Priority routing',
          'Enhanced insurance',
          'API access',
          '15% volume discount',
          'Quarterly reviews'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact sales',
        features: [
          'Unlimited shipments',
          'Dedicated fleet allocation',
          'Custom SLAs',
          'Full integration support',
          '20%+ volume discount',
          'Strategic partnership'
        ]
      }
    ],
    'enterprise': [
      {
        name: 'Custom Enterprise',
        price: 'Let\'s Talk',
        period: 'tailored to your needs',
        features: [
          'Custom routing and scheduling',
          'Dedicated fleet management',
          'Contract negotiation',
          'Volume-based pricing tiers',
          'Multi-location support',
          'Advanced analytics dashboard',
          'Compliance and audit support'
        ],
        popular: true
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the model that fits your shipping volume and budget
          </p>

          <div className="inline-flex bg-white rounded-xl p-1 shadow-lg">
            <button
              onClick={() => setModel('per-shipment')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                model === 'per-shipment'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              Pay-per-Shipment
            </button>
            <button
              onClick={() => setModel('subscription')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                model === 'subscription'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              Subscription
            </button>
            <button
              onClick={() => setModel('enterprise')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                model === 'enterprise'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              Custom Enterprise
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className={`grid gap-8 ${
            plans[model].length === 1
              ? 'max-w-2xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {plans[model].map((plan, index) => (
            <motion.article
              key={index}
              variants={scaleIn}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                plan.popular ? 'ring-2 ring-teal-600 relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-600 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold text-teal-600">{plan.price}</p>
                <p className="text-slate-600">{plan.period}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                  plan.popular
                    ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-lg'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.price === 'Quote' || plan.price === 'Custom' || plan.price === "Let's Talk"
                  ? 'Contact Sales'
                  : 'Estimate Cost'}
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 mt-8"
        >
          Custom pricing available — contact sales for volume discounts and tailored solutions
        </motion.p>
      </div>
    </section>
  );
}
