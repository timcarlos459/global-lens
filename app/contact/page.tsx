import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import OfficeMap from "@/components/contact/OfficeMap";
import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFC]">
      {/* ================= HERO ================= */}

      <Hero />

      {/* ================= INTRO ================= */}

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#64D98B]/20 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#081B29]/10 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-6 py-3 text-sm font-semibold uppercase tracking-[4px] text-[#64D98B]">
              Luxury Travel Concierge
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-[#081B29] md:text-6xl">
              Let Us Design Your
              <span className="block text-[#64D98B]">
                Dream African Journey
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              Whether you are planning an exclusive safari, a luxury honeymoon,
              a family escape, or a fully customized expedition across Africa,
              our destination specialists are ready to create an itinerary
              tailored entirely around you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.25fr]">
          <ContactInfo />

          <div className="rounded-[36px] border border-gray-200 bg-white p-8 shadow-xl lg:p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= OFFICE MAP ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-[#64D98B]/10 px-5 py-2 font-semibold text-[#64D98B]">
            Visit Our Office
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#081B29]">
            Meet Our Travel Experts
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our Nairobi office welcomes travelers from around the world.
            Schedule a consultation and let our specialists help craft the
            perfect African experience.
          </p>
        </div>

        <OfficeMap />
      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full bg-[#64D98B]/10 px-5 py-2 font-semibold text-[#64D98B]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#081B29]">
              Everything You Need To Know
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              We have answered some of the most common questions about booking,
              payments, travel requirements, luxury accommodation, safari
              experiences and custom itineraries.
            </p>
          </div>

          <FAQ />
        </div>
      </section>
    </main>
  );
}
