import DestinationCard from "./DestinationCard";
import { FiMap } from "react-icons/fi";

function DestinationGrid({
  destinations,
  onEdit,
  onDelete,
}) {
  // Empty State
  if (destinations.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 py-16 px-6 text-center">

        <div className="mb-4 rounded-full bg-white p-4 shadow-sm border border-stone-200">
          <FiMap
            size={28}
            className="text-stone-400"
          />
        </div>

        <h3 className="text-lg font-bold text-content-heading">
          No Destinations Found
        </h3>

        <p className="mt-2 max-w-sm text-sm text-content-body">
          We couldn't find any destinations matching your current
          search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default DestinationGrid;