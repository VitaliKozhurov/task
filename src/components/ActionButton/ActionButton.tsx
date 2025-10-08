import type { ReactNode } from "react";

import s from "./ActionButton.module.css";

type Props = {
  onClick: () => void;
  icon: ReactNode;
};

export const ActionButton = ({ icon, onClick }: Props) => {
  return (
    <button onClick={onClick} className={s.root}>
      {icon}
    </button>
  );
};
