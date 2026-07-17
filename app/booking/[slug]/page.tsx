import BookingForm from "@/components/booking/BookingForm";
import { destinations } from "@/data/destinations";

type Props = {
  params: {
    slug: string;
  };
};

export default function BookingPage({ params }: Props) {
  const destination = destinations.find((d) => d.slug === params.slug);

  if (!destination) {
    return <div>Destination not found.</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      <BookingForm destination={destination} />
    </main>
  );
}
