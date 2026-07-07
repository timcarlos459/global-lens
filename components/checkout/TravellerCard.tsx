type TravellerCardProps = {
  fullName: string;
  email: string;
  nationality: string;
  adults: number;
  childGuests: number;
  infants: number;
};

export default function TravellerCard({
  fullName,
  email,
  nationality,
  adults,
  childGuests,
  infants,
}: TravellerCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#081B29] mb-6">
        Traveller Information
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Name</span>
          <strong>{fullName}</strong>
        </div>

        <div className="flex justify-between">
          <span>Email</span>
          <strong>{email}</strong>
        </div>

        <div className="flex justify-between">
          <span>Nationality</span>
          <strong>{nationality}</strong>
        </div>

        <hr />

        <div className="flex justify-between">
          <span>Adults</span>
          <strong>{adults}</strong>
        </div>

        <div className="flex justify-between">
          <span>Children</span>
          <strong>{childGuests}</strong>
        </div>

        <div className="flex justify-between">
          <span>Infants</span>
          <strong>{infants}</strong>
        </div>
      </div>
    </div>
  );
}
