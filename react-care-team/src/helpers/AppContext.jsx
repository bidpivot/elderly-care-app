import { createContext, useState } from "react";

const AppContext = createContext();

function AppProvider(props) {
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

  // function handleTaskDelete(id) {
  //   const updatedTasks = tasks.filter((task) => task.id !== id);
  //   setTasks(updatedTasks);
  //   }

  const values = {
    convertRubyDate,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
