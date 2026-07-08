import { useTravel } from "../hooks/useTravel";

// Component Structural Imports
import AnalyticsCard from "../components/analytics/AnalyticsCard";
import RevenueChart from "../components/analytics/RevenueChart";
import BookingStatusChart from "../components/analytics/BookingStatusChart";
import PopularPackages from "../components/analytics/PopularPackages";
import DestinationStats from "../components/analytics/DestinationStats";
import RevenueTable from "../components/analytics/RevenueTable";
import StatisticCards from "../components/analytics/StatisticCards";

export default function Analytics() {
  const { bookings, packages, customers, destinations } = useTravel();

  // GLOBAL DERIVED STATE CALCULATIONS  
  //  Core Revenue Calculation (Bypassing Cancelled Bookings)
  const totalRevenue = bookings
    .filter((b) => b.status !== "Cancelled")
    .reduce((sum, b) => sum + Number(b.amount || 0), 0);

  // Popular Packages & Revenue Data Transform (Sorted Largest to Smallest)
  const calculatedPackageMetrics = packages.map((pkg) => {
    const matchingBookings = bookings.filter((b) => b.packageId === pkg.id);
    const revenueSum = matchingBookings
      .filter((b) => b.status !== "Cancelled")
      .reduce((sum, b) => sum + Number(b.amount || 0), 0);

    return {
      name: pkg.title || pkg.name,
      bookingsCount: matchingBookings.length,
      revenue: revenueSum,
    };
  }).sort((a, b) => b.bookingsCount - a.bookingsCount);

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      
      {/* Analytics Main Page Branding Header */}
      <div>
        <h1 className="text-2xl font-bold text-content-heading">Analytics Insights</h1>
        <p className="text-sm text-content-body mt-1">
          Manage business insights and travel performance across Nepal agency hubs.
        </p>
      </div>

      {/* Dynamic Metric Snapshot KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard 
          title="Total Gross Revenue" 
          value={`NPR ${totalRevenue.toLocaleString()}`} 
          type="revenue" 
        />
        <AnalyticsCard 
          title="Total Bookings Logged" 
          value={bookings.length} 
          type="bookings" 
        />
        <AnalyticsCard 
          title="Active Consumers" 
          value={customers.length} 
          type="customers" 
        />
        <AnalyticsCard 
          title="Exploration Destinations" 
          value={destinations.length} 
          type="destinations" 
        />
      </div>

      {/* Visual Analytics Timelines & Split Chart Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart bookings={bookings} />
        </div>
        <div className="h-full">
          <BookingStatusChart bookings={bookings} />
        </div>
      </div>

      {/* Volume Leaderboard Metrics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PopularPackages data={calculatedPackageMetrics.slice(0, 5)} />
        <DestinationStats bookings={bookings} destinations={destinations} packages={packages} />
      </div>

      {/* Micro Metric Performance Indicators */}
      <StatisticCards bookings={bookings} packages={packages} />

      {/* Individual Financial Line-Item Audit Grid */}
      <RevenueTable data={calculatedPackageMetrics} />

    </div>
  );
}