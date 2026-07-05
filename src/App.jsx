import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { TravelProvider } from "./components/context/TravelContext";

export default function App() {
  return (
    <Router>
      <TravelProvider>      
          <AppRoutes />      
      </TravelProvider>
    </Router>
  );
}