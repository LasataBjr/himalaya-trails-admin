// src/pages/Dashboard.jsx
import { FiPlus, FiBriefcase } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentBookings from "../components/dashboard/RecentBookings";
import UpcomingTours from "../components/dashboard/UpcomingTours";
import TopDestinations from "../components/dashboard/topDestinations";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto pb-12">
      
      {/* Header Action Anchor Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-content-heading tracking-tight">
            Good Morning, Admin
          </h1>
          <p className="text-xs text-content-body mt-1">
            System live. Here is your agency operational performance snapshot for today.
          </p>
        </div>
        
        {/* Quick Action Button Control Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/packages")}
            className="inline-flex items-center gap-2 px-4 py-2 border border-stone-200 text-xs font-bold text-stone-600 rounded-xl bg-white hover:bg-stone-50 active:bg-stone-100 transition-all shadow-sm">
            <FiPlus size={14} strokeWidth={2.5} />
            <span>Add Package</span>
          </button>
          <button
            onClick={() => navigate("/bookings")}
            className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-xs font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 transition-all shadow-sm shadow-sky-500/10">
            <FiBriefcase size={14} />
            <span>New Booking</span>
          </button>
        </div>
      </div>

      {/* Macro Metrics Dashboard Statistics Deck Layer */}
      <DashboardStats />
      
      {/* Operational Analytics Split Workspace Segment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Grid Array Node: Recent Reservations Stream */}
        <div className="lg:col-span-2">
          <RecentBookings />
        </div>
        
        {/* Right Grid Array Node: Chronological Upcoming Dispatches */}
        <div className="lg:col-span-1">
          <UpcomingTours />
        </div>
      </div>

      {/* Secondary Analytics Base Anchor Panel */}
      <TopDestinations />

    </div>
  );
}