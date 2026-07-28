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

import { getGalleryItems } from "@/actions/adminGallery";

export default async function Home() {
  const galleryItems = await getGalleryItems();

  const publishedGalleryItems = galleryItems.filter(
    (item) => item.status === "Published",
  );

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      <Hero />

      <FeaturedTours />

      <WhyChooseUs />

      <Testimonials />

      <PopularDestinations />

      <LuxuryGallery items={publishedGalleryItems} />

      <Partners />

      <Newsletter />

      <Footer />
    </main>
  );
}
