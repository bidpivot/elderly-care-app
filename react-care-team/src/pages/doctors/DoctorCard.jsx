export default function DoctorCard(props) {
  const { info } = props;
  console.log(info.last_appointment);

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
          <p>Last Appointment: {info.last_appointment.date_and_time} </p>
          <p>Next Appointment: {info.next_appointment.date_and_time} </p>
          <button>See Details</button>
        </div>
      </div>
    </div>
  );
}
