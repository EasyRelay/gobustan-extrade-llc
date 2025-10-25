import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function TrackYourShipment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowResults(true);
    }
  };

  const mockTimeline = [
    { status: 'Order Placed', location: 'Lake Orion, MI', date: '2025-10-20 14:30', completed: true },
    { status: 'In Transit', location: 'Chicago, IL', date: '2025-10-22 08:15', completed: true },
    { status: 'Out for Delivery', location: 'Denver, CO', date: '2025-10-24 06:00', completed: true },
    { status: 'Delivered', location: 'Denver, CO', date: 'ETA: 2025-10-25 17:00', completed: false }
  ];

  return (
    <section id="tracking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Track Your Shipment</h2>
            <p className="text-xl text-slate-600">
              Real-time tracking for complete visibility
            </p>
          </motion.div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-8 shadow-lg mb-8"
          >
            <label htmlFor="tracking-input" className="block text-lg font-semibold text-slate-900 mb-4">
              Enter Your Tracking Number
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="tracking-input"
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="e.g., GBX123456789"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold text-lg hover:bg-teal-700 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
                Track
              </button>
            </div>
            <p className="text-sm text-slate-600 mt-3">
              Need help?{' '}
              <a
                href="mailto:tftexpressllc@gmail.com"
                className="text-teal-600 hover:text-teal-700 font-semibold focus:outline-none focus:underline"
              >
                Contact us
              </a>
            </p>
          </motion.form>

          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              role="region"
              aria-live="polite"
              aria-label="Tracking results"
            >
              <div className="bg-teal-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Tracking: {trackingNumber}</h3>
                <div className="flex items-center gap-2 text-teal-100">
                  <Package className="w-5 h-5" aria-hidden="true" />
                  <span>Standard Freight</span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-1">Origin</p>
                    <p className="font-semibold text-slate-900">Lake Orion, MI</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-1">Destination</p>
                    <p className="font-semibold text-slate-900">Denver, CO</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-1">ETA</p>
                    <p className="font-semibold text-teal-600">Oct 25, 5:00 PM</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-slate-900 mb-4">Shipment Timeline</h4>
                <div className="space-y-4">
                  {mockTimeline.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        {event.completed ? (
                          <CheckCircle className="w-6 h-6 text-teal-600" aria-hidden="true" />
                        ) : (
                          <Truck className="w-6 h-6 text-slate-400" aria-hidden="true" />
                        )}
                        {index < mockTimeline.length - 1 && (
                          <div className={`w-0.5 h-12 ${event.completed ? 'bg-teal-600' : 'bg-slate-300'}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className="font-semibold text-slate-900">{event.status}</p>
                        <p className="text-sm text-slate-600 flex items-center gap-1">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          {event.location}
                        </p>
                        <p className="text-sm text-slate-500">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
