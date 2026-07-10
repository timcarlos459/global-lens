import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function ContactInfo() {
  const items = [
    {
      icon: MapPin,
      title: "Office",
      value: "Westlands, Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 712 345 678",
    },
    {
      icon: Mail,
      title: "Email",
      value: "bookings@globallensafrica.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat | 8:00 AM - 6:00 PM",
    },
    {
      icon: ShieldCheck,
      title: "Emergency Support",
      value: "24/7 Travel Assistance",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-black text-[#081B29]">
        Contact Information
      </h2>

      <p className="mt-4 text-gray-600 leading-8">
        Reach our travel experts anytime.
      </p>

      <div className="space-y-6 mt-10">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-6 flex gap-5"
            >
              <div className="w-16 h-16 rounded-full bg-[#64D98B]/20 flex items-center justify-center">
                <Icon className="text-[#081B29]" size={30} />
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#081B29]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
