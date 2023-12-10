// import Doctors from "../doctors/doctors";
import Prescriptions from "../prescriptions/Prescriptions";
import Tasks from "../tasks/Tasks";
import AppointmentsAll from "../appointments/AppointmentsAll";
import NavBar from "../../components/NavBar";

export default function Dash() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen flex">
      <div className="hidden lg:block max-w-sm">
        <NavBar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <Tasks />
        </div>
        <div className="p-4 bg-white rounded shadow overflow-y-auto">
          <AppointmentsAll />
        </div>
        <div className="p-4 bg-white rounded shadow overflow-x-auto lg:col-span-2">
          <Prescriptions />
        </div>
      </div>
    </div>
  );
}

// export default function Dash() {
//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-1 gap-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="p-4 bg-white rounded shadow">
//             <Tasks />
//           </div>
//           <div className="p-4 bg-white rounded shadow">
//             <AppointmentsAll />
//           </div>
//           <div className="p-4 bg-white rounded shadow">
//             <Prescriptions />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
