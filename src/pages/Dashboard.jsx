// src/pages/Dashboard.jsx
import DashboardStats from "../components/dashboard/DashboardStats";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Dashboard Greetings Header Anchor */}
      <div>
        <h1 className="text-2xl font-bold text-content-heading tracking-tight">
          Good Morning, Admin
        </h1>
        <p className="text-xs text-content-body mt-1">
          Here is your agency overview performance snapshot for today.
        </p>
      </div>

      {/* Render Statistics Grid Deck */}
      <DashboardStats />
      
      {/* Placeholder slots for Part 2 and Part 3 layout widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-40 pointer-events-none">
        <div className="lg:col-span-2 bg-white h-64 border border-dashed border-stone-300 rounded-2xl p-6 flex items-center justify-center text-xs font-mono text-stone-400">
          [Upcoming: RecentBookings Table Workspace Node]
        </div>
        <div className="bg-white h-64 border border-dashed border-stone-300 rounded-2xl p-6 flex items-center justify-center text-xs font-mono text-stone-400">
          [Upcoming: UpcomingTours Stack Panel Node]
        </div>
      </div>
    </div>
  );
}