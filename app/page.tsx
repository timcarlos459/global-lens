import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import PopularDestinations from "@/components/PopularDestinations";
import LuxuryGallery from "@/components/LuxuryGallery";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      <Hero />

      <FeaturedTours />

      <WhyChooseUs />

      <Testimonials />

      <PopularDestinations />

      <LuxuryGallery />

      <Partners />

      <Newsletter />

      <Footer />
    </main>
  );
}
