import { useId } from "react";
import style from "./swithed.module.scss";
import { ISwitchedUIProps } from "@/shared/types/swithed/types";
import cls from "classnames";

const Swithed = ({
  text,
  variant = "circle",
  classname,
  ...props
}: ISwitchedUIProps) => {
  const idRoot = useId();
  return (
    <label
      className={cls(style.root, classname, [style[`root--${variant}`]])}
      htmlFor={idRoot}
    >
      <input
        className={style.root__checkbox}
        type="checkbox"
        id={idRoot}
        {...props}
      />

      {text && <span className={style.root__text}>{text}</span>}
    </label>
  );
};

export default Swithed;
