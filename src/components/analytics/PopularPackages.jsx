import { FiTrendingUp, FiAward } from "react-icons/fi";

export default function PopularPackages({ data }) {
  // Grab the highest booking count to calculate relative percentages for our bar lengths
  const maxBookings = data && data.length > 0 ? data[0].bookingsCount : 1;

  return (
    <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-content-heading tracking-tight">
            Most Popular Packages
          </h3>
          <FiTrendingUp className="text-sky-500" size={16} />
        </div>
        <p className="text-xs text-stone-400 mt-0.5">
          Top-performing itineraries ranked by cumulative customer reservations.
        </p>
      </div>

      <div className="space-y-4 my-2">
        {data.length === 0 ? (
          <div className="text-xs text-stone-400 italic text-center py-8">
            No booking counts logged yet.
          </div>
        ) : (
          data.map((pkg, index) => {
            // Calculate relative scale percentage for UI visual bar width
            const visualPct = Math.max(5, (pkg.bookingsCount / maxBookings) * 100);

            return (
              <div key={pkg.name || index} className="space-y-1.5 group">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 max-w-[70%]">
                    {index === 0 && <FiAward className="text-amber-500 flex-shrink-0" size={14} />}
                    <span className="font-semibold text-stone-700 truncate group-hover:text-sky-600 transition-colors">
                      {pkg.name}
                    </span>
                  </div>
                  <span className="font-mono text-stone-500 font-bold bg-stone-50 px-2 py-0.5 rounded-md border border-stone-100">
                    {pkg.bookingsCount} {pkg.bookingsCount === 1 ? "booking" : "bookings"}
                  </span>
                </div>

                {/* Progress bar scale representation */}
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#7BBCD9] h-full rounded-full transition-all duration-500 group-hover:bg-sky-500"
                    style={{ width: `${visualPct}%` }}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}