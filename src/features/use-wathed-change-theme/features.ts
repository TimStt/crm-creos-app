import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorThemeSwitcher, setTheme } from "@/shared/stores/theme-swither";

export const useWathedChangeTheme = () => {
  const theme = useSelector(selectorThemeSwitcher);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", ({ matches: isDark }) => {
        dispatch(setTheme(isDark ? "dark" : "light"));
      });
  }, [dispatch]);
};
