import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  {
    /* props: { items:string[], children:..... } 원래 이렇게 props에 사용될 변수들의 type을 지정해줘야하나
      라이브러리에 정의된 React 타입을 Todos 함수형 컴포넌트에 타입명시하면 자유롭게 사용 가능
      ** FC를 클릭해서 살펴보면 FunctionalComponent<P>라는 제네릭임을 알 수 있음  
      ** React.FC는 이미 Generic 타입 >> 내부적으로 React.FC에 정의된 타입 T에 구체적인 타입을 명시하는 과정
      ** props의 기본적인 chilren같은 prop 외에, 임의적으로 설정한 prop 또한 props에 병합해 사용하기 위한 과정
         >> React.FC 제네릭이 사용할 구체적인 하나의 타입을 명시적으로 설정하는 과정
      ** FC타입에 <>을 통해 기능을 꺼내고 + <> 내에 {}객체를 설정함으로써, 기존 childrern프로퍼티가 존재하는 props객체에 병합*/
  }
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
