
import BookingRow from "./BookingRow";

function BookingTable({ bookings, onDeleteClick }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-stone-50 border-b border-stone-200 text-xs font-bold uppercase tracking-wider text-stone-500">
            <th className="px-6 py-4">Customer</th>
            <th className="px-6 py-4">Package</th>
            <th className="px-6 py-4">Travel Date</th>
            <th className="px-6 py-4 text-center">People</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        
        <tbody className="divide-y divide-stone-100 text-sm">
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="7" className="px-6 py-12 text-center text-stone-400 font-medium">
                No customer bookings match the selected criteria.
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <BookingRow 
                key={booking.id} 
                booking={booking} 
                onDeleteClick={onDeleteClick}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;