import fetchTasks from "../helpers/fetchTasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const baseUrl = import.meta.env.VITE_REACT_APP_PROJECT_URL;

async function handleDeleteClick(id) {
  // tasks will be updated and refetched automatically after successful mutation
  try {
    const response = await fetch(`${baseUrl}/tasks/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log({ error });
  }
}

// this custom hook will handle deletions from tasks
export function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: id => handleDeleteClick(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
}
