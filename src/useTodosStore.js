import makeStore from "./makeStoreHook";

const initialState = {
  todos: [],
  isLoading: false,
  error: null
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case "fetchTodos":
      return {
        ...state,
        todos: [...state.todos, action.todos]
      };
    default:
      throw new Error("Unknown action!", action);
  }
};

const [TodosProvider, useTodosDispatch, useTodosState] = makeStore(
  todoReducer,
  initialState
);

export { TodosProvider, useTodosDispatch, useTodosState };
