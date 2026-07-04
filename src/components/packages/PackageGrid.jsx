import PackageCard from "./PackageCard";
import { FiFolderMinus } from "react-icons/fi";

export default function PackageGrid({ packagesList, onEditClick, onDeleteClick }) {
  // Graceful Handling: Empty Results Search Overlay Fallback
  if (packagesList.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-stone-200 rounded-2xl bg-stone-50/50 mt-4 animate-fade-in">
        <div className="p-4 bg-white rounded-full shadow-sm border border-stone-100 text-stone-400 mb-3">
          <FiFolderMinus size={24} />
        </div>
        <h4 className="text-sm font-bold text-content-heading tracking-tight">No Adventure Packages Found</h4>
        <p className="text-xs text-stone-400 mt-1 max-w-[280px]">
          We couldn't find matches matching those filter constraints. Try adjusting your parameters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 items-stretch mt-4">
      {packagesList.map((pkg) => (
        <PackageCard 
          key={pkg.id} 
          packageData={pkg} 
          onEdit={onEditClick} 
          onDelete={onDeleteClick} 
        />
      ))}
    </div>
  );
}