import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosContextProvider } from "./store/todos-context"

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // //setTodos를 살펴보면 React.Dispatch<> 타입 - 상태 업데이트 함수가 갖는 타입 + Generic 내부도 action과 관련된 타입
  // //useState 또한 Generic타입 >> state에 저장하고 싶은 타입을 지정할 수 있도록.
  // //+ Generic을 지정해주지 않고, 초기값을 그냥 빈 배열로만 설정하면 TS는 state에 어떤 유형이 들어와야할지 추론하지 못하고, never로 아무 타입의 값도 들어오지 못하도록 막음
  
  // // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  // {/* todos는 문자열 배열이면서 Todo객체 배열 */}
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodos)=>{
  //     return prevTodos.concat(newTodo);
  //   });
  //   //이전 state의 상태를 참고하는 state의 경우 함수형으로 작성! + concat() 메서드로 새로운 배열 생성
  // }

  // const removeTodoHandler= (todoId: string) => {
  //   setTodos((prevTodos)=>{
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   })
  // }

  //이제 context에서 state 및 handler를 관리하면서 prop drilling 필요 없어졌음
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
