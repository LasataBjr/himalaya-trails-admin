import { useContext } from "react";
import { TravelContext } from "../components/context/TravelContext";

export function useTravel() {
  const context = useContext(TravelContext);
  
  // Safety check: helps catch wrapper bugs instantly
  if (!context) {
    throw new Error("useTravel must be used within a TravelProvider");
  }
  
  return context; 
}