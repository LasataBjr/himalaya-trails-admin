import { FiDollarSign } from "react-icons/fi";

export default function RevenueTable({ data }) {
  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4">
      <div>
        <h3 className="text-sm font-bold text-content-heading tracking-tight">
          Package Revenue Performance Grid
        </h3>
        <p className="text-xs text-stone-400 mt-0.5">
          Detailed financial audit showing individual volume counts and gross monetary yield.
        </p>
      </div>

      <div className="overflow-x-auto border border-stone-100 rounded-xl">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-100 text-[10px] uppercase font-bold tracking-wider text-stone-400">
              <th className="p-4">Package Identity</th>
              <th className="p-4 text-center">Bookings Count</th>
              <th className="p-4 text-right">Gross Generated Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 font-medium text-stone-600">
            {data.length === 0 ? (
              <tr>
                <td colSpan="3" className="p-8 text-center text-stone-400 italic">
                  No active tracking history recorded.
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={item.name || index} className="hover:bg-stone-50/50 transition-colors">
                  <td className="p-4 font-semibold text-content-heading">
                    {item.name}
                  </td>
                  <td className="p-4 text-center font-mono">
                    {item.bookingsCount}
                  </td>
                  <td className="p-4 text-right font-mono font-bold text-emerald-600">
                    NPR {item.revenue.toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}