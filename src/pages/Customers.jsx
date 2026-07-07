import { useState } from "react";
import { useTravel } from "../hooks/useTravel";

import { initialCustomers } from "../data/customers";

import CustomerTable from "../components/customers/CustomerTable";

export default function Customers() {
  const { bookings } = useTravel();

  const [customers] = useState(initialCustomers);

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">

      <div>
        <h1 className="text-2xl font-bold text-content-heading">
          Customer Directory
        </h1>

        <p className="mt-1 text-sm text-content-body">
          Browse customer profiles and booking statistics.
        </p>
      </div>

      <CustomerTable
        customers={customers}
        bookings={bookings}
      />

    </div>
  );
}