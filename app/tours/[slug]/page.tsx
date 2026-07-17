import { redirect } from "next/navigation";

export default async function TourRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  redirect(`/destinations/${slug}`);
}
