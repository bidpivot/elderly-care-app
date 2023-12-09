export default async function fetchTasks() {
  console.log("FETCH: fetching Tasks");
  try {
    const response = await fetch("http://localhost:3000/api/v1/tasks");
    const data = await response.json();
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}
// fetch("http://localhost:3000/api/v1/tasks")
//   .then(response => response.json())
//   .then(data => {
//     // console.log(data);
//     if (data) {
//       setTasks(data);
//     }
//   })
//   .catch(error => console.log(error));
