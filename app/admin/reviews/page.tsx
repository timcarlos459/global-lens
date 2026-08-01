import { getReviews } from "@/actions/adminReviews";
import ReviewManager from "@/components/admin/reviews/ReviewManager";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-black text-[#081B29]">Reviews</h1>

          <p className="mt-2 text-gray-500">
            Manage customer reviews, ratings and travel experiences.
          </p>
        </div>

        <Link
          href="/admin/reviews/new"
          className="flex w-fit items-center gap-2 rounded-2xl bg-[#64D98B] px-6 py-4 font-bold text-[#081B29] transition hover:scale-105"
        >
          <Plus size={20} />
          Add Review
        </Link>
      </div>

      <ReviewManager items={reviews} />
    </div>
  );
}
