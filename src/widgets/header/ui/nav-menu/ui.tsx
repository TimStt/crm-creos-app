import { localeTranslate } from "@/shared/config/locale-translate";
import { paths } from "@/shared/config/paths";
import { TLocaleTranslate } from "@/shared/types/swithed";
import cls from "classnames";
import { Link, useLocation } from "react-router-dom";
import style from "./nav-menu.module.scss";
import { getNumberWeekWork } from "@/shared/utils/get-number-week-work";

const NavMenu = ({ locale }: { locale: TLocaleTranslate }) => {
  const { pathname } = useLocation();

  const { other, time } = localeTranslate[locale];
  return (
    <nav className={style.root}>
      {" "}
      <ul className={style.root__list}>
        <li
          className={cls(style.root__list__item, {
            [style.isActive]: pathname === paths.home,
          })}
        >
          <Link to={paths.home}>{other.home}</Link>{" "}
        </li>
        <li
          className={cls(style.root__list__item, {
            [style.isActive]: pathname === "/tasks",
          })}
        >
          <Link to={paths.tasks}>{other.tasks}</Link>{" "}
        </li>{" "}
        <li
          className={cls(style.root__list__item, {
            [style.isActive]: pathname === "/design",
          })}
        >
          <Link to={paths.design}>{other.design}</Link>
        </li>{" "}
      </ul>{" "}
      <span>
        {" "}
        {time.current_working_week}: {getNumberWeekWork(new Date())}{" "}
      </span>
    </nav>
  );
};

export default NavMenu;
