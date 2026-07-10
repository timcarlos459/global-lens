import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeMap from "@/components/contact/OfficeMap";
import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full bg-[#64D98B]/20 px-5 py-2 text-sm font-semibold text-[#081B29]">
            Contact Global Lens Tours
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black text-[#081B29]">
            Let us Plan Your Next Adventure
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Whether you are planning your first African safari, a luxury
            honeymoon, a family holiday, or a private expedition, our travel
            specialists are here to help every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo />

          <ContactForm />
        </div>

        <OfficeMap />

        <FAQ />
      </section>
    </main>
  );
}
