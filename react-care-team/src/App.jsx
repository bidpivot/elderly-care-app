import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/doctors/doctors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctors" element={<Doctors />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
