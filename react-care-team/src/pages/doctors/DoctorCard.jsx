// import convertRubyDate from "../../helpers/dateFormatter.js";
import { Link } from "react-router-dom";
import { AppContext } from "../../helpers/AppContext";
import { useContext } from "react";

export default function DoctorCard(props) {
  const { info } = props;

  const context = useContext(AppContext);
  const lastAppt = context.convertRubyDate(
    info.last_appointment?.date_and_time
  );
  const nextAppt = context.convertRubyDate(
    info.next_appointment?.date_and_time
  );

  return (
    <div className="rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-64 object-cover" alt="Doctor" />
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {info.specialty}
        </span>
        <div className="font-bold text-xl mb-2">
          {info.first_name} {info.last_name}
        </div>
        <p className="text-gray-700 text-base">
          Put in something about next steps
        </p>
        <p className="mt-2 text-gray-700 text-sm">
          Last Appointment:{" "}
          {info.last_appointment ? lastAppt : "No appointment history"}
        </p>
        <p className="mt-2 text-gray-700 text-sm">
          Next Appointment:{" "}
          {info.next_appointment ? nextAppt : "No scheduled appointments"}
        </p>
        <Link to={`/doctors/${info.id}`}>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
}
