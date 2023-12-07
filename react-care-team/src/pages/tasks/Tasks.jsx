import { useEffect, useState } from "react";
import FormTask from "./FormTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [status, setStatus] = useState("");
  const [taskType, setTaskType] = useState("");
  const [content, setContent] = useState("");
  const [validation, setValidation] = useState("");

  // I create a  state for all tasks that will be fetched on load and when there is a change to the tasks state
  // I create a state for creating a new task
  // I create a state for all of the inputs to the form
  // onsubmit of the form, I add a useEffect that will posts the values of the form to the api
  // if successful, I will set the tasks again with the pervious tasks and the new task
  // since my tasks state is going to fetch on every change to tasks, there will be a new get fetch to the api?  probably not optimal

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/tasks")
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        if (data) {
          setTasks(data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  function handleCreateClick() {
    setCreating(true);
  }

  useEffect(() => {
    console.log({ tasks });
  }, [tasks]);

  function handleDeleteClick(id) {
    // first delete task from database
    // then delete it from state when you have confirmation of deletion from the db
    fetch(`http://localhost:3000/api/v1/tasks/${id}`, { method: "DELETE" })
      .then(response => response.json()) // why was this raising error with react console?
      .then(data => {
        console.log(data);
        const updatedTasks = tasks.filter(task => {
          console.log(task.id);
          console.log(data.deleted_task_id);
          return task.id !== data.deleted_task_id;
        });
        setTasks(updatedTasks);
      })
      .catch(error => console.log(error));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!title) {
      setValidation("Title is required");
      return;
    }
    if (!due) {
      setValidation("Due date is required");
      return;
    }
    if (!status) {
      setValidation("Status is required");
      return;
    }
    if (!taskType) {
      setValidation("Task type is required");
      return;
    }

    fetch("http://localhost:3000/api/v1/tasks", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        due: due,
        status: status,
        task_type: taskType,
        content: content,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log(data);
          setTasks([...tasks, data.data]);
          setCreating(false);
          setDue("");
          setStatus("");
          setTaskType("");
          setTitle("");
          setContent("");
          setValidation("");
        }
      })
      .catch(error => console.log({ error }));
  }

  function handleCancelClick() {
    setDue("");
    setStatus("");
    setTaskType("");
    setTitle("");
    setContent("");
    setCreating(false);
    setValidation("");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of Tasks</h1>
      {!creating && (
        <button
          onClick={handleCreateClick}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Create New Task
        </button>
      )}
      {creating && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <FormTask
                // ... all your props ...
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleCancelClick}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-h-64 overflow-auto">
        <table className="w-full text-left border-collapse mt-4">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-6">Task</th>
              <th className="py-4 px-6">Due Date</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Task Type</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map(task => {
                return (
                  <tr key={task.id} className="border-b">
                    <td className="py-4 px-6">{task.title}</td>
                    <td className="py-4 px-6">{task.due}</td>
                    <td className="py-4 px-6">{task.status}</td>
                    <td className="py-4 px-6">{task.task_type}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDeleteClick(task.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
