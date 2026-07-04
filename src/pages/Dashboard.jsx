
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentBookings from "../components/dashboard/RecentBookings";
import UpcomingTours from "../components/dashboard/UpcomingTours";

{/* Use Props: When a component is an independent visual shell used multiple times with different data (like a Card, a Button, or an Input Field).
 Import Directly: When a component is a specific structural feature on a page that owns its specific dataset.*/}
 
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
        
        {/* Right Side:  */}
        <div className="lg:col-span-1">
          <UpcomingTours />
        </div>
      </div>
    </div>
  );
}