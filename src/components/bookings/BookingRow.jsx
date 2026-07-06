
import { useTravel } from "../../hooks/useTravel";

function BookingRow({ booking, onDeleteClick }) {
  const { packages } = useTravel();

  // Relational Lookup: Find the matching package from TravelContext
  const relatedPackage = packages.find((pkg) => pkg.id === booking.packageId);
  const packageName = relatedPackage ? relatedPackage.title : "Unknown Expedition";

  // Status Badges
  const getStatusStyle = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Cancelled":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-stone-50 text-stone-600 border-stone-200";
    }
  };

  return (
    <tr className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors">
      {/* If dummy data has customerId, render booking.customerId or booking.customerName */}
      <td className="px-6 py-4 font-medium text-stone-900">
        {booking.customerName || `Customer #${booking.customerId}`}
      </td>
      <td className="px-6 py-4 text-stone-600 font-medium">{packageName}</td>
      <td className="px-6 py-4 text-stone-500">
        {new Date(booking.travelDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </td>
      <td className="px-6 py-4 text-stone-600 text-center">{booking.people}</td>
      <td className="px-6 py-4 text-stone-700 font-medium">
        Rs. {booking.amount.toLocaleString()}
      </td>
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusStyle(booking.status)}`}>
          {booking.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={() => onDeleteClick(booking)}
          className="text-xs font-semibold text-stone-400 hover:text-rose-600 transition-colors px-2 py-1 rounded hover:bg-rose-50"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default BookingRow;