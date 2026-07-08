import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function BookingStatusChart({ bookings }) {
  // 1. Group and aggregate booking status occurrences dynamically using reduce
  const statusCounts = bookings.reduce(
    (acc, booking) => {
      const status = booking.status || "Pending";
      if (acc[status] !== undefined) {
        acc[status]++;
      }
      return acc;
    },
    { Confirmed: 0, Pending: 0, Cancelled: 0 }
  );

  // 2. Format the calculated totals into a shape Recharts expects
  const data = [
    { name: "Confirmed", value: statusCounts.Confirmed, color: "#10b981" }, // Smooth Emerald
    { name: "Pending", value: statusCounts.Pending, color: "#f59e0b" },   // Warm Amber
    { name: "Cancelled", value: statusCounts.Cancelled, color: "#f43f5e" }, // Minimal Rose
  ].filter(item => item.value > 0); // Drop empty categories to keep the layout clean

  // 3. Compute total bookings count to figure out percentage values
  const totalBookings = data.reduce((sum, item) => sum + item.value, 0);

  // Custom tooltips to maintain your minimalist aesthetic
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const percentage = totalBookings > 0 ? ((item.value / totalBookings) * 100).toFixed(0) : 0;
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl border border-stone-800 text-xs shadow-xl font-sans">
          <p className="font-semibold text-stone-400 mb-0.5">{item.name}</p>
          <p style={{ color: item.payload.color }} className="font-extrabold">
            {item.value} Bookings ({percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4 flex flex-col h-full justify-between">
      <div>
        <h3 className="text-sm font-bold text-content-heading tracking-tight">
          Bookings by Status
        </h3>
        <p className="text-xs text-stone-400 mt-0.5">
          Distribution breakdown of active, unverified, and dropped reservations.
        </p>
      </div>

      <div className="h-[220px] w-full text-[11px] font-medium font-sans">
        {totalBookings === 0 ? (
          <div className="h-full flex items-center justify-center text-stone-400 italic">
            No booking data available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                height={36}
                iconType="circle"
                iconSize={8}
                formatter={(value) => {
                  const item = data.find(d => d.name === value);
                  const count = item ? item.value : 0;
                  return <span className="text-stone-600 font-medium text-xs ml-1">{value} ({count})</span>;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}