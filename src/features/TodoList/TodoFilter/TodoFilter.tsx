import type { Dispatch, SetStateAction } from "react";
import s from "./TodoFilter.module.css";

const tabs = [
  { id: 1, value: "all", title: "Все" },
  { id: 2, value: "done", title: "Выполненные" },
  { id: 3, value: "pending", title: "В работе" },
] as const;

type Props = {
  filter: "all" | "done" | "pending";
  setFilter: Dispatch<SetStateAction<"all" | "done" | "pending">>;
};

export const TodoFilter = ({ filter, setFilter }: Props) => {
  return (
    <div className={s.root}>
      {tabs.map((tab) => (
        <button
          onClick={() => {
            setFilter(tab.value);
          }}
          className={`${s.tab} ${filter === tab.value && s.active}`}
          key={tab.id}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
