import { FiEdit2, FiTrash2 } from "react-icons/fi";

function BookingRow({ booking, packages, customers, onEdit, onDelete }) {
  
  // 1. Relational Lookup: Find matching package title from passed array
  const relatedPackage = packages.find((pkg) => pkg.id === booking.packageId);
  const packageName = relatedPackage ? relatedPackage.title : "Unknown Expedition";

  // 2. Relational Lookup: Find matching customer details from passed array
  const relatedCustomer = customers.find((cust) => cust.id === booking.customerId);
  const customerName = relatedCustomer ? relatedCustomer.name : `Customer #${booking.customerId}`;

  // Modern UI status badge styling helper
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
      {/* Customer Resolved Context column */}
      <td className="px-6 py-4 font-medium text-stone-900">{customerName || "Unknown Customer"}</td>
      
      {/* Package Resolved Context column */}
      <td className="px-6 py-4 text-stone-600 font-medium">{packageName || "Unknown Package"}</td>
      
      {/* Date structural field */}
      <td className="px-6 py-4 text-stone-500">
        {new Date(booking.travelDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })}
      </td>
      
      {/* People headcount column */}
      <td className="px-6 py-4 text-stone-600 text-center">{booking.people}</td>
      
      {/* Financial amount column */}
      <td className="px-6 py-4 text-stone-700 font-medium">
        NPR {booking.amount.toLocaleString()}
      </td>
      
      {/* Status evaluation column */}
      <td className="px-6 py-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusStyle(booking.status)}`}>
          {booking.status}
        </span>
      </td>
      
      {/* System Action Callbacks (Edit and Delete triggers) */}
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
            
          <button
            onClick={() => onEdit(booking)}
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors px-2 py-1 rounded hover:bg-sky-50"
          >
            <FiEdit2 size={16} />
          </button>
          
          <button
            onClick={() => onDelete(booking)}
            className="text-xs font-semibold text-stone-400 hover:text-rose-600 transition-colors px-2 py-1 rounded hover:bg-rose-50"
          >
            <FiTrash2 size={16} />
          </button>
          
        </div>
      </td>
    </tr>
  );
}

export default BookingRow;