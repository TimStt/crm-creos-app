import { TLocaleTranslate } from "@/shared/types/swithed";

import style from "./nav-menu.module.scss";

import NavMenu from "../nav-menu/ui";

const NavMenuDesktop = ({ locale }: { locale: TLocaleTranslate }) => {
  return <NavMenu className={style.root} locale={locale} />;
};

export default NavMenuDesktop;
