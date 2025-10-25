import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/short-logo.png" alt="Gobustan Extrade" className="w-40 h-14 text-teal-400" aria-hidden="true" />
              {/* <span className="text-xl font-bold text-white">Gobustan Extrade</span> */}
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>364 Pinnacle Dr<br />Lake Orion, MI 48360</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+1234567890" className="hover:text-teal-400 transition-colors">
                  Contact Us
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:tftexpressllc@gmail.com"
                  className="hover:text-teal-400 transition-colors break-all"
                >
                  tftexpressllc@gmail.com
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-teal-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-teal-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-teal-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-teal-400 transition-colors">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#tracking" className="hover:text-teal-400 transition-colors">
                  Tracking
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-teal-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-teal-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs space-y-1">
              <p>MC: 009884</p>
              <p>USDOT: 2930225</p>
              <p>EIN: 46-2569310</p>
            </div>
          </div>

          {/* <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to receive logistics insights and updates.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-teal-400 text-sm" role="status">
                  Successfully subscribed!
                </p>
              )}
            </form>
          </div> */}
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gobustan Extrade LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
