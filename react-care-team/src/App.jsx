import { AppProvider } from "./helpers/AppContext";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./pages/doctors/doctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";
import Prescriptions from "./pages/prescriptions/Prescriptions";
import Tasks from "./pages/tasks/Tasks";
import Header from "./components/Header";
import Dash from "./pages/dash/Dash";
import cat3 from "./assets/cat3.png";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AppProvider>
      <Header />
      <div className="p-4 bg-gray-100 min-h-screen flex gap-4">
        <BrowserRouter>
          <NavBar />
          {/* <Header image={cat3} /> */}
          <div className="flex-grow">
            {/* <Header image={cat3} /> */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/doctors" element={<Doctors />}></Route>
              <Route path="/doctors/:id" element={<DoctorDetails />}></Route>
              <Route path="/prescriptions" element={<Prescriptions />}></Route>
              <Route path="/tasks" element={<Tasks />}></Route>
              <Route path="/dash" element={<Dash />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
