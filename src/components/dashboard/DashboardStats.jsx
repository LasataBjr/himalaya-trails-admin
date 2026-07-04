

import { dashboardStats } from "../../data/dashboardStats";

import StatCard from "./StatCard";

function DashboardStats() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.id}
          stat={stat}
        />
      ))}
    </section>
  );
}

export default DashboardStats;