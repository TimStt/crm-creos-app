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
import { NavMenu } from "./ui/nav-menu-dekstop";
import { localeTranslate } from "@/shared/config/locale-translate";
import { setStateModalMenu } from "@/shared/stores/menu-mobile";

const Header = () => {
  const theme = useSelector(selectorThemeSwitcher);
  const locale = useSelector(selectorLocale);
  const dispatch = useDispatch();

  const { other } = localeTranslate[locale];

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
        classname={style.root__swithedLocale}
        locale={locale}
        setLocale={(locale: TLocaleTranslate) => dispatch(setLocale(locale))}
      />
      <button
        className={cls(style.root__btnMobile, "btn-reset")}
        onClick={() => dispatch(setStateModalMenu(true))}
        title={other.open_mobile_menu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M22 5.25H2v1.5h20v-1.5Zm-20 6h20v1.5H2v-1.5Zm0 6h20v1.5H2v-1.5Z"
          />
        </svg>

        <span className="visually-hidden">{other.open_mobile_menu}</span>
      </button>
    </header>
  );
};

export default Header;
