import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getTour } from "@/actions/adminTours";
import EditTourForm from "@/components/admin/tours/EditTourForm";

interface EditTourPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditTourPage({ params }: EditTourPageProps) {
  const { id } = await params;

  const tourId = Number(id);

  if (!Number.isInteger(tourId) || tourId <= 0) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
        <h1 className="text-2xl font-black text-red-700">Invalid Tour</h1>

        <p className="mt-2 text-red-600">The tour ID provided is not valid.</p>

        <Link
          href="/admin/tours"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#081B29] px-5 py-3 font-bold text-white"
        >
          <ArrowLeft size={18} />
          Back to Tours
        </Link>
      </div>
    );
  }

  const tour = await getTour(tourId);

  if (!tour) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-black text-[#081B29]">Tour Not Found</h1>

        <p className="mt-2 text-gray-500">
          We could not find the tour you are trying to edit.
        </p>

        <Link
          href="/admin/tours"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#081B29] px-5 py-3 font-bold text-white"
        >
          <ArrowLeft size={18} />
          Back to Tours
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <Link
          href="/admin/tours"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition hover:text-[#081B29]"
        >
          <ArrowLeft size={17} />
          Back to Tours
        </Link>

        <div className="mt-5">
          <h1 className="text-4xl font-black text-[#081B29]">Edit Tour</h1>

          <p className="mt-2 text-gray-500">
            Update the details for{" "}
            <span className="font-semibold text-[#081B29]">{tour.title}</span>.
          </p>
        </div>
      </div>

      {/* Form */}

      <EditTourForm tour={tour} />
    </div>
  );
}
