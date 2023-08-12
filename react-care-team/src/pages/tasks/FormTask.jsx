import { useState } from "react";

export default function FormTask(props) {
  console.log(`FormTask has taskType as ${props.taskType}`);
  return (
    <div>
      <form action="/api/v1/tasks" onSubmit={props.onFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          value={props.title}
          type="text"
          onChange={props.onTitleChange}
        />

        <label htmlFor="due">Due Date:</label>
        <input
          name="due"
          value={props.due}
          type="date"
          onChange={props.onDueChange}
        />

        <label htmlFor="task-status">Task Status:</label>
        <select
          name="task-status"
          value={props.status}
          onChange={props.onStatusChange}
        >
          <option>Choose a type</option>
          <option>pending</option>
          <option>completed</option>
        </select>

        <label htmlFor="task-type">Task Type:</label>
        <select
          name="task-type"
          value={props.taskType}
          onChange={props.onTaskTypeChange}
        >
          <option>Choose a type</option>
          <option>bill</option>
          <option>other</option>
        </select>

        <div className="validation-message">{props.validation}</div>
        <textarea
          name="text-content"
          id="text-content"
          cols="30"
          rows="10"
          placeholder="additional notes (optional)"
          value={props.content}
          onChange={props.onContentChange}
        ></textarea>

        <input type="submit" />
      </form>
    </div>
  );
}
