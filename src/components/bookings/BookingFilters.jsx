
function BookingFilters({ 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  packageFilter, 
  setPackageFilter, 
  packages
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl border border-stone-200 shadow-sm">
      
      {/* FILTER CONTROL SEGMENTS */}
      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
        
        {/* Real-time Search Input Field */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search Booking by Customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-800 placeholder-stone-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
          />
        </div>

        {/* Status Filtering Selector Badge Dropdown */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none transition-all"
        >
          <option value="">All Statuses</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        {/* Relational Package Filter Dropdown */}
        <select
          value={packageFilter}
          onChange={(e) => setPackageFilter(e.target.value)}
          className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none transition-all max-w-xs"
        >
          <option value="">All Packages</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.title}
            </option>
          ))}
        </select>
      </div>     

    </div>
  );
}

export default BookingFilters;