"use client";

import { useState } from "react";
import AddDestinationModal from "@/components/admin/destination/AddDestinationModal";

export default function NewDestinationPage() {
  const [open, setOpen] = useState(true);

  return (
    <AddDestinationModal
      open={open}
      onClose={() => setOpen(false)}
      onSave={(destination) => {
        console.log(destination);
      }}
    />
  );
}
