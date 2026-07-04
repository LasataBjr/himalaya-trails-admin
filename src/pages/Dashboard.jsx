
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentBookings from "../components/dashboard/RecentBookings";

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
      
      {/*Dashboard Splitted Layout Workspace Gri */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Recent Bookings Table takes 2 columns out of 3 */}
        <div className="lg:col-span-2">
          <RecentBookings />
        </div>
        
        {/* Right Side: Placeholder for Part 3 UpcomingTours */}
        <div className="bg-white h-64 border border-dashed border-stone-300 rounded-2xl p-6 flex items-center justify-center text-xs font-mono text-stone-400 opacity-40">
          [Upcoming: UpcomingTours Stack Panel Node]
        </div>
      </div>
    </div>
  );
}