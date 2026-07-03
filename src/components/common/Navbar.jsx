import { FiBell, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="h-16 bg-surface-navbar border-b border-stone-200 flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono font-bold bg-stone-100 text-stone-600 px-2.5 py-1 rounded border border-stone-200">
          OPERATIONS_DESK
        </span>
      </div>
      
      {/* Right User Utility Stack */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-stone-400 hover:text-content-heading rounded-lg hover:bg-stone-50 transition-colors relative">
          <FiBell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-orange-500" />
        </button>
        
        <div className="h-8 w-px bg-stone-200 mx-1" />
        
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary font-bold text-sm">
            <FiUser size={16} />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-content-heading leading-tight">Lasata Bjr</p>
            <p className="text-[10px] font-mono text-content-body">System Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}