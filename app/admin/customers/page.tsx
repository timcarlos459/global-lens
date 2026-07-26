import CustomerStats from "@/components/admin/customer/CustomerStats";
import CustomerFilters from "@/components/admin/customer/CustomerFilters";
import CustomerTable from "@/components/admin/customer/CustomerTable";

import { supabase } from "@/utils/supabase";

export default async function CustomersPage() {
  const { data: customers } = await supabase
    .from("customers")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div className="space-y-8">
      <CustomerStats customers={customers ?? []} />

      <CustomerFilters />

      <CustomerTable customers={customers ?? []} />
    </div>
  );
}
