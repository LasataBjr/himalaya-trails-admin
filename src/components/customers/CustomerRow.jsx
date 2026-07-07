import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function CustomerRow({ customer, bookings }) {
  // Find all bookings belonging to this customer
  const customerBookings = bookings.filter(
    (booking) => booking.customerId === customer.id
  );

  // Calculate booking statistics
  const totalBookings = customerBookings.length;

  const totalSpent = customerBookings.reduce(
    (sum, booking) => sum + booking.amount,
    0
  );

  // Find latest travel date
  const latestBooking =
    customerBookings.length > 0
      ? customerBookings.reduce((latest, current) =>
          new Date(current.travelDate) > new Date(latest.travelDate)
            ? current
            : latest
        )
      : null;

  return (
    <tr className="border-b border-stone-100 hover:bg-stone-50 transition-colors">

      {/* Customer */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-semibold text-stone-900">
            {customer.name}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-xs text-stone-500">
            <FiMail size={12} />
            {customer.email}
          </div>

          <div className="mt-1 flex items-center gap-1 text-xs text-stone-500">
            <FiPhone size={12} />
            {customer.phone}
          </div>
        </div>
      </td>

      {/* Province */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-1 text-sm text-stone-700">
          <FiMapPin size={14} />
          {customer.city}, {customer.province}
        </div>
      </td>

      {/* Total Bookings */}
      <td className="px-6 py-5 text-center font-semibold text-stone-800">
        {totalBookings}
      </td>

      {/* Total Spent */}
      <td className="px-6 py-5 font-semibold text-emerald-600">
        NPR {totalSpent.toLocaleString()}
      </td>

      {/* Latest Trip */}
      <td className="px-6 py-5 text-sm text-stone-600">
        {latestBooking
          ? latestBooking.travelDate
          : "No Bookings"}
      </td>

      {/* Status */}
      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            totalBookings > 0
              ? "bg-emerald-100 text-emerald-700"
              : "bg-stone-100 text-stone-500"
          }`}
        >
          {totalBookings > 0 ? "Active Traveler" : "Inactive"}
        </span>
      </td>
    </tr>
  );
}