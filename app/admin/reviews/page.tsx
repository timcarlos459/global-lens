import { Plus, Star, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

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

      {/* Overview */}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
            <MessageSquare size={22} />
          </div>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            Total Reviews
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">0</h2>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600">
            <Star size={22} className="fill-current" />
          </div>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            Average Rating
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">0.0</h2>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Star size={22} />
          </div>

          <p className="mt-5 text-sm font-semibold text-gray-500">
            5-Star Reviews
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#081B29]">0</h2>
        </div>
      </div>

      {/* Reviews */}

      <section className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl">
        <div className="flex min-h-80 items-center justify-center">
          <div className="max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#64D98B]/10 text-[#64D98B]">
              <MessageSquare size={30} />
            </div>

            <h2 className="mt-6 text-2xl font-black text-[#081B29]">
              Customer Reviews
            </h2>

            <p className="mt-2 leading-7 text-gray-500">
              Customer reviews will appear here. We will connect this section to
              Supabase and add approval, editing, deletion, ratings and review
              management.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
