import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { useEffect } from 'react';

export default function Cookies() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold text-slate-900 mb-4">
            Cookie Policy
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-2">
            Last updated: October 25, 2025
          </motion.p>

          <motion.p variants={fadeInUp} className="text-slate-700 mb-8 leading-relaxed">
            This Cookie Policy explains how Gobustan Extrade LLC uses cookies and similar technologies on our website. 
            By using our website, you consent to our use of cookies as described in this policy.
          </motion.p>

          {/* SECTION 1 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">What Are Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">
              Cookies help us understand how you interact with our website, remember your preferences, 
              and improve your overall experience.
            </p>
          </motion.div>

          {/* SECTION 2 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Performance Cookies:</strong> Collect information about how visitors use our website.</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and choices (such as language or region).</li>
              <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness.</li>
            </ul>
          </motion.div>

          {/* SECTION 3 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">How We Use Cookies</h2>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
              <li>Keep you signed in to your account</li>
              <li>Understand and save your preferences for future visits</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and user experience</li>
              <li>Detect and prevent fraud or security issues</li>
            </ul>
          </motion.div>

          {/* SECTION 4 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Third-Party Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              In addition to our own cookies, we may use third-party cookies from trusted partners, including:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2 mt-3">
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Advertising networks for relevant ads</li>
              <li>Social media platforms for content sharing features</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              These third parties may collect information about your online activities over time and across different websites.
            </p>
          </motion.div>

          {/* SECTION 5 */}
          <motion.div variants={fadeInUp} className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Managing Cookies</h2>
            <p className="text-slate-700 leading-relaxed">
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, 
              but you can modify your browser settings to decline cookies if you prefer.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3">To manage cookies:</p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-2">
              <li>Use your browser settings to block or delete cookies</li>
              <li>Use browser extensions or privacy tools</li>
              <li>Opt out of targeted advertising through industry opt-out tools</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Please note that blocking cookies may affect your ability to use certain features of our website.
            </p>
          </motion.div>

          {/* SECTION 6 */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">
              If you have questions about our use of cookies, please contact us:
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              <strong>Gobustan Extrade LLC</strong><br />
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
