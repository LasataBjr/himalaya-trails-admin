
import { FiClock, FiActivity, FiMapPin, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function PackageCard({ packageData, onEdit, onDelete }) {
  const { title, destination, duration, difficulty, price, status, image } = packageData;

  // Dynamic configuration maps for badges
  const difficultyStyles = {
        Easy: "bg-teal-50 text-teal-700 border-teal-100",
        Moderate: "bg-sky-50 text-sky-700 border-sky-100",
        Hard: "bg-rose-50 text-rose-700 border-rose-100",
    };
    
  const statusStyles = {
        Active: "bg-emerald-100 text-emerald-700",
        Inactive: "bg-red-100 text-red-700",
    };
    
  return (
    <div className="bg-surface-card border border-stone-200 rounded-2xl shadow-sm overflow-hidden flex flex-col group hover:shadow-md hover:border-stone-300 transition-all duration-300">
      
      {/* Visual Header Image Banner */}
      <div className="h-44 w-full bg-stone-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Dynamic Status Pill */}
        <span className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border ${
          statusStyles[status] || "bg-white/95 text-stone-400 border-stone-200"
        }`}>
          {status}
        </span>
      </div>

      {/* Internal Content Data Block */}
      <div className="p-5 flex flex-col flex-1 space-y-4">
        
        {/* Title & Regional Target */}
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
            <FiMapPin size={12} className="text-stone-400" />
            <span>{destination}</span>
          </div>
          <h3 className="text-sm font-bold text-content-heading line-clamp-1 tracking-tight group-hover:text-sky-600 transition-colors">
            {title}
          </h3>
        </div>

        {/* Technical Specification Matrix */}
        <div className="flex items-center gap-3 text-xs font-medium text-stone-500">
          <div className="flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-100">
            <FiClock className="text-stone-400" size={13} />
            <span>{duration}</span>
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${difficultyStyles[difficulty] || "bg-stone-50"}`}>
            <FiActivity size={13} />
            <span>{difficulty}</span>
          </div>
        </div>

        {/* Pricing & Control Hub Segment Split */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div>
            <p className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Total Rate</p>
            <p className="text-sm font-black text-content-heading font-mono">
              NPR {price.toLocaleString()}
            </p>
          </div>

          {/* Operational Action Button Utilities */}
          <div className="flex items-center gap-1.5">
            <button 
              onClick={() => onEdit(packageData)}
              className="p-2 text-stone-500 hover:text-sky-600 hover:bg-sky-50 rounded-xl border border-transparent hover:border-sky-100 transition-all"
              title="Edit Package Details"
            >
              <FiEdit2 size={14} />
            </button>
            <button 
              onClick={() => onDelete(packageData.id)}
              className="p-2 text-stone-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-transparent hover:border-rose-100 transition-all"
              title="Delete Package From State"
            >
              <FiTrash2 size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}