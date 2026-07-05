import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

export default function PackageForm({ isOpen, onClose, onSave, editingPackage }) {
  // Unified Form State Object
  const initialFormState = {
    title: "",
    destination: "",
    duration: "",
    difficulty: "Easy",
    price: "",
    status: "Active",
    image: ""
  };

  const [formData, setFormData] = useState(initialFormState);

   // Listens to incoming target data switches
    useEffect(() => {
        if (editingPackage) {
        setFormData(editingPackage); // Load existing card values into the text inputs
        } else {
        setFormData(initialFormState); // Reset to blank inputs if creating brand new data
        }
    }, [editingPackage, isOpen]); // Runs code every single time modal toggles or targets shift
    
  // Universal Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Computed property keys update matching object slot dynamically
    setFormData({
      ...formData,
      [name]: value
    });
  };

  //Form Submit Action Dispatcher
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refreshing
    
    // Quick validation check
    if (!formData.title || !formData.destination || !formData.price) {
      alert("Please fill out Name, Destination, and Price to proceed!");
      return;
    }

    // Assemble form state details into a structured package payload object
    //Keep old structure but preserve ID timestamp when in edit mode
    const newPackage = {
      ...formData,
      id: editingPackage ? editingPackage.id : Date.now(), // Create a unique pseudo ID timestamp
      price: Number(formData.price),
      // Fallback decorative cover image if user leaves it blank
      image: formData.image || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
    };

    onSave(newPackage); // Send packet up to master page state container
    setFormData(initialFormState); // Clear the input boxes back to empty text values
    onClose(); // Snap modal closed safely
  };

  // If layout trigger is explicitly flagged false, hide element wrapper entirely
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white border border-stone-200 shadow-xl rounded-2xl w-full max-w-md overflow-hidden animate-scale-up">
        
        {/* Modal Branding Header */}
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
          <h2 className="text-sm font-bold text-content-heading tracking-tight">
            {editingPackage ? "Edit Travel Package" : "Add New Travel Package"}
          </h2>
          <button onClick={onClose} className="p-1.5 hover:bg-stone-100 text-stone-400 hover:text-stone-600 rounded-lg transition-colors">
            <FiX size={16} />
          </button>
        </div>

        {/* Structured Configuration Input Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Package Name</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., Langtang Valley Expedition" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Destination</label>
              <input type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g., Rasuwa" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Duration</label>
              <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g., 7 Days" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Difficulty</label>
              <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500 cursor-pointer">
                <option value="Easy">Easy</option>
                <option value="Moderate">Moderate</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Price (NPR)</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="e.g., 35000" className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500 cursor-pointer">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] uppercase font-bold tracking-wider text-stone-400">Image Cover URL</label>
            <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="https://images.unsplash.com/..." className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/10 focus:border-sky-500" />
          </div>

          {/* Form Command Triggers */}
          <div className="pt-3 flex items-center justify-end gap-3 border-t border-stone-100">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-stone-200 text-xs font-bold text-stone-600 rounded-xl bg-white hover:bg-stone-50 active:bg-stone-100 transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 border border-transparent text-xs font-bold text-white rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 transition-colors shadow-sm">
              Save Package
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}