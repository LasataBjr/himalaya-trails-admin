import { useTravel } from "../hooks/useTravel";
import DestinationGrid from "../components/destinations/DestinationGrid";

export default function Destinations() {
  const { destinations } = useTravel();

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

      <DestinationGrid
        destinations={destinations}
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