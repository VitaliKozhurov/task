import { useState } from "react";

import { AddTodo } from "./AddTodo/AddTodo";
import { Todo } from "./Todo/Todo";
import { TodosCount } from "./TodosCount/TodosCount";
import type { TodoType } from "./types";

import { TodoFilter } from "./TodoFilter/TodoFilter";
import s from "./TodoList.module.css";
import { validateLocalStorageData } from "./validateLocalStorageData";

const filterTodos = (
  todos: TodoType[],
  filter: "all" | "done" | "pending"
): TodoType[] => {
  switch (filter) {
    case "done":
      return todos.filter((todo) => todo.checked);
    case "pending":
      return todos.filter((todo) => !todo.checked);
    case "all":
    default:
      return todos;
  }
};

const LOCAL_STORAGE_KEY = "todos";

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    return validateLocalStorageData();
  });
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");

  const addTodoHandler = (todo: TodoType) => {
    const updatedTodo = [...todos, todo];
    setTodos(updatedTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodo));
  };

  const changeTodoStatus = (args: { todoId: string; checked: boolean }) => {
    const updatedTodo = todos.map((todo) => {
      return todo.id === args.todoId
        ? { ...todo, checked: args.checked }
        : todo;
    });
    setTodos(updatedTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodo));
  };

  const removeTodo = ({ todoId }: { todoId: string }) => {
    const updatedTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodo));
  };

  const filteredTodos = filterTodos(todos, filter);

  return (
    <div className={s.todoList}>
      <AddTodo addTodo={addTodoHandler} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <div className={s.list}>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoStatus={changeTodoStatus}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodosCount todos={todos} />
    </div>
  );
};
