
import { useState } from "react";
import { initialPackages } from "../data/packages";
import PackageGrid from "../components/packages/PackageGrid";
import { FiPlus } from "react-icons/fi";
import SearchBar from "../components/packages/SearchBar"; 
import PackageFilter from "../components/packages/PackageFilter"; 

export default function Packages() {
  // Primary Master Data State Pipeline Initialization
  const [packages, setPackages] = useState(initialPackages);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filter States
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Interface Wireframe Handlers (We will populate these in Parts 6, 7, & 8)
  const handleAddNewTrigger = () => {
    alert("Form modal will trigger open in Part 6!");
  };

  const handleEditIntent = (targetPackage) => {
    alert(`Editing Intent Captured for: ${targetPackage.title}`);
  };

  const handleDeleteExecution = (targetId) => {
    const confirmation = window.confirm("Are you sure you want to remove this travel package from local state?");
    if (confirmation) {
      // JavaScript filter array method mutation execution
      setPackages(packages.filter((item) => item.id !== targetId));
    }
  };

  // This derives a filtered array on every render pass without destroying our master state data.
  const filteredPackages = packages.filter((pkg) => {
    // 1. Text Search Filter (Case-insensitive title match)
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Dropdown Select Filters (If empty option "" is selected, condition automatically passes)
    const matchesDestination = selectedDestination === "" || pkg.destination === selectedDestination;
    const matchesDifficulty = selectedDifficulty === "" || pkg.difficulty === selectedDifficulty;
    const matchesStatus = selectedStatus === "" || pkg.status === selectedStatus;

    // Item passes through if and only if it satisfies all 4 gates
    return matchesSearch && matchesDestination && matchesDifficulty && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">
      
      {/* Structural Framing Context Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-100 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-content-heading tracking-tight">
            Tour Inventory Subsystem
          </h1>
          <p className="text-xs text-content-body mt-1">
            Configure, deploy, update, and manage travel expedition packages across Nepal.
          </p>
        </div>
        
        {/* Creation Primary Call-to-Action Control button */}
        <button 
          onClick={handleAddNewTrigger}
          className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-xs font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 transition-all shadow-sm shadow-sky-500/10 self-start sm:self-auto"
        >
          <FiPlus size={14} strokeWidth={2.5} />
          <span>Add New Package</span>
        </button>
      </div>

      {/* SEARCH & FILTER MODULE */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center gap-4">
        
        {/* Search Bar Input Node */}
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        {/* Multi-Select Dropdown Node Array */}
        <PackageFilter
          selectedDestination={selectedDestination}
          onDestinationChange={setSelectedDestination}
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
        
      </div>

      {/* Main Grid View Layer */}
      <PackageGrid 
        packagesList={filteredPackages} 
        onEditClick={handleEditIntent} 
        onDeleteClick={handleDeleteExecution} 
      />

    </div>
  );
}