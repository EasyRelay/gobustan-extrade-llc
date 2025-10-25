import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { useEffect } from 'react';

export default function Privacy() {

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-slate-700 mb-8 leading-relaxed">
            At <strong>Gobustan Extrade LLC</strong>, we are committed to protecting your privacy and handling your
            personal information responsibly. This Privacy Policy explains how we collect, use, and safeguard your
            information when you use our logistics services and website.
          </motion.p>

          {/* 1. Information We Collect */}
          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Business information (company name, industry, shipping requirements)</li>
              <li>Shipment details (origin, destination, cargo type, tracking information)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communications with our customer service team</li>
            </ul>
            <p>
              We also automatically collect certain information when you use our website, such as IP address,
              browser type, device information, and usage data through cookies and similar technologies.
            </p>
          </motion.div>

          {/* 2. How We Use Your Information */}
          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and improve our logistics services</li>
              <li>Process shipments and manage your account</li>
              <li>Communicate with you about your shipments, quotes, and updates</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send marketing communications (with your consent where required)</li>
              <li>Analyze usage patterns and optimize our services</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </motion.div>

          {/* 3. Information Sharing */}
          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Service providers and partners who assist in delivering logistics services (carriers, customs brokers, warehouses)
              </li>
              <li>Payment processors for transaction handling</li>
              <li>Professional advisors (lawyers, accountants, auditors)</li>
              <li>Law enforcement or regulatory agencies when required by law</li>
              <li>Third parties in connection with business transactions (mergers, sales, acquisitions)</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </motion.div>

          {/* 4. RingCentral Integration */}
          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">RingCentral Integration</h2>
            <p>
              Our service uses <strong>RingCentral's APIs</strong> to facilitate communication. When you connect your RingCentral
              account, we may access and use the following data:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your RingCentral account information</li>
              <li>Call and message metadata (not message content)</li>
              <li>Contact and directory information</li>
            </ul>
            <p>
              We access only the data necessary for service functionality. This data is <strong>not shared</strong> with third parties
              except as required to operate the service.
            </p>
          </motion.div>

          {/* 5. Data Security */}
          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information against unauthorized
              access, alteration, disclosure, or destruction, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </motion.div>

          {/* 6. Your Rights */}
          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your data</li>
              <li>Objection to or restriction of processing</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:tftexpressllc@gmail.com" className="text-teal-600 hover:text-teal-700">
                tftexpressllc@gmail.com
              </a>.
            </p>
          </motion.div>

          {/* 7. Contact Us */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <p>
              <strong>Gobustan Extrade LLC</strong><br />
              364 Pinnacle Dr<br />
              Lake Orion, MI 48360<br />
              Email:{' '}
              <a href="mailto:tftexpressllc@gmail.com" className="text-teal-600 hover:text-teal-700">
                tftexpressllc@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
