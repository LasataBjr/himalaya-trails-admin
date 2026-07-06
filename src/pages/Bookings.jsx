
import { useTravel } from "../hooks/useTravel";
import BookingTable from "../components/bookings/BookingTable";

// Local state array for Customers to resolve relational ID mappings
const mockCustomers = [
  { id: 101, name: "Ram Sharma", email: "ram@example.com" },
  { id: 102, name: "Sita Lama", email: "sita@example.com" },
  { id: 103, name: "John Smith", email: "john@example.com" }
];

export default function Bookings() {
  const { bookings, packages } = useTravel();

  // Temporary placeholder functions for our upcoming edit/delete features
  const handleEditClick = (booking) => {
    console.log("Edit requested for booking:", booking.id);
  };

  const handleDeleteClick = (booking) => {
    console.log("Delete requested for booking:", booking.id);
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      {/* Page Heading Headers */}
      <div>
        <h1 className="text-2xl font-bold text-content-heading tracking-tight">
          Bookings Workspace
        </h1>
        <p className="text-sm text-content-body mt-1">
          Manage customer travel reservations and relational data metrics.
        </p>
      </div>

      {/* Summary KPI Sheet Counter Card */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm w-full max-w-xs">
        <p className="text-sm font-medium text-stone-500">Total Bookings</p>
        <h2 className="mt-2 text-4xl font-bold text-stone-900">{bookings.length}</h2>
      </div>

      {/* Render our Core Data Sheet Table View */}
      <BookingTable 
        bookings={bookings}
        packages={packages}
        customers={mockCustomers}
        onEdit={handleEditClick}
        onDelete={handleDeleteClick}
      />
    </div>
  );
}