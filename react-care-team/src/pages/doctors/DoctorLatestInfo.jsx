import { useContext } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Next Apppointment</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{nextAppt ? nextApptDate : "No Scheduled Appointments"}</p>
        </CardContent>
        {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Last Apppointment</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{lastAppt ? lastApptDate : "No Appointment History"}</p>
        </CardContent>
        {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Next Steps with Doctor</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {doctor.next_steps
              ? doctor.next_steps
              : `No 'next steps' saved for Dr. ${doctor.lastName}`}
          </p>
        </CardContent>
        {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
    </div>
    // <div className="relevant-info-doctor">
    //   <h3 className="text-lg font-bold">Important Info</h3>
    //   <p>Next Steps: {doctor.next_steps}</p>
    //   <p>Next Appt: {nextAppt ? nextApptDate : "No Scheduled Appointments"}</p>
    //   <p>Last Appt: {lastAppt ? lastApptDate : "No Appointment History"}</p>
    // </div>
  );
}

export default DoctorLatestInfo;
