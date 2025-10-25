import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesCarousel from '../components/FeaturesCarousel';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABar from '../components/CTABar';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <FeaturesCarousel />
      <Testimonials />
      <FAQ />
      <CTABar />
    </>
  );
}
