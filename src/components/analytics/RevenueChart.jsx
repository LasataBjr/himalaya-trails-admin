import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart({ bookings }) {
  // Generate an array of the last 6 months dynamically
  const generateMonthlyData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const data = [];
    const currentDate = new Date();

    for (let i = 5; i >= 0; i--) {
      const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1); // Set to the first day of the month
      data.push({
        name: months[d.getMonth()],
        monthIndex: d.getMonth(),
        year: d.getFullYear(),
        revenue: 0,
      });
    }
    return data;
  };

  const monthlyData = generateMonthlyData();

  // Aggregate booking prices into their respective months
  bookings.forEach((booking) => {
    if (booking.status === "Cancelled" || !booking.date) return;

    const bookingDate = new Date(booking.travelDate); // Ensure we are using the correct date field from the booking object
    const bookingMonth = bookingDate.getMonth();
    const bookingYear = bookingDate.getFullYear();

    // Match booking against our 6-month tracking slots
    const targetMonth = monthlyData.find(
      (m) => m.monthIndex === bookingMonth && m.year === bookingYear
    );

    if (targetMonth) {
      targetMonth.revenue += Number(booking.amount || 0); // Safely add the booking amount, defaulting to 0 if undefined
    }
  });

  // Custom tooltips to maintain your minimalist aesthetic
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 text-white p-3 rounded-xl border border-stone-800 text-xs shadow-xl font-sans">
          <p className="font-semibold text-stone-400 mb-0.5">{payload[0].payload.name}</p>
          <p className="font-extrabold text-[#7BBCD9]">
            NPR {payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4">
      <div>
        <h3 className="text-sm font-bold text-content-heading tracking-tight">
          Monthly Revenue Timeline
        </h3>
        <p className="text-xs text-stone-400 mt-0.5">
          Gross earnings generated from completed and pending bookings over the last 6 months.
        </p>
      </div>

      <div className="h-[300px] w-full text-[11px] font-medium font-mono text-stone-400">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              dy={10}
              stroke="#a8a29e"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              dx={-10}
              stroke="#a8a29e"
              tickFormatter={(val) => `Rs.${val >= 1000 ? (val / 1000).toFixed(0) + "k" : val}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f5f5f4", opacity: 0.5 }} />
            <Bar
              dataKey="revenue"
              fill="#7BBCD9"
              radius={[6, 6, 0, 0]}
              maxBarSize={45}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}