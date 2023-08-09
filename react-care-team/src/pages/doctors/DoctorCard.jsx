// import convertRubyDate from "../../helpers/dateFormatter.js";
import { useParams, Link } from "react-router-dom";
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
    <div id="container">
      {/* //  A div with card class for the card */}
      <div className="card">
        <img alt="should be a photo of the doctor here" />

        {/* div with card__details className to hold the details in the card */}
        <div className="card__details">
          {/* // Span with tag className for the tag */}
          <span className="tag">{info.specialty}</span>

          {/*         //  A div with name className for the name of the card */}
          <div className="name">
            {info.first_name} {info.last_name}
          </div>

          <p>Put in something about next steps </p>
          <p>
            Last Appointment:{" "}
            {info.last_appointment ? lastAppt : "No appointment history"}{" "}
          </p>
          <p>
            Next Appointment:{" "}
            {info.next_appointment ? nextAppt : "No scheduled appointments"}{" "}
          </p>
          <Link to={`/doctors/${info.id}`}>
            <button>See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
