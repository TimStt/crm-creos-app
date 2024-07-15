import { Route, Routes } from "react-router-dom";
import { LayoutMain } from "./layout";
import { Home } from "@/pages/home";
import { useSelector } from "react-redux";
import { selectorThemeSwitcher } from "@/shared/stores/theme-swither";
import { useEffect } from "react";

const App = () => {
  const theme = useSelector(selectorThemeSwitcher);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <Routes>
      <Route element={<LayoutMain />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
