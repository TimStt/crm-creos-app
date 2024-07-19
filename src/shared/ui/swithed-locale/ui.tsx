import {
  ISwithedLocaleTranslateUIProps,
  TLocaleTranslate,
} from "@/shared/types/swithed";

import style from "./swithed-locale.module.scss";
import cls from "classnames";
import { localeTranslate } from "@/shared/config/locale-translate";

const SwithedLocale = ({
  classname,
  locale,
  setLocale,
}: ISwithedLocaleTranslateUIProps) => {
  const checkActive = (localeChoose: TLocaleTranslate) =>
    locale === localeChoose;

  const { other } = localeTranslate[locale];
  const helpTitle = (locale: TLocaleTranslate) =>
    other[`change_site_language_to_${locale}`];
  return (
    <div className={cls(style.root, classname)}>
      <button
        className={cls(
          style.root__button,
          {
            [style.isActive]: checkActive("Ru"),
          },
          "btn-reset"
        )}
        disabled={checkActive("Ru")}
        onClick={() => setLocale("Ru")}
        title={helpTitle("Ru")}
      >
        <span>Ru</span>
        <span className="visually-hidden"> {helpTitle("Ru")}</span>
      </button>

      <button
        className={cls(
          style.root__button,
          {
            [style.isActive]: checkActive("En"),
          },
          "btn-reset"
        )}
        disabled={checkActive("En")}
        onClick={() => setLocale("En")}
        title={helpTitle("En")}
      >
        <span>En</span>
        <span className="visually-hidden"> {helpTitle("En")}</span>
      </button>
    </div>
  );
};

export default SwithedLocale;
