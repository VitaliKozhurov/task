import { useState } from "react";
import { AddTodo } from "./AddTodo/AddTodo";

import s from "./TodoList.module.css";
import type { Todo } from "./types";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className={s.todoList}>
      <AddTodo addTodo={addTodoHandler} />
    </div>
  );
};
