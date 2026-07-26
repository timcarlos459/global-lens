"use client";

import { FileSpreadsheet, FileText, FileDown } from "lucide-react";

export default function ExportReports() {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        className="flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
        onClick={() => window.open("/api/reports/excel")}
      >
        <FileSpreadsheet size={18} />
        Excel
      </button>

      <button
        className="flex items-center gap-2 rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
        onClick={() => window.open("/api/reports/pdf")}
      >
        <FileText size={18} />
        PDF
      </button>

      <button
        className="flex items-center gap-2 rounded-2xl bg-[#081B29] px-5 py-3 font-semibold text-white transition hover:bg-[#0E2A3D]"
        onClick={() => window.open("/api/reports/csv")}
      >
        <FileDown size={18} />
        CSV
      </button>
    </div>
  );
}
