import { useTravel } from "../hooks/useTravel";
import { useState } from "react";
import DestinationGrid from "../components/destinations/DestinationGrid";
import DestinationFilters from "../components/destinations/DestinationFilters";

export default function Destinations() {
  const { destinations } = useTravel();

  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");

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

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto pb-12">

      <div>
        <h1 className="text-2xl font-bold text-content-heading">
          Destinations
        </h1>

        <p className="mt-1 text-sm text-content-body">
          Manage Nepal travel destinations available across the agency.
        </p>
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
        onEdit={(destination) =>
          console.log("Edit:", destination)
        }
        onDelete={(id) =>
          console.log("Delete:", id)
        }
      />

    </div>
  );
}