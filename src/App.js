import "./styles.css";
import Todos from "./todos";
import { TodosProvider } from "./useTodosStore";

export default function App() {
  return (
    <TodosProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Todos />
      </div>
    </TodosProvider>
  );
}
