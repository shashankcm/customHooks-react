import React from "react";
import { useTodosState } from "./useTodosStore";
import useTodos from "./useTodos";
import useInputTodo from "./useInputTodo";

export default function Todos() {
  const todoInputRef = React.useRef();
  const [value, onChange, reset] = useInputTodo("", todoInputRef);
  const { todos } = useTodosState();
  const addTodos = useTodos()[1];

  const addTodoName = () => {
    addTodos(value);
    reset();
  };

  return (
    <div>
      <h1>TODOS APP</h1>
      <label> Add Todo Name </label>
      <input ref={todoInputRef} type="text" value={value} onChange={onChange} />
      <pre>{JSON.stringify(todos, undefined, 2)}</pre>
      <button onClick={addTodoName} disabled={value === ""}>
        Add TODO
      </button>
    </div>
  );
}
