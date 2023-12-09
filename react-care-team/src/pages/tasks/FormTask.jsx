import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
const baseUrl = import.meta.env.VITE_REACT_APP_PROJECT_URL;

export default function FormTask(props) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [status, setStatus] = useState("");
  const [taskType, setTaskType] = useState("");
  const [content, setContent] = useState("");
  const [validation, setValidation] = useState("");

  // this is the mutation that I want to use to create a task
  const postTask = useMutation({
    mutationFn: () => createTask(),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  // This function below serves as the mutation function for the postTask mutation
  // keeping it in the same file for now but I want to refactor this and make it more modular
  function createTask() {
    console.log("FETCH: creating task");
    fetch(`${baseUrl}/tasks`, {
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
          // setTasks([...tasks, data.data]);
          props.handleClose();
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
    postTask.mutate(); // refactor this so it receives the form data as an argument. take form data out of createTask function
  }

  return (
    <div className="p-4">
      <form
        action="/api/v1/tasks"
        onSubmit={handleFormSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            name="title"
            value={title}
            type="text"
            onChange={e => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="due"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date:
          </label>
          <input
            name="due"
            value={due}
            type="date"
            onChange={e => setDue(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="task-status"
            className="block text-sm font-medium text-gray-700"
          >
            Task Status:
          </label>
          <select
            name="task-status"
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>Choose a type</option>
            <option>pending</option>
            <option>completed</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="task-type"
            className="block text-sm font-medium text-gray-700"
          >
            Task Type:
          </label>
          <select
            name="task-type"
            value={taskType}
            onChange={e => setTaskType(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option>Choose a type</option>
            <option>bill</option>
            <option>other</option>
          </select>
        </div>

        <div className="text-red-500">{props.validation}</div>

        <textarea
          name="text-content"
          id="text-content"
          cols="30"
          rows="10"
          placeholder="additional notes (optional)"
          value={content}
          onChange={e => setContent(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>

        <label
          htmlFor="task-file"
          className="block text-sm font-medium text-gray-700"
        >
          Add Image (optional):
        </label>
        <input
          type="file"
          id="task-file"
          name="task-file"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

        <input
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </form>
    </div>
  );
}
