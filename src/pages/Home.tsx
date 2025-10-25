import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
// import FleetGallery from '../components/FleetGallery';
// import TrackYourShipment from '../components/TrackYourShipment';
// import FlexiblePricingPlans from '../components/FlexiblePricingPlans';
// import TrustedBrands from '../components/TrustedBrands';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesCarousel from '../components/FeaturesCarousel';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTABar from '../components/CTABar';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBrands /> */}
      <ServicesGrid />
      {/* <FleetGallery />
      <TrackYourShipment /> */}
      <WhyChooseUs />
      <FeaturesCarousel />
      {/* <FlexiblePricingPlans /> */}
      <Testimonials />
      <FAQ />
      <CTABar />
    </>
  );
}
