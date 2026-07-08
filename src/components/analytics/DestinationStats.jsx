import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function DestinationStats({ bookings, destinations, packages }) {
  // 1. Group bookings by destination or region
  const destinationCounts = bookings.reduce((acc, booking) => {
    if (booking.status === "Cancelled") return acc;

    // Find the package associated with this booking
    const pkg = packages.find((p) => p.id === booking.packageId);
    if (!pkg) return acc;

    // Resolve destination name/region
    const dest = destinations.find((d) => d.id === pkg.destinationId || d.name === pkg.destination);
    const destName = dest ? dest.name : pkg.destination || "Other";

    acc[destName] = (acc[destName] || 0) + 1;
    return acc;
  }, {});

  // 2. Format data into an array structure for Recharts
  const colors = ["#7BBCD9", "#38bdf8", "#818cf8", "#fb7185", "#fbbf24", "#34d399"];
  
  const chartData = Object.keys(destinationCounts).map((key, index) => ({
    name: key,
    value: destinationCounts[key],
    color: colors[index % colors.length]
  })).sort((a, b) => b.value - a.value);

  const totalValidBookings = chartData.reduce((sum, item) => sum + item.value, 0);

  // Aesthetic Custom Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const item = payload[0];
      const pct = totalValidBookings > 0 ? ((item.value / totalValidBookings) * 100).toFixed(0) : 0;
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl border border-stone-800 text-xs shadow-xl font-sans">
          <p className="font-semibold text-stone-400 mb-0.5">{item.name}</p>
          <p style={{ color: item.payload.color }} className="font-extrabold">
            {item.value} Visits ({pct}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-content-heading tracking-tight">
          Destination Popularity
        </h3>
        <p className="text-xs text-stone-400 mt-0.5">
          Geographic distribution of travelers across registered regional hubs.
        </p>
      </div>

      <div className="h-[220px] w-full text-[11px] font-sans">
        {totalValidBookings === 0 ? (
          <div className="h-full flex items-center justify-center text-stone-400 italic">
            No regional tracking metrics captured.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={0} // Filled Pie Chart style
                outerRadius={80}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend 
                verticalAlign="bottom" 
                height={36}
                iconType="circle"
                iconSize={6}
                formatter={(value) => {
                  const item = chartData.find(d => d.name === value);
                  const pct = totalValidBookings > 0 ? ((item.value / totalValidBookings) * 100).toFixed(0) : 0;
                  return <span className="text-stone-600 text-xs ml-1 font-medium">{value} ({pct}%)</span>;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}