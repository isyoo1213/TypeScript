import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}{item.id}</li>
      ))}
    </div>
  );
};

export default TodoItem;
