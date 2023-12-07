import { useState } from "react";

export default function FormTask(props) {
  // console.log(`FormTask component called`);
  return (
    <div className="p-4">
      <form
        action="/api/v1/tasks"
        onSubmit={props.onFormSubmit}
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
            value={props.title}
            type="text"
            onChange={props.onTitleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <label htmlFor="due">Due Date:</label>
        <div>
          <label
            htmlFor="due"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date:
          </label>
          <input
            name="due"
            value={props.due}
            type="date"
            onChange={props.onDueChange}
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
            value={props.status}
            onChange={props.onStatusChange}
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
            value={props.taskType}
            onChange={props.onTaskTypeChange}
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
          value={props.content}
          onChange={props.onContentChange}
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
      <button onClick={props.onCancelClick}>Cancel</button>
    </div>
  );
}
