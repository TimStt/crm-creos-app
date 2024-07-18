import React, { useId, useState } from "react";
import style from "./select.module.scss";
import cls from "classnames";

import { Option } from "./ui/option";
import { ISelectUI } from "@/shared/types/ui";
import { useWatch } from "@/shared/hooks/useWatch";

const Select = ({
  dataList,
  type,
  onChange,
  value,
  title,
  hiddenTextOption,
  placeholder,
  classname,
}: ISelectUI) => {
  const idButton = useId();
  const [isOpenList, setIsOpenList] = useState(false);
  const refWrapper = React.useRef<HTMLDivElement>(null);

  useWatch(refWrapper, () => setIsOpenList(false), isOpenList);

  const refDropDown = React.useRef<HTMLUListElement>(null);

  return (
    <div className={cls(classname, style.root)} ref={refWrapper}>
      <button
        className={cls(style.root__button, "btn-reset")}
        onClick={() => setIsOpenList(!isOpenList)}
        title={title || "Выбрать"}
        aria-haspopup="listbox"
        id={idButton}
        aria-expanded={isOpenList}
      >
        <div className={style.root__button__text}>
          <span
            className={cls(style.root__placholder, {
              [style.isNotEmpty]: value?.length,
            })}
          >
            {placeholder}
          </span>
          {!!value && (
            <span className={style.root__selected}>
              {value.replace(/,/g, ", ")}
            </span>
          )}
        </div>

        <svg
          className={cls(style.root__icon, {
            [style.isRotate]: isOpenList,
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFF"
            fillOpacity=".4"
            fillRule="evenodd"
            d="m11.46 15.53-5.47-5.47L7.05 9l4.94 4.94L16.94 9 18 10.06l-5.48 5.47a.75.75 0 0 1-1.06 0Z"
          />
        </svg>
      </button>
      <ul
        className={cls(style.root__list, { [style.isOpen]: isOpenList })}
        role="listbox"
        aria-labelledby={idButton}
        ref={refDropDown}
      >
        {dataList.map((item, index) => (
          <Option
            key={`${item}-${index}`}
            item={item}
            index={index}
            type={type}
            onChange={onChange}
            value={value}
            hiddenTextOption={hiddenTextOption}
          />
        ))}
      </ul>
    </div>
  );
};

export default Select;
