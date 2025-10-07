import type { InputHTMLAttributes } from "react";

import s from "./Input.module.css";

type Props = { label?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, className, ...restProps }: Props) => {
  return (
    <div className={s.root}>
      {label && <span className={s.label}>{label}</span>}
      <input {...restProps} className={`${s.input} ${className}`} />
    </div>
  );
};
