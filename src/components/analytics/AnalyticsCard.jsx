import { FiDollarSign, FiCalendar, FiUsers, FiMapPin } from "react-icons/fi";

export default function AnalyticsCard({ title, value, type }) {
  // Setup card icon configurations dynamically based on metric context
  const getIconConfig = () => {
    switch (type) {
      case "revenue":
        return {
          icon: <FiDollarSign size={18} className="text-emerald-500" />,
          bg: "bg-emerald-50 border-emerald-100",
        };
      case "bookings":
        return {
          icon: <FiCalendar size={18} className="text-sky-500" />,
          bg: "bg-sky-50 border-sky-100",
        };
      case "customers":
        return {
          icon: <FiUsers size={18} className="text-indigo-500" />,
          bg: "bg-indigo-50 border-indigo-100",
        };
      case "destinations":
        return {
          icon: <FiMapPin size={18} className="text-amber-500" />,
          bg: "bg-amber-50 border-amber-100",
        };
      default:
        return {
          icon: <FiCalendar size={18} className="text-stone-500" />,
          bg: "bg-stone-50 border-stone-100",
        };
    }
  };

  const config = getIconConfig();

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-1">
        <span className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block">
          {title}
        </span>
        <h3 className="text-xl font-extrabold text-content-heading tracking-tight">
          {value}
        </h3>
      </div>

      <div className={`p-3 rounded-xl border ${config.bg} flex items-center justify-center dashboard-icon-wrapper`}>
        {config.icon}
      </div>
    </div>
  );
}