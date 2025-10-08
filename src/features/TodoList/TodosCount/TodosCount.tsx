import type { TodoType } from "../types";

type Props = {
  todos: TodoType[];
};

export const TodosCount = ({ todos }: Props) => {
  const doneTasksCount = todos.reduce((acc, curr) => {
    if (curr.checked) {
      acc += 1;
    }

    return acc;
  }, 0);

  return <p>{`Выполнено ${doneTasksCount} из ${todos.length}`}</p>;
};
