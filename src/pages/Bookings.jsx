import { useState } from "react";
import { useTravel } from "../hooks/useTravel";

import BookingTable from "../components/bookings/BookingTable";
import BookingFilters from "../components/bookings/BookingFilters";
import BookingForm from "../components/bookings/BookingForm";

// Temporary mock customers
// (Later we'll move these into CustomerContext)
const mockCustomers = [
  { id: 101, name: "Ram Sharma", email: "ram@example.com" },
  { id: 102, name: "Sita Lama", email: "sita@example.com" },
  { id: 103, name: "John Smith", email: "john@example.com" },
];

export default function Bookings() {
  const {
    bookings = [],
    packages = [],

    addBooking,
    updateBooking,
    deleteBooking,
  } = useTravel();

  // -----------------------------
  // Filter State
  // -----------------------------

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [packageFilter, setPackageFilter] = useState("");

  // -----------------------------
  // Modal State
  // -----------------------------

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeEditingBooking, setActiveEditingBooking] = useState(null);

  // -----------------------------
  // Filtering
  // -----------------------------

  const filteredBookings = bookings.filter((booking) => {
    const customer = mockCustomers.find(
      (c) => c.id === booking.customerId
    );

    const customerName = customer
      ? customer.name.toLowerCase()
      : "";

    const matchesSearch =
      customerName.includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "" ||
      booking.status === statusFilter;

    const matchesPackage =
      packageFilter === "" ||
      booking.packageId === Number(packageFilter);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPackage
    );
  });

  // -----------------------------
  // CRUD
  // -----------------------------

  const handleOpenCreateModal = () => {
    setActiveEditingBooking(null);
    setIsFormOpen(true);
  };

  const handleOpenEditModal = (booking) => {
    setActiveEditingBooking(booking);
    setIsFormOpen(true);
  };

  const handleFormSubmission = (bookingData) => {
    if (activeEditingBooking) {
      updateBooking(bookingData);
    } else {
      addBooking(bookingData);
    }

    setIsFormOpen(false);
    setActiveEditingBooking(null);
  };

  const handleDeleteClick = (booking) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmed) return;

    deleteBooking(booking.id);
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">

      {/* Page Header */}

      <div>
        <h1 className="text-2xl font-bold text-content-heading tracking-tight">
          Bookings Workspace
        </h1>

        <p className="mt-1 text-sm text-content-body">
          Manage customer travel reservations across Nepal.
        </p>
      </div>

      {/* Filters */}

      <BookingFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        packageFilter={packageFilter}
        setPackageFilter={setPackageFilter}
        packages={packages}
        onNewBookingClick={handleOpenCreateModal}
      />

      {/* Booking Table */}

      <BookingTable
        bookings={filteredBookings}
        packages={packages}
        customers={mockCustomers}
        onEdit={handleOpenEditModal}
        onDelete={handleDeleteClick}
      />

      {/* Booking Modal */}

      <BookingForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setActiveEditingBooking(null);
        }}
        onSubmit={handleFormSubmission}
        editingBooking={activeEditingBooking}
        customers={mockCustomers}
        packages={packages}
      />
    </div>
  );
}