import { useSelector } from "react-redux";
import { selectorThemeSwitcher } from "@/shared/stores/theme-swither";
import { Swithed } from "@/shared/ui/swithed";

const ThemeSwitchet = () => {
  const theme = useSelector(selectorThemeSwitcher);
  return <Swithed text={theme} variant="circle" />;
};

export default ThemeSwitchet;
