import React from "react";
import cls from "classnames";
import style from "../../select.module.scss";
import { ISelectUI } from "@/shared/types/ui";
import { useKeyHandler } from "./hooks/use-key-handler";

interface OptionProps {
  item: string;
  index: number;
  onChange: ISelectUI["onChange"];
  value: ISelectUI["value"];
  type: ISelectUI["type"];
  hiddenTextOption: ISelectUI["hiddenTextOption"];
  setIsOpenList: (state: boolean) => void;
}

const Option = ({
  item,
  index,
  type,
  onChange,
  value,
  hiddenTextOption,
  setIsOpenList,
}: OptionProps) => {
  const refOption = React.useRef<HTMLLIElement>(null);
  const isChecked = (item: string) => value?.split(",").includes(item);

  useKeyHandler(refOption, onChange, item, setIsOpenList);

  const onChangeOption = (item: string) => {
    onChange(item);
    setIsOpenList(false);
  };

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
          type={
            {
              multiple: "checkbox",
              single: "radio",
            }[type]
          }
          checked={isChecked(item) || false}
          onChange={() => onChangeOption(item)}
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
