import { useRef, useContext } from 'react';

import styles from './NewTodo.module.css';
import TodosContext from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  {/* useRef 자체는 Generic Type 
      useRef에 이미 다른 element가 할당되어 있을 수 있으므로 생성될 때 자동으로 설정될 수도 있음 
      >> 처음 만들 때에는 연결할 요소가 없으므로 null로 시작값 설정*/}

  // const enteredText = todoTextInputRef.current.value;
  // submitHandler가 작동할 때 input의 ref에 연결되는 것은 자명하지만, 이처럼 useRef선언 후 바로 사용하는 경우
  // >> ref와 element가 연결되지 않아 값이 비어있을 수 있음 
  // >> submitHandler 내에서 current 뒤에 ?를 붙여, 일단 접근 시도 후 값이 없으면 null, 값이 있으면 받아오도록 함 >> 실제 ?를 붙이지 않고 살펴보면, string | undefined 확인 가능
  
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    {/* current. 에서 자동완성을 살펴보면 input 엘리먼트 객체의 프로퍼티를 모두 볼 수 있음 
        만약, 절대 null이 아닌 값을 가져올 수 있는 확신이 있다면 ?가 아닌 !로 사용 가능*/}

    if(enteredText.trim().length === 0){
      {/* 만약 enteredText를 받아올 때, ref에서 ?를 통해 가져오면, 여기서도 ?를 붙여줘야 함 */}
      //throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  }



  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="todoText">Todo Text</label>
      <input type="text" id="todoText" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
