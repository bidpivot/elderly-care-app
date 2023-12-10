export function dateFormatter(dateTime) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return { formattedDate, formattedTime };
}

// sample usage

// {appointments.map(appt => {
//   const { formattedDate, formattedTime } = dateFormatter(appt.time);

//   return (
//     <tr key={appt.id} className="border-b">
//       <td className="py-4 px-6">{formattedDate}</td>
//       <td className="py-4 px-6">{formattedTime}</td>
//       <td className="py-4 px-6">{appt.doctor}</td>
//       <td className="py-4 px-6">{appt.specialty}</td>
//     </tr>
//   );
// })}

// old formatting code

// export default function convertRubyDate(rubyDate) {
//   const dateObject = new Date(rubyDate);

//   const niceFormattedDate = dateObject.toLocaleString("en-US", {
//     weekday: "long", // Full weekday name (e.g., "Sunday")
//     year: "numeric", // 4-digit year (e.g., "2023")
//     month: "long", // Full month name (e.g., "August")
//     day: "numeric", // Day of the month (e.g., "6")
//     hour: "numeric", // Hour (e.g., "12")
//     minute: "numeric", // Minute (e.g., "34")
//     timeZoneName: "short", // Short time zone name (e.g., "PDT")
//   });

//   return niceFormattedDate;
// }
