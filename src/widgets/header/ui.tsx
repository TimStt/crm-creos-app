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
import { useLocaleTranslate } from "@/features/use-locale-translate";
import { SwithedLocale } from "@/shared/ui/swithed-locale";
import { selectorLocale, setLocale } from "@/shared/stores/locale-translate";
import { TLocaleTranslate } from "@/shared/types/swithed";

const Header = () => {
  const theme = useSelector(selectorThemeSwitcher);
  const locale = useSelector(selectorLocale);
  const dispatch = useDispatch();

  const localeTranslate = useLocaleTranslate();

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
          {" "}
          <li>
            <Link to="/tasks">{localeTranslate.task}</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/design">{localeTranslate.design}</Link>
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
