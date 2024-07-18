import { ButtonTheme } from "@/shared/ui/button-theme";
import style from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import cls from "classnames";
import {
  selectorThemeSwitcher,
  toggleTheme,
} from "@/shared/stores/theme-swither";

import { useWathedChangeTheme } from "@/features/use-wathed-change-theme";

import { SwithedLocale } from "@/shared/ui/swithed-locale";
import { selectorLocale, setLocale } from "@/shared/stores/locale-translate";
import { TLocaleTranslate } from "@/shared/types/swithed";
import { NavMenu } from "./ui/nav-menu";

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
      <NavMenu locale={locale} />
      <SwithedLocale
        locale={locale}
        setLocale={(locale: TLocaleTranslate) => dispatch(setLocale(locale))}
      />
    </header>
  );
};

export default Header;
