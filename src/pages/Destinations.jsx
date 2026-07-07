import { useTravel } from "../hooks/useTravel";
import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

import DestinationGrid from "../components/destinations/DestinationGrid";
import DestinationFilters from "../components/destinations/DestinationFilters";
import DestinationForm from "../components/destinations/DestinationForm";

export default function Destinations() {
  const { destinations, addDestination, updateDestination, deleteDestination } = useTravel();

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [editingDestination, setEditingDestination] = useState(null);

  //Filter State
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");

  // Generate unique filter options from the destinations data
  const regions = [...new Set(destinations.map((d) => d.region))]; // Later if  added more regions, this will automatically update the filter options
  const provinces = [...new Set(destinations.map((d) => d.province))];

  
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion =
      regionFilter === "" ||
      destination.region === regionFilter;

    const matchesProvince =
      provinceFilter === "" ||
      destination.province === provinceFilter;

    const matchesDifficulty =
      difficultyFilter === "" ||
      destination.difficulty === difficultyFilter;

    return ( matchesSearch && matchesRegion && matchesProvince && matchesDifficulty );
  });

  // Safe deletion routine
  const handleDeleteDestination = (id) => {
    if (window.confirm("Are you certain you want to remove this travel destination option?")) {
      deleteDestination(id);
    }
  };

  // Open modal in edit context
  const handleEditInitiate = (destination) => {
    setEditingDestination(destination);
    setIsFormOpen(true);
  };

  // Reset parameters safely upon dismissal
  const handleCloseModal = () => {
    setIsFormOpen(false);
    setEditingDestination(null);
  };

  // Handle both Add and Edit payload processing
  const handleSaveDestination = (savedPayload) => {
    if (editingDestination) {
      // Edit Mode: Update existing destination in the list
      updateDestination(savedPayload);
    } else {
      // Add Mode: Prepend new destination to the list
      addDestination(savedPayload);
    }    
    handleCloseModal();
  };

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-content-heading">
            Destinations
          </h1>
          <p className="mt-1 text-sm text-content-body">
            Manage Nepal travel destinations available across the agency.
          </p>
        </div>

        {/* Action button to open empty form modal */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-xs font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 transition-colors shadow-sm self-start sm:self-center"
        >
          <FiPlus size={14} />
          Add Destination
        </button>
      </div>

      <DestinationFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        provinceFilter={provinceFilter}
        setProvinceFilter={setProvinceFilter}
        difficultyFilter={difficultyFilter}
        setDifficultyFilter={setDifficultyFilter}
        regions={regions}
        provinces={provinces}
      />

      <DestinationGrid
        destinations={filteredDestinations}
        onEdit={handleEditInitiate}
        onDelete={handleDeleteDestination}
      />

      <DestinationForm
        isOpen={isFormOpen}
        onClose={handleCloseModal}
        onSave={handleSaveDestination}
        editingDestination={editingDestination}
      />

    </div>
  );
}