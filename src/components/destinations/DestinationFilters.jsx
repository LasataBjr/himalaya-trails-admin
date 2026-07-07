

function DestinationFilters({
  searchTerm,
  setSearchTerm,
  regionFilter,
  setRegionFilter,
  provinceFilter,
  setProvinceFilter,
  difficultyFilter,
  setDifficultyFilter,
  regions,
  provinces,
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row">

        {/* Search */}
        <input
          type="text"
          placeholder="Search destination..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
        />

        {/* Region */}
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
        >
          <option value="">All Regions</option>

          {regions.map((region) => (
            <option
              key={region}
              value={region}
            >
              {region}
            </option>
          ))}
        </select>

        {/* Province */}
        <select
          value={provinceFilter}
          onChange={(e) => setProvinceFilter(e.target.value)}
          className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
        >
          <option value="">All Provinces</option>

          {provinces.map((province) => (
            <option
              key={province}
              value={province}
            >
              {province}
            </option>
          ))}
        </select>

        {/* Difficulty */}
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm focus:border-sky-500 focus:bg-white focus:outline-none"
        >
          <option value="">All Difficulty</option>

          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

      </div>
    </div>
  );
}

export default DestinationFilters;