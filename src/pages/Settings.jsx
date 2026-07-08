import { useState, useEffect } from "react";

export default function Settings() {
  // 1. Initial State Definition with LocalStorage Fallbacks
  const [agencyInfo, setAgencyInfo] = useState(() => {
    const saved = localStorage.getItem("agency_settings");
    return saved ? JSON.parse(saved) : {
      name: "Nepal Exploration Travel",
      email: "info@nepalexploration.com",
      phone: "+977-1-4412345",
      website: "www.nepalexploration.com",
      address: "Thamel, Kathmandu, Nepal",
      logoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=150&auto=format&fit=crop",
      primaryColor: "#7BBCD9", // Your signature aesthetic palette tone
      currency: "NPR (Rs.)",
      language: "English",
      dateFormat: "DD/MM/YYYY",
      emailNotifications: true,
      bookingAlerts: true,
      marketingEmails: false,
      sidebarDefault: "expanded",
      cardsPerRow: "3"
    };
  });

  const [isSaved, setIsSaved] = useState(false);

  // 2. Multi-Field Input Handler Engine
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAgencyInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // 3. Simple State Commitment Handler
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("agency_settings", JSON.stringify(agencyInfo));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Alert banner automatically fades
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      
      {/* Page Header Layout Container */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-content-heading">Settings</h1>
          <p className="mt-1 text-sm text-content-body">
            Manage application preferences and business information.
          </p>
        </div>
        
        {isSaved && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-4 py-2 rounded-xl animate-fade-in">
            Configuration preferences updated successfully!
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Agency Identity Profile */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-content-heading tracking-tight border-b border-stone-50 pb-2">
              Agency Profile Information
            </h2>
            
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Agency Legal Name</label>
              <input type="text" name="name" value={agencyInfo.name} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-sky-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Public Contact Email</label>
                <input type="email" name="email" value={agencyInfo.email} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-sky-500" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Hotline Number</label>
                <input type="text" name="phone" value={agencyInfo.phone} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-sky-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Official Website Domain</label>
                <input type="text" name="website" value={agencyInfo.website} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-sky-500" />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Physical Headquarters Address</label>
                <input type="text" name="address" value={agencyInfo.address} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-sky-500" />
              </div>
            </div>
          </div>

          {/* System & Global Localization Preferences */}
          <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-content-heading tracking-tight border-b border-stone-50 pb-2">
              System Preferences & Localization
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Active Currency</label>
                <select name="currency" value={agencyInfo.currency} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:border-sky-500">
                  <option value="NPR (Rs.)">NPR (Rs.)</option>
                  <option value="USD ($)">USD ($)</option>
                  <option value="EUR (€)">EUR (€)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">System Language</label>
                <select name="language" value={agencyInfo.language} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:border-sky-500">
                  <option value="English">English</option>
                  <option value="Nepali">Nepali</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Date Formatting</label>
                <select name="dateFormat" value={agencyInfo.dateFormat} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:border-sky-500">
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Branding, Displays & Alerts Toggle Blocks */}
        <div className="space-y-6">
          
          {/* Visual Identity Profile Panel */}
          <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-content-heading tracking-tight border-b border-stone-50 pb-2">
              Branding & Visual Identity
            </h2>
            
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Logo Assets Link URL</label>
              <input type="url" name="logoUrl" value={agencyInfo.logoUrl} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-sky-500" />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400 block">Theme Primary Branding Tone</label>
              <div className="flex items-center gap-3">
                {/* Predefined aesthetic system colors grid */}
                {["#7BBCD9", "#0ea5e9", "#6366f1", "#f43f5e", "#10b981"].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setAgencyInfo(p => ({ ...p, primaryColor: color }))}
                    style={{ backgroundColor: color }}
                    className={`h-6 w-6 rounded-full border-2 transition-transform cursor-pointer ${agencyInfo.primaryColor === color ? 'border-stone-900 scale-110' : 'border-transparent'}`}
                  />
                ))}
                <span className="text-xs text-stone-500 font-mono tracking-wider ml-1">{agencyInfo.primaryColor}</span>
              </div>
            </div>
          </div>

          {/* Real-time Push Status Flags panel */}
          <div className="bg-white border border-stone-200 shadow-sm rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-bold text-content-heading tracking-tight border-b border-stone-50 pb-2">
              Notification Routing Rules
            </h2>

            <div className="space-y-3 pt-1">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" name="emailNotifications" checked={agencyInfo.emailNotifications} onChange={handleChange} className="h-4 w-4 rounded border-stone-300 text-sky-500 focus:ring-transparent" />
                <span className="text-xs font-medium text-stone-600">Disseminate Administrative Emails</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" name="bookingAlerts" checked={agencyInfo.bookingAlerts} onChange={handleChange} className="h-4 w-4 rounded border-stone-300 text-sky-500 focus:ring-transparent" />
                <span className="text-xs font-medium text-stone-600">Flash Real-time Booking Alerts</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input type="checkbox" name="marketingEmails" checked={agencyInfo.marketingEmails} onChange={handleChange} className="h-4 w-4 rounded border-stone-300 text-sky-500 focus:ring-transparent" />
                <span className="text-xs font-medium text-stone-600">Forward Consumer Marketing Digests</span>
              </label>
            </div>
          </div>

          {/* Form Action Dispatch Triggers */}
          <div className="flex items-center gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={() => { if(window.confirm("Discard settings configurations?")) window.location.reload(); }}
              className="w-1/3 py-2 border border-stone-200 text-xs font-bold text-stone-600 rounded-xl bg-white hover:bg-stone-50 transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-2/3 py-2 border border-transparent text-xs font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-600 transition-colors shadow-sm"
            >
              Save Configuration Settings
            </button>
          </div>

        </div>

      </form>
    </div>
  );
}