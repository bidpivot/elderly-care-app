export default function convertRubyDate(rubyDate) {
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
