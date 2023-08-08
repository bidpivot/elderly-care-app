// import convertRubyDate from "../../helpers/dateFormatter.js";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../../helpers/AppContext";
import { useContext } from "react";

export default function DoctorCard(props) {
  const { info } = props;

  const context = useContext(AppContext);

  function convertRubyDate(rubyDate) {
    const dateObject = new Date(rubyDate);

    const niceFormattedDate = dateObject.toLocaleString("en-US", {
      weekday: "long", // Full weekday name (e.g., "Sunday")
      year: "numeric", // 4-digit year (e.g., "2023")
      month: "long", // Full month name (e.g., "August")
      day: "numeric", // Day of the month (e.g., "6")
      hour: "numeric", // Hour (e.g., "12")
      minute: "numeric", // Minute (e.g., "34")
      timeZoneName: "short", // Short time zone name (e.g., "PDT")
    });

    return niceFormattedDate;
  }

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
            {convertRubyDate(info.last_appointment.date_and_time)}{" "}
          </p>
          <p>
            Next Appointment:{" "}
            {convertRubyDate(info.next_appointment.date_and_time)}{" "}
          </p>
          <Link to={`/doctors/${info.id}`}>
            <button>See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
