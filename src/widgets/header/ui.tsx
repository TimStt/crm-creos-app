import { ButtonTheme } from "@/shared/ui/button-theme";
import style from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cls from "classnames";
import {
  selectorThemeSwitcher,
  toggleTheme,
} from "@/shared/stores/theme-swither";
import { Link } from "react-router-dom";
import { useWathedChangeTheme } from "@/features/use-wathed-change-theme";

import { SwithedLocale } from "@/shared/ui/swithed-locale";
import { selectorLocale, setLocale } from "@/shared/stores/locale-translate";
import { TLocaleTranslate } from "@/shared/types/swithed";
import { localeTranslate } from "@/shared/config/locale-translate";

const Header = () => {
  const theme = useSelector(selectorThemeSwitcher);
  const locale = useSelector(selectorLocale);
  const dispatch = useDispatch();

  useWathedChangeTheme();

  return (
    <header className={cls(style.root, "container")}>
      <ButtonTheme
        classname={style.header__themeSwitcher}
        theme={theme}
        size="48"
        onClick={() => dispatch(toggleTheme())}
      />
      <nav className={style.root__nav}>
        {" "}
        <ul className={style.root__list}>
          <li
            className={cls(style.root__list__item, {
              [style.isActive]: location.pathname === "/",
            })}
          >
            <Link to="/">{localeTranslate[locale].other.home}</Link>{" "}
          </li>
          <li
            className={cls(style.root__list__item, {
              [style.isActive]: location.pathname === "/tasks",
            })}
          >
            <Link to="/tasks">{localeTranslate[locale].other.tasks}</Link>{" "}
          </li>{" "}
          <li
            className={cls(style.root__list__item, {
              [style.isActive]: location.pathname === "/design",
            })}
          >
            <Link to="/design">{localeTranslate[locale].other.design}</Link>
          </li>{" "}
        </ul>{" "}
      </nav>

      <SwithedLocale
        locale={locale}
        setLocale={(locale: TLocaleTranslate) => dispatch(setLocale(locale))}
      />
    </header>
  );
};

export default Header;
