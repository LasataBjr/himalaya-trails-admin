import { useState } from "react";
import { useTravel } from "../hooks/useTravel";
import { initialCustomers } from "../data/customers";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerFilter from "../components/customers/CustomerFilters";
import CustomerStatus from "../components/customers/CustomerStats";

export default function Customers() {
  const { bookings } = useTravel();

  const [customers] = useState(initialCustomers);

  const [searchTerm, setSearchTerm] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredCustomers = customers.filter((customer) => {

    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()); 

    const matchesProvince =
      provinceFilter === "" ||
      customer.province === provinceFilter;

    const bookingCount = bookings.filter(
      (booking) => booking.customerId === customer.id
    ).length;

    const isActive = bookingCount > 0; // A customer is considered active if they have at least one booking

    const matchesStatus =
      statusFilter === "" ||
      (statusFilter === "Active" && isActive) ||
      (statusFilter === "Inactive" && !isActive);

    return ( matchesSearch && matchesProvince && matchesStatus );
}); 

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

      <CustomerStatus customers={filteredCustomers} bookings={bookings} />

      <CustomerFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        provinceFilter={provinceFilter}
        setProvinceFilter={setProvinceFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <CustomerTable
        customers={filteredCustomers}
        bookings={bookings}
      />

    </div>
  );
}