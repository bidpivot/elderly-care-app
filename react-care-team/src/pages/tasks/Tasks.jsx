import { useEffect, useState } from "react";
import FormTask from "./FormTask";
import { useQuery } from "@tanstack/react-query";
import fetchTasks from "../../helpers/fetchTasks";
import { useDeleteTask } from "../../hooks/useTasks";

const baseUrl = import.meta.env.VITE_REACT_APP_PROJECT_URL;

export default function Tasks() {
  // const [tasks, setTasks] = useState([]);
  const [creating, setCreating] = useState(false);
  const {
    isLoading,
    error,
    data: tasks,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => fetchTasks(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const deleteTaskQuery = useDeleteTask(); // pass in the id when you call mutate

  function handleClose() {
    setCreating(false);
  }

  function handleCreateClick() {
    setCreating(true);
  }

  useEffect(() => console.log({ tasks }), [tasks]); // delete this later

  //  this JSX below is too big. need to refactor

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4">List of Tasks</h1>
        {!creating && (
          <button
            onClick={handleCreateClick}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow"
          >
            Create New Task
          </button>
        )}
      </div>
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
                <FormTask creating={creating} handleClose={handleClose} />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleClose}
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
                        onClick={() => deleteTaskQuery.mutate(task.id)}
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
