import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Packages from "../pages/Packages";
import Bookings from "../pages/Bookings";
import Customers from "../pages/Customers";
import Destinations from "../pages/Destinations";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Premium Travel Management Shell Wrapper */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Wildcard Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}