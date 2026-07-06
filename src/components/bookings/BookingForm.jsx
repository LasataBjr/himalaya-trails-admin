import { useState, useEffect } from "react";

function BookingForm({ isOpen, onClose, onSubmit, editingBooking = null, packages = [], customers = [] }) {
  // If modal is closed, don't render anything
  if (!isOpen) return null;

  // 1. Unified local form tracking states
  const [customerId, setCustomerId] = useState("");
  const [packageId, setPackageId] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [people, setPeople] = useState(1);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("Pending");

  // 2. Hydrate form if editing, or set initial defaults if creating fresh
  useEffect(() => {
    if (editingBooking) {
      setCustomerId(editingBooking.customerId || "");
      setPackageId(editingBooking.packageId || "");
      setTravelDate(editingBooking.travelDate || "");
      setPeople(editingBooking.people || 1);
      setAmount(editingBooking.amount || 0);
      setStatus(editingBooking.status || "Pending");
    } else {
      setCustomerId("");
      setPackageId("");
      setTravelDate("");
      setPeople(1);
      setAmount(0);
      setStatus("Pending");
    }
  }, [editingBooking, isOpen]);

  // 3. Automatically compute and update overall price amount when selection changes
  useEffect(() => {
    const selectedPackage = packages.find((p) => p.id === Number(packageId));
    if (selectedPackage) {
      setAmount(selectedPackage.price * people);
    } else {
      setAmount(0);
    }
  }, [packageId, people, packages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerId || !packageId || !travelDate) return;

    // Build the clean schema payload
    const bookingPayload = {
      id: editingBooking ? editingBooking.id : Date.now(), // keeps old ID if editing
      customerId: Number(customerId),
      packageId: Number(packageId),
      travelDate,
      people: Number(people),
      amount: Number(amount),
      status,
    };

    onSubmit(bookingPayload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header dynamically switches mode */}
        <h2 className="text-xl font-bold text-stone-900 mb-4">
          {editingBooking ? "Modify Reservation Records" : "Create New Reservation"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Dropdown Lookup */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Select Customer</label>
            <select
              required
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none"
            >
              <option value="">-- Choose Account User --</option>
              {customers.map((cust) => (
                <option key={cust.id} value={cust.id}>
                  {cust.name} ({cust.email})
                </option>
              ))}
            </select>
          </div>

          {/* Package Dropdown Selection */}
          <div>
            <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Select Package Destination</label>
            <select
              required
              value={packageId}
              onChange={(e) => setPackageId(e.target.value)}
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none"
            >
              <option value="">-- Choose Package Expedition --</option>
              {packages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.title} (Rs. {pkg.price.toLocaleString()}/person)
                </option>
              ))}
            </select>
          </div>

          {/* Date & Passenger Grid Section */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Travel Date</label>
              <input
                type="date"
                required
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Total Travelers</label>
              <input
                type="number"
                min="1"
                required
                value={people}
                onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-800 focus:border-sky-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Cost Indicator Widget Display */}
          <div className="grid grid-cols-2 gap-4 items-center bg-stone-50 p-3 rounded-xl border border-stone-100">
            <div>
              <span className="block text-xs font-bold uppercase text-stone-400">Total Calculated Cost</span>
              <span className="text-base font-bold text-stone-800">Rs. {amount.toLocaleString()}</span>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Booking Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-lg border border-stone-200 bg-white px-2 py-1 text-sm text-stone-700 focus:border-sky-500 focus:outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Modal Buttons Footer Layout */}
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-stone-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-stone-500 hover:bg-stone-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-stone-900 px-4 py-2 text-sm font-semibold text-white hover:bg-stone-800 transition-colors shadow-sm"
            >
              {editingBooking ? "Update Changes" : "Create Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;