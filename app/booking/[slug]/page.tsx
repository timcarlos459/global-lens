import { notFound } from "next/navigation";
import BookingForm from "@/components/booking/BookingForm";
import { destinations } from "@/data/destinations";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BookingPage({ params }: Props) {
  const { slug } = await params;

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      <BookingForm destination={destination} />
    </main>
  );
}
