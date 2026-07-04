
import { FiCalendar, FiUserCheck } from "react-icons/fi";

import { upcomingTours } from "../../data/upcomingTours";

export default function UpcomingTours() {
  // Style dictionary mapping dynamic occupancy priority status
  const badgeStyles = {
    "Filling Fast": "bg-orange-50 text-orange-700 border-orange-200/60",
    "Open": "bg-teal-50 text-teal-700 border-teal-200/60",
    "Sold Out": "bg-stone-100 text-stone-500 border-stone-200",
  };

  return (
    <div className="bg-surface-card border border-stone-200 rounded-2xl shadow-sm p-6 flex flex-col h-full">
      {/* Panel Structural Branding Header */}
      <div className="mb-5">
        <h3 className="text-base font-bold text-content-heading tracking-tight">
          Upcoming Tours
        </h3>
        <p className="text-[11px] text-content-body mt-0.5">
          Confirmed departure blocks slated for launch next.
        </p>
      </div>

      {/* Main Core Stack Array Loop Box */}
      <div className="space-y-3 flex-1 overflow-y-auto">
        {upcomingTours.map((tour) => (
          <div 
            key={tour.id} 
            className="p-4 border border-stone-100 rounded-xl bg-stone-50/40 hover:bg-stone-50 transition-colors flex flex-col gap-2.5"
          >
            {/* Upper Info Row */}
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-xs font-bold text-content-heading tracking-wide">
                {tour.title}
              </h4>
              <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${badgeStyles[tour.status] || "bg-stone-50"}`}>
                {tour.status}
              </span>
            </div>

            {/* Lower Meta Block Row */}
            <div className="flex items-center gap-4 text-[11px] font-mono font-medium text-stone-400">
              <div className="flex items-center gap-1.5">
                <FiCalendar size={13} className="text-stone-400" />
                <span>{tour.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiUserCheck size={13} className="text-stone-400" />
                <span>
                  {tour.slotsLeft === 0 ? "Fully Booked" : `${tour.slotsLeft} slots open`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}