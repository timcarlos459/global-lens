"use client";

type RoomSelectorProps = {
  roomType: string;
  setRoomType: (value: string) => void;
};

const rooms = [
  {
    name: "Standard Room",
    description: "Comfortable room with all standard amenities.",
  },
  {
    name: "Deluxe Room",
    description: "Larger room with upgraded facilities and better views.",
  },
  {
    name: "Luxury Suite",
    description: "Premium accommodation with luxury amenities.",
  },
];

export default function RoomSelector({
  roomType,
  setRoomType,
}: RoomSelectorProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-[#081B29] mb-8">
        Select Your Room
      </h2>

      <div className="space-y-5">
        {rooms.map((room) => (
          <label
            key={room.name}
            className={`block border rounded-2xl p-5 cursor-pointer transition ${
              roomType === room.name
                ? "border-[#64D98B] bg-green-50"
                : "border-gray-200 hover:border-[#64D98B]"
            }`}
          >
            <input
              type="radio"
              name="room"
              value={room.name}
              checked={roomType === room.name}
              onChange={() => setRoomType(room.name)}
              className="mr-3"
            />

            <span className="font-semibold text-lg">{room.name}</span>

            <p className="text-gray-500 mt-2">{room.description}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
