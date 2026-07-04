import { recentBookings } from "../../data/recentBooking";

function RecentBookings() {
  const badgeColors = {
    Confirmed: "bg-emerald-100 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-stone-800">
            Recent Bookings
          </h2>

          <p className="text-sm text-stone-500">
            Latest travel reservations.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-stone-200 text-left">
              <th className="pb-3 text-sm font-semibold text-stone-600">
                Customer
              </th>

              <th className="pb-3 text-sm font-semibold text-stone-600">
                Package
              </th>

              <th className="pb-3 text-sm font-semibold text-stone-600">
                Travelers
              </th>

              <th className="pb-3 text-sm font-semibold text-stone-600">
                Date
              </th>

              <th className="pb-3 text-sm font-semibold text-stone-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {recentBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-stone-100 hover:bg-stone-50 transition"
              >
                <td className="py-4 font-medium text-stone-800">
                  {booking.customer}
                </td>

                <td className="py-4 text-stone-600">
                  {booking.package}
                </td>

                <td className="py-4 text-stone-600">
                  {booking.travelers}
                </td>

                <td className="py-4 text-stone-600">
                  {booking.date}
                </td>

                <td className="py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColors[booking.status]}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RecentBookings;