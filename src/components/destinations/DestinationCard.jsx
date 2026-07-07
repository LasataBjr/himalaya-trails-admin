import { FiMapPin, FiClock, FiTrendingUp, FiEdit2, FiTrash2 } from "react-icons/fi";

function DestinationCard({ destination, onEdit, onDelete })
{
    
  const difficultyColors = {
    Easy: "bg-emerald-100 text-emerald-700",
    Medium: "bg-amber-100 text-amber-700",
    Hard: "bg-rose-100 text-rose-700",
  };
    
//     const getDifficultyColor = (level) => {
//     switch (level?.toLowerCase()) {
//       case "easy": return "bg-emerald-50 text-emerald-700 border-emerald-200";
//       case "medium": return "bg-amber-50 text-amber-700 border-amber-200";
//       case "hard": return "bg-rose-50 text-rose-700 border-rose-200";
//       default: return "bg-stone-50 text-stone-600 border-stone-200";
//     }
//   };    

  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Hero Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Featured Badge */}
        {destination.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white shadow">
            Featured
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="space-y-4 p-5">

        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-content-heading">
            {destination.name}
          </h3>

          <p className="mt-1 flex items-center gap-1 text-sm text-content-body">
            <FiMapPin size={14} />
            {destination.region}, {destination.province}
          </p>
        </div>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-content-body">
          {destination.description}
        </p>

        {/* Information */}
        <div className="grid grid-cols-2 gap-3">

          <div className="rounded-xl bg-stone-50 p-3">
            <p className="text-xs text-stone-500">Duration</p>

            <div className="mt-1 flex items-center gap-2">
              <FiClock size={15} />
              <span className="font-semibold">
                {destination.duration} Days
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-stone-50 p-3">
            <p className="text-xs text-stone-500">Altitude</p>

            <div className="mt-1 flex items-center gap-2">
              <FiTrendingUp size={15} />
              <span className="font-semibold">
                {destination.altitude} m
              </span>
            </div>
          </div>

        </div>

        {/* Difficulty */}
        <div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              difficultyColors[destination.difficulty]
            }`}
          >
            {destination.difficulty}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-stone-100 pt-4">

          <button
            onClick={() => onEdit(destination)}
            className="rounded-lg border border-stone-200 p-2 text-stone-600 transition hover:bg-sky-50 hover:text-sky-600"
          >
            <FiEdit2 size={16} />
          </button>

          <button
            onClick={() => onDelete(destination.id)}
            className="rounded-lg border border-stone-200 p-2 text-stone-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <FiTrash2 size={16} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;