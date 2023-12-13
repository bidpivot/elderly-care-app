import React, { useContext } from "react";

import { AppContext } from "../../helpers/AppContext";

function DoctorLatestInfo({ doctor }) {
  const context = useContext(AppContext);
  console.log({ doctor });
  const nextAppt = doctor.next_appointment?.date_and_time; // defined next appt date from doctor state
  // I need to add a helper for converting the date and time to a better format from rails date formate
  // const { nextApptDate } = dateFormatter(nextAppt); // destructured date and time from dateformatter function
  const nextApptDate = context.convertRubyDate(nextAppt); // converted it to better format with datehelper function from context
  const lastAppt = doctor.last_appointment?.date_and_time;
  const lastApptDate = context.convertRubyDate(lastAppt);

  return (
    <div className="relevant-info-doctor">
      <h3 className="text-lg font-bold">Important Info</h3>
      <p>Next Steps: {doctor.next_steps}</p>
      <p>Next Appt: {nextAppt ? nextApptDate : "No Scheduled Appointments"}</p>
      <p>Last Appt: {lastAppt ? lastApptDate : "No Appointment History"}</p>
    </div>
  );
}

export default DoctorLatestInfo;
