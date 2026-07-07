import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

export default function DestinationForm({ isOpen, onClose, onSave, editingDestination }) {
  // Unified Form State Object
  const initialFormState = {
    name: "",
    region: "",
    province: "Bagmati",
    duration: "",
    altitude: "",
    difficulty: "Medium",
    image: "",
    shortDescription: "",
    featured: false
  };

  const [formData, setFormData] = useState(initialFormState);

  // Listens to incoming target data switches
  useEffect(() => {
    if (editingDestination) {
      setFormData(editingDestination); // Load existing card values into the form inputs
    } else {
      setFormData(initialFormState); // Reset to blank inputs if creating brand new data
    }
  }, [editingDestination, isOpen]); // Runs code every single time modal toggles or targets shift

  // Universal Input Change Handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Computed property keys update matching object slot dynamically, handling checkboxes
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Form Submit Action Dispatcher
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refreshing

    // Quick validation check
    if (!formData.name || !formData.region || !formData.duration || !formData.altitude) {
      alert("Please fill out Name, Region, Duration, and Altitude to proceed!");
      return;
    }

    // Helper to generate a URL slug safely (e.g., "Mardi Himal" -> "mardi-himal")
    const generatedSlug = formData.name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    // Assemble form state details into a structured destination payload object
    const newDestination = {
      ...formData,
      id: editingDestination ? editingDestination.id : Date.now(), // Preserve ID timestamp if editing
      slug: editingDestination ? editingDestination.slug : generatedSlug,
      duration: Number(formData.duration),
      altitude: Number(formData.altitude),
      // Fallback decorative cover image if user leaves it blank
      image: formData.image || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
    };

    onSave(newDestination); // Send packet up to master page state container
    setFormData(initialFormState); // Clear the input boxes back to empty values
    onClose(); // Snap modal closed safely
  };

  // If layout trigger is explicitly flagged false, hide element wrapper entirely
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white border border-stone-200 shadow-xl rounded-2xl w-full max-w-md overflow-hidden animate-scale-up max-h-[90vh] overflow-y-auto">
        
        {/* Modal Branding Header */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <h2 className="text-sm font-bold text-content-heading tracking-tight">
            {editingDestination ? "Edit Destination Profile" : "Add New Exploration Destination"}
          </h2>
          <button onClick={onClose} className="p-1.5 hover:bg-stone-100 text-stone-400 hover:text-stone-600 rounded-lg transition-colors">
            <FiX size={16} />
          </button>
        </div>

        {/* Structured Configuration Input Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Destination Name */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Destination Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Annapurna Base Camp" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
          </div>

          {/* Region and Province Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Region / Range</label>
              <input type="text" name="region" value={formData.region} onChange={handleChange} placeholder="e.g., Khumbu" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Province</label>
              <select name="province" value={formData.province} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500 cursor-pointer">
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpashchim">Sudurpashchim</option>
              </select>
            </div>
          </div>

          {/* Duration, Altitude, and Difficulty Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Duration (Days)</label>
              <input type="number" min="1" name="duration" value={formData.duration} onChange={handleChange} placeholder="12" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Altitude (m)</label>
              <input type="number" min="0" name="altitude" value={formData.altitude} onChange={handleChange} placeholder="5364" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Difficulty</label>
              <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500 cursor-pointer">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Image Cover URL */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Hero Cover Image URL</label>
            <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://images.unsplash.com/..." className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
          </div>

          {/* Short Description */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Short Catalog Summary</label>
            <textarea rows="3" maxLength="200" name="shortDescription" value={formData.shortDescription} onChange={handleChange} placeholder="Provide a brief introductory snippet for the card overview..." className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500 resize-none" />
          </div>

          {/* Featured Status Checkbox Toggle */}
          <div className="flex items-center gap-2.5 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
            <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="h-3.5 w-3.5 rounded border-stone-300 text-sky-500 focus:ring-sky-500/20 cursor-pointer" />
            <label htmlFor="featured" className="text-xs font-semibold text-stone-600 cursor-pointer select-none">
              Feature this destination on dashboard elements
            </label>
          </div>

          {/* Form Command Triggers */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-stone-100">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-stone-200 text-xs font-bold text-stone-600 rounded-xl bg-white hover:bg-stone-50 active:bg-stone-100 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 border border-transparent text-xs font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 transition-colors shadow-sm">
              Save Destination
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}