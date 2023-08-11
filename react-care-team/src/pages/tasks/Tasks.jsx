import { useEffect, useState } from "react";
import FormTask from "./FormTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/tasks")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data) {
          setTasks(data);
        }
      });
  }, []);

  function handleCreateClick() {
    setCreating(true);
  }

  return (
    <div>
      <h1>List of Tasks</h1>
      {!creating && (
        <button onClick={handleCreateClick}>Create New Task</button>
      )}
      {creating && <FormTask />}
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
                </tr>
              );
            })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
