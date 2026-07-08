import { FiTrendingUp, FiTrendingDown, FiDollarSign, FiUsers } from "react-icons/fi";

export default function StatisticCards({ bookings, packages }) {
  // Calculate valid non-cancelled bookings
  const validBookings = bookings.filter((b) => b.status !== "Cancelled");
  
  // Compute Average Booking Value
  const totalRevenue = validBookings.reduce((sum, b) => sum + Number(b.amount || 0), 0); // Safely sum amounts, defaulting to 0 if undefined
  const avgBookingValue = validBookings.length > 0 ? totalRevenue / validBookings.length : 0;

  // Extract High / Low values using Math primitives
  const packagePrices = packages.map((p) => Number(p.price || 0));
  const highestPrice = packagePrices.length > 0 ? Math.max(...packagePrices) : 0;
  const lowestPrice = packagePrices.length > 0 ? Math.min(...packagePrices) : 0;

  // Compute Average Travelers per reserving party
  const totalTravelers = validBookings.reduce((sum, b) => sum + Number(b.guests || b.travelers || 1), 0);
  const avgTravelers = validBookings.length > 0 ? totalTravelers / validBookings.length : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Average Booking Value */}
      <div className="bg-stone-50/60 border border-stone-200 rounded-xl p-4 flex items-center gap-4">
        <div className="p-2.5 bg-sky-50 text-sky-500 rounded-lg border border-sky-100">
          <FiDollarSign size={16} />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Avg Booking Value</span>
          <span className="text-sm font-bold text-content-heading font-mono">NPR {avgBookingValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
      </div>

      {/* Highest Package Price */}
      <div className="bg-stone-50/60 border border-stone-200 rounded-xl p-4 flex items-center gap-4">
        <div className="p-2.5 bg-emerald-50 text-emerald-500 rounded-lg border border-emerald-100">
          <FiTrendingUp size={16} />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Highest Package Cost</span>
          <span className="text-sm font-bold text-content-heading font-mono">NPR {highestPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Lowest Package Price */}
      <div className="bg-stone-50/60 border border-stone-200 rounded-xl p-4 flex items-center gap-4">
        <div className="p-2.5 bg-rose-50 text-rose-50 rounded-lg border border-rose-100">
          <FiTrendingDown size={16} className="text-rose-500" />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Lowest Package Cost</span>
          <span className="text-sm font-bold text-content-heading font-mono">NPR {lowestPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Average Travelers count */}
      <div className="bg-stone-50/60 border border-stone-200 rounded-xl p-4 flex items-center gap-4">
        <div className="p-2.5 bg-indigo-50 text-indigo-500 rounded-lg border border-indigo-100">
          <FiUsers size={16} />
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Avg Group Size</span>
          <span className="text-sm font-bold text-content-heading font-mono">{avgTravelers.toFixed(1)} Travelers</span>
        </div>
      </div>
    </div>
  );
}