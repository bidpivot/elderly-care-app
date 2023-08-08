import { AppProvider } from "./helpers/AppContext";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/doctors/doctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/doctors/:id" element={<DoctorDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
