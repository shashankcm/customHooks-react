import React from "react";

export default function useInputTodo(intialValue, todoInputRef) {
  const [value, setValue] = React.useState(intialValue);

  React.useEffect(() => {
    todoInputRef.current.focus();
  }, [todoInputRef, value]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, onChange, reset];
}
