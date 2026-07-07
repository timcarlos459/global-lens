"use client";

type GuestSelectorProps = {
  adults: number;
  childGuests: number;
  infants: number;
  setAdults: (value: number) => void;
  setChildGuests: (value: number) => void;
  setInfants: (value: number) => void;
};

export default function GuestSelector({
  adults,
  childGuests,
  infants,
  setAdults,
  setChildGuests,
  setInfants,
}: GuestSelectorProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#081B29] mb-8">Guests</h2>

      {/* Adults */}

      <div className="flex justify-between items-center border-b pb-6">
        <div>
          <h3 className="font-semibold text-lg">Adults</h3>
          <p className="text-gray-500 text-sm">Age 12+</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setAdults(Math.max(1, adults - 1))}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
          >
            −
          </button>

          <span className="w-8 text-center text-xl font-bold">{adults}</span>

          <button
            type="button"
            onClick={() => {
              setAdults(adults + 1);
            }}
            className="w-10 h-10 rounded-full bg-[#64D98B] text-white hover:bg-green-500 text-xl"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}

      <div className="flex justify-between items-center border-b py-6">
        <div>
          <h3 className="font-semibold text-lg">Children</h3>
          <p className="text-gray-500 text-sm">Age 2 - 11</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setChildGuests(Math.max(0, childGuests - 1))}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
          >
            −
          </button>

          <span className="w-8 text-center text-xl font-bold">
            {childGuests}
          </span>

          <button
            type="button"
            onClick={() => setChildGuests(childGuests + 1)}
            className="w-10 h-10 rounded-full bg-[#64D98B] text-white hover:bg-green-500 text-xl"
          >
            +
          </button>
        </div>
      </div>

      {/* Infants */}

      <div className="flex justify-between items-center pt-6">
        <div>
          <h3 className="font-semibold text-lg">Infants</h3>
          <p className="text-gray-500 text-sm">Under 2 Years</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setInfants(Math.max(0, infants - 1))}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
          >
            −
          </button>

          <span className="w-8 text-center text-xl font-bold">{infants}</span>

          <button
            type="button"
            onClick={() => setInfants(infants + 1)}
            className="w-10 h-10 rounded-full bg-[#64D98B] text-white hover:bg-green-500 text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
