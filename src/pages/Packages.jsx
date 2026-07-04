
import { useState } from "react";
import { initialPackages } from "../data/packages";
import PackageGrid from "../components/packages/PackageGrid";
import { FiPlus } from "react-icons/fi";

export default function Packages() {
  // Primary Master Data State Pipeline Initialization
  const [packages, setPackages] = useState(initialPackages);

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

      {/* [PLACEHOLDER FOR SEARCH & FILTER MODULE IN PARTS 4 & 5] */}
      <div className="p-4 bg-stone-50 border border-stone-200 text-stone-500 text-xs rounded-xl font-medium font-mono">
        ⏳ SearchBar & Filter Component layout pipelines attach here in the next steps...
      </div>

      {/* Main Grid View Layer */}
      <PackageGrid 
        packagesList={packages} 
        onEditClick={handleEditIntent} 
        onDeleteClick={handleDeleteExecution} 
      />

    </div>
  );
}