

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search Package..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} //Controlled Component Pattern: Update state on input change
        className="w-full px-4 py-2 text-sm border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
      />
    </div>
  );
}