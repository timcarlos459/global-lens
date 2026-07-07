"use client";

type CustomerFormProps = {
  fullName: string;
  email: string;
  nationality: string;
  specialRequests: string;

  startDate: string;
  endDate: string;

  setFullName: (value: string) => void;
  setEmail: (value: string) => void;
  setNationality: (value: string) => void;
  setSpecialRequests: (value: string) => void;

  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
};

export default function CustomerForm({
  fullName,
  email,
  nationality,
  specialRequests,

  startDate,
  endDate,

  setFullName,
  setEmail,
  setNationality,
  setSpecialRequests,

  setStartDate,
  setEndDate,
}: CustomerFormProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#081B29] mb-8">
        Traveler Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}

        <div>
          <label className="block mb-2 font-semibold">Full Name *</label>

          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
          />
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 font-semibold">Email Address *</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
          />
        </div>

        {/* Nationality */}

        <div>
          <label className="block mb-2 font-semibold">Nationality *</label>

          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="Kenyan"
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
          />
        </div>

        {/* Arrival */}

        <div>
          <label className="block mb-2 font-semibold">Arrival Date *</label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
          />
        </div>

        {/* Departure */}

        <div>
          <label className="block mb-2 font-semibold">Departure Date *</label>

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
          />
        </div>
      </div>

      {/* Special Requests */}

      <div className="mt-8">
        <label className="block mb-2 font-semibold">
          Special Requests (Optional)
        </label>

        <textarea
          rows={5}
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Dietary requirements, honeymoon, wheelchair assistance, birthday celebration..."
          className="w-full border rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#64D98B]"
        />
      </div>
    </div>
  );
}
