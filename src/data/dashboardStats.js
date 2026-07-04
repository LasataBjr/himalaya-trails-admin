// src/data/dashboardStats.js
import { FiLayers, FiCheckSquare, FiUsers, FiDollarSign } from "react-icons/fi";

export const dashboardStats = [
  {
    id: 1,
    title: "Total Packages",
    value: 48,
    change: "+6 this month",
    icon: FiLayers,
    color: "amber",
  },
  {
    id: 2,
    title: "Active Bookings",
    value: 126,
    change: "+12 this week",
    icon: FiCheckSquare,
    color: "teal",
  },
  {
    id: 3,
    title: "Customers",
    value: 342,
    change: "+24 new",
    icon: FiUsers,
    color: "sky",
  },
  {
    id: 4,
    title: "Revenue",
    value: "NPR 8.2M",
    change: "+14% vs last month",
    icon: FiDollarSign,
    color: "emerald",
  },
];