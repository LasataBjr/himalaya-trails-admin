// src/components/dashboard/TopDestinations.jsx
import { topDestinations } from "../../data/topDestinations";

export default function TopDestinations() {
  return (
    <div className="bg-surface-card border border-stone-200 rounded-2xl shadow-sm p-6">
      {/* Structural Branding Header */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-content-heading tracking-tight">
          Top Performing Destinations
        </h3>
        <p className="text-[11px] text-content-body mt-0.5">
          Volume distribution and booking capacity capture rates.
        </p>
      </div>

      {/* Grid Stack Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topDestinations.map((dest) => (
          <div key={dest.id} className="p-4 border border-stone-100 rounded-xl bg-stone-50/40 space-y-3">
            {/* Metadata Title Layer */}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-xs font-bold text-content-heading tracking-wide">
                  {dest.name}
                </h4>
                <p className="text-[10px] text-stone-400 font-medium font-mono mt-0.5">
                  {dest.bookings} completed bookings
                </p>
              </div>
              <span className="text-xs font-bold text-content-heading font-mono">
                {dest.revenue}
              </span>
            </div>

            {/* Visual Analytics Progress Track Layer */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold text-stone-500">
                <span>Occupancy Rate</span>
                <span>{dest.fillRate}%</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${dest.fillRate}%` }} 
                /> {/* Progress bar width dynamically set based on fillRate or Inline Target CSS Object Manipulation*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}