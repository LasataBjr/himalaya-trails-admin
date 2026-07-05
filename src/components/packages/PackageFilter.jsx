

export default function PackageFilter({
  selectedDestination,
  onDestinationChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedStatus,
  onStatusChange,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:w-auto w-full">
      {/* Destination Filter */}
      <select
        value={selectedDestination}
        onChange={(e) => onDestinationChange(e.target.value)}
        className="px-3 py-2 text-sm border border-stone-200 rounded-lg bg-stone-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer"
      >
        <option value="">Destination </option>
        <option value="Kathmandu">Kathmandu</option>
        <option value="Pokhara">Pokhara</option>
        <option value="Everest Region">Everest Region</option>
        <option value="Annapurna Region">Annapurna Region</option>
        <option value="Chitwan">Chitwan</option>
      </select>

      {/* Difficulty Filter */}
      <select
        value={selectedDifficulty}
        onChange={(e) => onDifficultyChange(e.target.value)}
        className="px-3 py-2 text-sm border border-stone-200 rounded-lg bg-stone-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer"
      >
        <option value="">Difficulty </option>
        <option value="Easy">Easy</option>
        <option value="Moderate">Moderate</option>
        <option value="Difficult">Difficult</option>
      </select>

      {/* Status Filter */}
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="px-3 py-2 text-sm border border-stone-200 rounded-lg bg-stone-50 text-stone-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 cursor-pointer"
      >
        <option value="">Status </option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </div>
  );
}