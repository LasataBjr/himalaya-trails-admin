
import { useState, useEffect } from "react";
import { useTravel } from "../components/hooks/useTravel";
import PackageGrid from "../components/packages/PackageGrid";
import { FiPlus } from "react-icons/fi";
import SearchBar from "../components/packages/SearchBar"; 
import PackageFilter from "../components/packages/PackageFilter"; 
import PackageForm from "../components/packages/PackageForm";


export default function Packages() {

  // Consume global state data and actions from TravelContext
  const { packages, addPackage, updatePackage, deletePackage } = useTravel();

  // Modal visibility overlay anchor state
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Tracking state for Edit Mode
  const [editingPackage, setEditingPackage] = useState(null);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Filter States
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Populate the form with new package data and update the master state
  const handleAddNewTrigger = () => {
    setIsFormOpen(true);
  };

  // APPEND HANDLER ENGINE: Spread Operator insertion pipeline
  // const handleSaveNewPackage = (freshPackage) => {
  //   setPackages([...packages, freshPackage]); 
  // };

  //Edit the clicked package
  const handleEditIntent = (targetPackage) => {
    setEditingPackage(targetPackage); // Store the object we want to modify
    setIsFormOpen(true);              // Open up the exact same form modal!
  };

  // Handle edit update submission and update the master state
  // const handleUpdatePackage = (updatedPackage) => {
  //   setPackages(
  //     packages.map((pkg) => (pkg.id === updatedPackage.id ? updatedPackage : pkg))
  //   );
  //   setEditingPackage(null); // Clear out edit state mode memory
  // };

  const handleDeleteExecution = (targetId) => {
    const confirmation = window.confirm("Are you sure you want to remove this travel package from local state?");
    if (confirmation) {
      // JavaScript filter array method mutation execution
      // setPackages(packages.filter((item) => item.id !== targetId));

      // Call your global delete context action directly
      deletePackage(targetId);
    }
    // Safety check: if you delete the item you are currently editing, cancel edit mode
    if (editingPackage?.id === targetId) {
      setEditingPackage(null);
    }
  };

  // This derives a filtered array on every render pass without destroying our master state data.
  const filteredPackages = packages.filter((pkg) => {
    // Text Search Filter (Case-insensitive title match)
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());

    // Dropdown Select Filters (If empty option "" is selected, condition automatically passes)
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

      {/* ATTACH THE BACKDROP OVERLAY ELEMENT LAYER */}
      <PackageForm 
        isOpen={isFormOpen}
        
        // Clean close handles resetting both triggers safely
          onClose={() => {
            setIsFormOpen(false);
            setEditingPackage(null);
          }} 
        
        // If editingPackage is active, send it to update engine. If null, append a new package!
        // onSave={editingPackage ? handleUpdatePackage : handleSaveNewPackage} 

        // Point directly to your context update and add functions!
        onSave={(formData) => {
          if (editingPackage) {
            updatePackage(formData);
          } else {
            addPackage(formData);
          }
          setIsFormOpen(false);
          setEditingPackage(null);
        }}
        
        // Pass down the current selection data slot
        editingPackage={editingPackage} 
      />

    </div>
  );
}