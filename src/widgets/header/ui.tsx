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

const Header = () => {
  const theme = useSelector(selectorThemeSwitcher);
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
          {" "}
          <li>
            <Link to="/tasks">Задачи</Link>{" "}
          </li>{" "}
          <li>
            <Link to="/design">Дизайнеры</Link>
          </li>{" "}
        </ul>{" "}
      </nav>
    </header>
  );
};

export default Header;
