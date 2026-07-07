function CustomerFilters({
  searchTerm,
  setSearchTerm,
  provinceFilter,
  setProvinceFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center">

      {/* Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search customer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-700 placeholder-stone-400 focus:border-sky-500 focus:bg-white focus:outline-none"
        />
      </div>

      {/* Province */}
      <select
        value={provinceFilter}
        onChange={(e) => setProvinceFilter(e.target.value)}
        className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none"
      >
        <option value="">All Provinces</option>
        <option value="Bagmati">Bagmati</option>
        <option value="Gandaki">Gandaki</option>
        <option value="Lumbini">Lumbini</option>
        <option value="Koshi">Koshi</option>
      </select>

      {/* Status */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-700 focus:border-sky-500 focus:bg-white focus:outline-none"
      >
        <option value="">All Customers</option>
        <option value="Active">Active Travelers</option>
        <option value="Inactive">Inactive Travelers</option>
      </select>

    </div>
  );
}

export default CustomerFilters;