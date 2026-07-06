
import { createContext, useState, useEffect } from "react";
import { initialPackages } from "../../data/packages"; // Your fallback dummy items
import { initialBookings } from "../../data/bookings";

// Create a context for travel packages
export const TravelContext = createContext();


export function TravelProvider({ children }) {
  // Read from LocalStorage or fall back to dummy array on initial startup
  const [packages, setPackages] = useState(() => {
      const saved = localStorage.getItem("travel_packages"); // Retrieve from localStorage if available
      // If found, convert the string back to a JS array; if not, default to the initialPackages array
    return saved ? JSON.parse(saved) : initialPackages;
  });

  // Automatically track changes to packages array and update browser storage
  useEffect(() => {
    localStorage.setItem("travel_packages", JSON.stringify(packages)); 
  }, [packages]);

    // Add a new package to the list
  const addPackage = (newPackage) => {
    setPackages((prev) => [...prev, newPackage]);
    };
    
    // Update an existing package in the list
  const updatePackage = (updatedPackage) => {
    setPackages((prev) =>
      prev.map((pkg) => (pkg.id === updatedPackage.id ? updatedPackage : pkg))
      );
      
   };

    // Delete a package from the list
  const deletePackage = (id) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  // --- BOOKINGS STATE ENGINE ---
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("travel_bookings");
    return savedBookings ? JSON.parse(savedBookings) : initialBookings; // Fallback to your 3 dummy bookings
  });

  // Keep bookings synced across browser memory reloads too
  useEffect(() => {
    localStorage.setItem("travel_bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (newBooking) => {
    setBookings((prev) => [...prev, newBooking]);
  };

  const updateBooking = (updatedBooking) => {
    setBookings((prev) =>
      prev.map((item) => (item.id === updatedBooking.id ? updatedBooking : item))
    );
  };

  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((item) => item.id !== id));
  };

    return (
    // Provide the context value to children components
    <TravelContext.Provider
      value={{
          packages,
          bookings,

          addPackage,
          updatePackage,
          deletePackage,

          addBooking,
          updateBooking,
          deleteBooking
      }}
    >
      {children} 
    </TravelContext.Provider>
  );
}