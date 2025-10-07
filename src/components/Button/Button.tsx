import type { ButtonHTMLAttributes } from "react";

import s from "./Button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...restProps }: Props) => {
  return <button {...restProps} className={`${s.button} ${className}`} />;
};
