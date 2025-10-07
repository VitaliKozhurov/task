import type { ReactNode } from "react";

import s from "./Layout.module.css";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className={s.layout}>{children}</div>;
};
