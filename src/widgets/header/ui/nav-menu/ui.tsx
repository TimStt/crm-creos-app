import { localeTranslate } from "@/shared/config/locale-translate";

import cls from "classnames";
import { Link, useLocation } from "react-router-dom";
import style from "./nav-menu.module.scss";
import { getNumberWeekWork } from "@/shared/utils/get-number-week-work";
import { IMenuUI } from "@/shared/types/ui/types";
import { dataMenuItem } from "./config/data-menu-item";

const NavMenu = ({ className, locale, onClickItem }: IMenuUI) => {
  const { pathname } = useLocation();

  const { time } = localeTranslate[locale];
  return (
    <nav className={cls(style.root, className)}>
      {" "}
      <ul className={style.root__list}>
        {dataMenuItem.map((item, index) => (
          <li
            className={cls(style.root__list__item, {
              [style.isActive]: pathname === item.path,
            })}
            key={index}
            onClick={onClickItem}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>{" "}
      <span>
        {" "}
        {time.current_working_week}: {getNumberWeekWork(new Date())}{" "}
      </span>
    </nav>
  );
};

export default NavMenu;
