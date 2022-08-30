import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  {/* todos는 문자열 배열이면서 Todo객체 배열 */}

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
