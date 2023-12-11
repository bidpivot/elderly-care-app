const baseUrl = import.meta.env.VITE_REACT_APP_PROJECT_URL;

export async function get(endpoint) {
  try {
    console.log(`FETCH: get ${endpoint}`);
    const response = await fetch(baseUrl + endpoint);
    const data = await response.json();
    console.log(endpoint, { data });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function post(endpoint, body) {
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (error) {
    console.log({ error });
  }
}

export async function destroy(endpoint) {
  try {
    console.log(`FETCH: deleting ${endpoint}`);
    const response = await fetch(baseUrl + endpoint, { method: "delete" });
    const data = await response.json();
    console.log(endpoint, { data });
    return data;
  } catch (error) {
    console.log(error);
  }
}
// return new Promise((resolve, reject) => {
//   fetch(baseUrl + url, {
// method: "post",
// headers: {
//   "Content-Type": "application/json",
// },
// body: JSON.stringify(body)
//   })
//     .then(response => response.json())
//     .then(data => {
//       if (!data) {
//         setLoading(false);
//         return reject(data);
//       }
//       setLoading(false);
//       resolve(data);
//     })
//     .catch(error => {
//       setLoading(false);
//       reject(error);
//     });
// });
