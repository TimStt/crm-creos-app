import React, { useEffect } from "react";
import cls from "classnames";
import style from "../../select.module.scss";
import { ISelectUI } from "@/shared/types/ui";

interface OptionProps {
  item: string;
  index: number;
  onChange: ISelectUI["onChange"];
  value: ISelectUI["value"];
  type: ISelectUI["type"];
  hiddenTextOption: ISelectUI["hiddenTextOption"];
}

const Option = ({
  item,
  index,
  type,
  onChange,
  value,
  hiddenTextOption,
}: OptionProps) => {
  const refOption = React.useRef<HTMLLIElement>(null);
  const isChecked = (item: string) => value?.split(",").includes(item);
  useEffect(() => {
    const option = refOption.current;
    if (!option) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onChange(item);
      }
    };

    option.addEventListener("keydown", handleEnterPress);

    return () => {
      option.removeEventListener("keydown", handleEnterPress);
    };
  }, [value, onChange, item]);
  return (
    <li
      key={`${item}-${index}`}
      className={cls(style.root__option, {
        [style.isActive]: isChecked(item),
      })}
      aria-selected={isChecked(item)}
      role="option"
      tabIndex={0}
      defaultChecked={isChecked(item)}
      ref={refOption}
      aria-label={`${hiddenTextOption} ${item}`}
    >
      <label className={style.root__label} htmlFor={`${item}-${index}`}>
        <svg
          className={style.root__check}
          viewBox="0 0 12.06 8.28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12.06 1.06-7 7c-.3.29-.77.29-1.06 0l-4-4L1.06 3l3.47 3.46L11 0l1.06 1.06Z"
            fillRule="evenodd"
          />
        </svg>
        <input
          className={style.root__checkbox}
          id={`${item}-${index}`}
          type={type === "multiple" ? "checkbox" : "radio"}
          checked={isChecked(item) || false}
          onChange={() => onChange(item)}
        />
        <span>{item}</span>
        <span className="visually-hidden">
          {`${hiddenTextOption} ${item}`}{" "}
        </span>
      </label>
    </li>
  );
};

export default Option;
