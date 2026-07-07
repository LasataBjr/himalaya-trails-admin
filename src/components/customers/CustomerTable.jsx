import CustomerRow from "./CustomerRow";

export default function CustomerTable({
  customers,
  bookings,
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
      <table className="min-w-full border-collapse">

        {/* Table Header */}
        <thead>
          <tr className="border-b border-stone-200 bg-stone-50 text-left text-xs font-bold uppercase tracking-wider text-stone-500">

            <th className="px-6 py-4">
              Customer
            </th>

            <th className="px-6 py-4">
              Location
            </th>

            <th className="px-6 py-4 text-center">
              Bookings
            </th>

            <th className="px-6 py-4">
              Total Spent
            </th>

            <th className="px-6 py-4">
              Latest Trip
            </th>

            <th className="px-6 py-4">
              Status
            </th>

          </tr>
        </thead>

        {/* Table Body */}
        <tbody>

          {customers.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="px-6 py-16 text-center text-sm text-stone-400"
              >
                No customers found.
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <CustomerRow
                key={customer.id}
                customer={customer}
                bookings={bookings}
              />
            ))
          )}

        </tbody>

      </table>
    </div>
  );
}