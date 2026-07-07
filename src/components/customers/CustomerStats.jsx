function CustomerStats({ customers, bookings }) {
  // Total registered customers
  const totalCustomers = customers.length;

  // Customers having at least one booking
  const activeCustomers = customers.filter((customer) =>
    bookings.some((booking) => booking.customerId === customer.id)
  ).length;

  // Sum of every booking amount
  const totalRevenue = bookings.reduce(
    (sum, booking) => sum + booking.amount,
    0
  );

  // Average spend per customer
  const averageSpend =
    totalCustomers === 0
      ? 0
      : Math.round(totalRevenue / totalCustomers);

  const stats = [
    {
      title: "Total Customers",
      value: totalCustomers,
    },
    {
      title: "Active Travelers",
      value: activeCustomers,
    },
    {
      title: "Total Revenue",
      value: `NPR ${totalRevenue.toLocaleString()}`,
    },
    {
      title: "Average Spend",
      value: `NPR ${averageSpend.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-stone-900">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CustomerStats;