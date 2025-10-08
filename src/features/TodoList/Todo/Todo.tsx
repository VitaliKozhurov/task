import { TrashIcon } from "@/assets/icons";
import { ActionButton } from "@/components";
import type { ChangeEvent } from "react";
import type { TodoType } from "../types";
import s from "./Todo.module.css";

type Props = {
  todo: TodoType;
  changeTodoStatus: (args: { todoId: string; checked: boolean }) => void;
  removeTodo: (args: { todoId: string }) => void;
};

export const Todo = ({ todo, changeTodoStatus, removeTodo }: Props) => {
  const { id, checked, title } = todo;

  return (
    <div className={s.root}>
      <div className={s.flexWrapper}>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            changeTodoStatus({ todoId: id, checked: e.currentTarget.checked })
          }
        />
        <span>{title}</span>
      </div>
      <div>
        <ActionButton
          icon={<TrashIcon width={24} height={24} />}
          onClick={() => {
            removeTodo({ todoId: id });
          }}
        />
      </div>
    </div>
  );
};
