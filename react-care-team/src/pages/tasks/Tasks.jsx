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
        }
      })
      .catch(error => console.log({ error }));
  }

  return (
    <div>
      <h1>List of Tasks</h1>
      {!creating && (
        <button onClick={handleCreateClick}>Create New Task</button>
      )}
      {creating && (
        <FormTask
          validation={validation}
          title={title}
          onTitleChange={event => setTitle(event.target.value)}
          due={due}
          onDueChange={event => setDue(event.target.value)}
          taskType={taskType}
          onTaskTypeChange={event => setTaskType(event.target.value)}
          status={status}
          onStatusChange={event => setStatus(event.target.value)}
          content={content}
          onContentChange={event => setContent(event.target.value)}
          onFormSubmit={handleFormSubmit}
        />
      )}
      <table>
        <tbody>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Task Type</th>
          </tr>
          {tasks &&
            tasks.map(task => {
              return (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.due}</td>
                  <td>{task.status}</td>
                  <td>{task.task_type}</td>
                  <td>
                    <button onClick={() => handleDeleteClick(task.id)}>
                      delete
                    </button>
                    {/*
                    -find id of this task
                    -create HandleDeleteClick function that does the following:
                      -removes task from tasks state
                      -delete request to database with this id
                    -add onClick event to button that calls the HandleDeleteClick function with id as parameter
                    */}
                  </td>
                </tr>
              );
            })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
