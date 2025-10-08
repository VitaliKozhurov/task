import { useState, type ChangeEvent } from "react";

import { Button, Input } from "@/components";

import type { TodoType } from "../types";
import s from "./AddTodo.module.css";

type Props = {
  addTodo: (todo: TodoType) => void;
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
      checked: false,
    });
    setValue("");
  };

  return (
    <div className={s.root}>
      <Input
        label="New Todo"
        value={value}
        onChange={onChangeHandler}
        placeholder="Enter todo..."
      />
      <Button onClick={onClickHandler}>Add task</Button>
    </div>
  );
};
