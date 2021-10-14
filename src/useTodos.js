import React from "react";
import { useTodosDispatch } from "./useTodosStore";

export default function useTodos() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const dispatch = useTodosDispatch();

  const fetchTodos = React.useCallback(async () => {
    setIsLoading(true);
    try {
      dispatch({
        type: "fetchTodos",
        todos: {
          name: "Fetched Todo"
        }
      });
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }, [setIsLoading, dispatch, setError]);

  const addTodos = React.useCallback(
    (name) => {
      dispatch({
        type: "addTodo",
        todo: {
          name
        }
      });
    },
    [dispatch]
  );

  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return [fetchTodos, addTodos, { isLoading, error }];
}
