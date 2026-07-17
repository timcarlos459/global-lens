import { MapPin, Phone, Mail, Clock, ShieldCheck, Plane } from "lucide-react";

export default function ContactInfo() {
  const items = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      value: "Westlands, Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+254 712 345 678",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "bookings@globallenstours.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday – Saturday | 8:00 AM – 6:00 PM",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Travel Support",
      value: "Emergency assistance throughout your journey",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Heading */}

      <div>
        <span className="inline-flex rounded-full border border-[#64D98B]/30 bg-[#64D98B]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#64D98B]">
          Contact Information
        </span>

        <h2 className="mt-6 text-5xl font-black text-[#081B29]">
          Speak With
          <span className="block text-[#64D98B]">Our Travel Experts</span>
        </h2>

        <p className="mt-6 text-lg leading-9 text-gray-600">
          Our luxury travel specialists are ready to help you design an
          unforgettable African experience—from safari adventures and beach
          escapes to private luxury expeditions.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group flex items-start gap-6 rounded-[28px] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#64D98B]/40 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/15 transition group-hover:bg-[#64D98B]">
                <Icon
                  size={30}
                  className="text-[#081B29] group-hover:text-white"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#081B29]">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg leading-8 text-gray-600">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Book With Us */}

      <div className="rounded-4xl bg-[#081B29] p-10 text-white shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]">
            <Plane size={30} className="text-[#081B29]" />
          </div>

          <div>
            <h3 className="text-3xl font-black">Why Travel With Us?</h3>

            <p className="mt-2 text-gray-300">Luxury • Trusted • Tailor-Made</p>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-lg leading-8 text-gray-300">
          <p>✓ Personalized luxury itineraries</p>

          <p>✓ Experienced destination specialists</p>

          <p>✓ Handpicked luxury lodges & resorts</p>

          <p>✓ Private transfers & concierge service</p>

          <p>✓ 24/7 support before and during travel</p>
        </div>
      </div>
    </div>
  );
}
