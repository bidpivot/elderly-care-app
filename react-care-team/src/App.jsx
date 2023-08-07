import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/doctors/doctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/doctors/:id" element={<DoctorDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
