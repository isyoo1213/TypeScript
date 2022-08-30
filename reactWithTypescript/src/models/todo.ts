class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

//이렇게 생성된 Todo 클래스는 인스턴스 생성 + 타입으로써의 역할

export default Todo;
