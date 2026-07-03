import { NavLink } from "react-router-dom";
import { 
  FiCompass, 
  FiLayers, 
  FiBookOpen, 
  FiUsers, 
  FiMapPin, 
  FiBarChart2, 
  FiSettings 
} from "react-icons/fi";

import { GiMountains } from "react-icons/gi";

export default function Sidebar() {
  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FiCompass size={18} /> },
    { path: "/packages", label: "Packages", icon: <FiLayers size={18} /> },
    { path: "/bookings", label: "Bookings", icon: <FiBookOpen size={18} /> },
    { path: "/customers", label: "Customers", icon: <FiUsers size={18} /> },
    { path: "/destinations", label: "Destinations", icon: <FiMapPin size={18} /> },
    { path: "/analytics", label: "Analytics", icon: <FiBarChart2 size={18} /> },
    { path: "/settings", label: "Settings", icon: <FiSettings size={18} /> },
  ];

  return (
    <aside className="w-64 bg-surface-sidebar text-stone-300 flex flex-col h-full border-r border-stone-800 shrink-0">
      {/* Brand Header Box */}
      <div className="h-16 flex items-center px-6 gap-3 border-b border-stone-800/60 shrink-0">
         <GiMountains className="text-2xl text-white-800" />
        <h1 className="text-md font-bold text-white tracking-wide ">Himalaya Trails</h1>
      </div>

      {/* Navigation Links Column */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all relative group
              ${isActive 
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/10 font-semibold" 
                : "hover:bg-stone-800/50 hover:text-stone-100"
              }
            `}
          >
            {({ isActive }) => (
              <>
                {/* Small Left Indicator Active Pill */}
                {isActive && (
                  <span className="absolute left-0 top-1/3 bottom-1/3 w-1 bg-white rounded-r-md" />
                )}
                <span className={isActive ? "text-white" : "text-brand-secondary group-hover:text-teal-400 transition-colors"}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* System Status Footer Label */}
      <div className="p-4 border-t border-stone-800/60 bg-stone-950/20 font-mono text-[10px] text-stone-500 tracking-wider flex justify-between items-center">
        <span>CONSOLE // V2.0.26</span>
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
    </aside>
  );
}