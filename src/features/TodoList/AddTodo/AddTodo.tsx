import { useState, type ChangeEvent } from "react";

import { Button, Input } from "@/components";

import s from "./AddTodo.module.css";
import type { Todo } from "../types";

type Props = {
  addTodo: (todo: Todo) => void;
};

export const AddTodo = ({ addTodo }: Props) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onClickHandler = () => {
    addTodo({
      id: crypto.randomUUID(),
      title: value,
      status: "pending",
    });
    setValue("");
  };

  return (
    <div className={s.root}>
      <Input
        label="Todo"
        value={value}
        onChange={onChangeHandler}
        placeholder="Enter todo..."
      />
      <Button onClick={onClickHandler}>Add task</Button>
    </div>
  );
};
