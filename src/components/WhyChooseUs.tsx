import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, DollarSign, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "We ensure every shipment is protected with full insurance and real-time tracking, guaranteeing peace of mind for all our clients.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Our network and technology-driven planning achieve 99.8% on-time delivery rates worldwide.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "You always know what you're paying for — no hidden costs, only clear and detailed quotes.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support specialists are available day and night to assist you whenever needed.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll();
  // scroll paytida ozgina tebranish
  const yWave = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section id="why-choose-us" className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-teal-50">
      {/* Animated wave background */}
      <motion.div
        style={{
          y: yWave,
        }}
        animate={{
          y: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg
          className="w-full h-[350px] md:h-[380px] lg:h-[400px] opacity-30 scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none" // <-- SVG stretchingni saqlaydi
        >
          <path
            fill="#14b8a6"
            fillOpacity="1"
            d="M0,192L80,181.3C160,171,320,149,480,138.7C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose <span className="text-teal-600">Gobustan Extrade</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A logistics partner that moves your business forward — safely,
            transparently, and on time.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 80, scale: 0.95 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-teal-100 text-teal-600 flex-shrink-0 shadow-lg shadow-teal-100/50">
                <reason.icon className="w-10 h-10" />
                <div className="absolute -z-10 w-36 h-36 bg-teal-200/30 rounded-full blur-2xl"></div>
              </div>

              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
