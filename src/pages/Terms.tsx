import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { useEffect } from 'react';

export default function Terms() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-2">
            Last updated: October 25, 2025
          </motion.p>

          <motion.p variants={fadeInUp} className="text-slate-700 mb-8 leading-relaxed">
            These Terms of Service govern your use of Gobustan Extrade LLC's logistics services.
            Please read them carefully before using our services.
          </motion.p>

          {/* SECTION 1 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing and using the services provided by Gobustan Extrade LLC, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, you should not use our services.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              We reserve the right to modify these terms at any time. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Services</h2>
            <p className="text-slate-700 leading-relaxed">
              Gobustan Extrade LLC provides logistics and freight transportation services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mt-3">
              <li>Air, sea, and road freight transportation</li>
              <li>Warehousing and storage services</li>
              <li>Customs clearance assistance</li>
              <li>Supply chain management</li>
              <li>Shipment tracking and reporting</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Services are provided subject to availability and may vary based on location, cargo type, and other factors.
              Specific terms for each shipment will be outlined in the applicable shipping agreement or bill of lading.
            </p>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Customer Responsibilities</h2>
            <p className="text-slate-700 leading-relaxed">As a customer, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mt-3">
              <li>Provide accurate and complete information about your shipments</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Properly package and label cargo according to industry standards</li>
              <li>Declare hazardous materials and obtain necessary permits</li>
              <li>Pay all fees and charges in accordance with our payment terms</li>
              <li>Maintain adequate insurance coverage for your cargo</li>
              <li>Cooperate with customs authorities and provide required documentation</li>
            </ul>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Pricing and Payment</h2>
            <p className="text-slate-700 leading-relaxed">
              Pricing for our services is based on various factors including distance, cargo type, weight, volume, service level, and current market conditions.
              Quotes provided are estimates and may be subject to adjustment based on actual shipment characteristics.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">Payment terms:</p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
              <li>New customers: Payment due upon shipment or in advance</li>
              <li>Established customers: Net 30 terms may be available with approved credit</li>
              <li>Late payments may incur interest charges and service interruption</li>
              <li>Additional charges may apply for special services, storage, demurrage, or regulatory fees</li>
            </ul>
          </motion.div>

          {/* SECTION 5 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Liability and Insurance</h2>
            <p className="text-slate-700 leading-relaxed">
              Our liability for loss, damage, or delay to cargo is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mt-3">
              <li>Domestic shipments: Subject to applicable federal regulations (e.g., Carmack Amendment)</li>
              <li>International shipments: Subject to international conventions (e.g., Montreal Convention, Hague-Visby Rules)</li>
              <li>Standard liability limits apply unless additional insurance is purchased</li>
              <li>We are not liable for indirect, consequential, or special damages</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Customers are strongly encouraged to obtain appropriate cargo insurance.
              Claims for loss or damage must be filed in writing within the time periods specified by applicable law.
            </p>
          </motion.div>

          {/* SECTION 6 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Prohibited Items</h2>
            <p className="text-slate-700 leading-relaxed">We do not transport:</p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mt-3">
              <li>Illegal goods or contraband</li>
              <li>Certain hazardous materials (unless specifically agreed and properly documented)</li>
              <li>Perishable goods without appropriate temperature-controlled arrangements</li>
              <li>Weapons, explosives, or ammunition (except with proper permits)</li>
              <li>Currency, precious metals, or securities (except with prior arrangement)</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Shipment of prohibited items may result in immediate termination of services, forfeiture of cargo, and legal consequences.
            </p>
          </motion.div>

          {/* SECTION 7 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Dispute Resolution</h2>
            <p className="text-slate-700 leading-relaxed">
              Any disputes arising from these Terms of Service or our services shall be resolved as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mt-3">
              <li>Good faith negotiations between the parties</li>
              <li>Mediation by a mutually agreed neutral third party</li>
              <li>Binding arbitration in accordance with the rules of the American Arbitration Association</li>
              <li>Arbitration shall take place in Oakland County, Michigan</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              These terms are governed by the laws of the State of Michigan and applicable federal law.
            </p>
          </motion.div>

          {/* SECTION 8 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact Information</h2>
            <p className="text-slate-700 leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              <strong>Gobustan Extrade LLC</strong><br />
              MC: 009884 | USDOT: 2930225 | EIN: 46-2569310<br />
              364 Pinnacle Dr<br />
              Lake Orion, MI 48360<br />
              Email:{' '}
              <a
                href="mailto:tftexpressllc@gmail.com"
                className="text-teal-600 hover:text-teal-700"
              >
                tftexpressllc@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
