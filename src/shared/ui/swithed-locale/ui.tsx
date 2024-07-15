import {
  ISwithedLocaleTranslateUIProps,
  TLocaleTranslate,
} from "@/shared/types/swithed";

import style from "./swithed-locale.module.scss";
import cls from "classnames";

const SwithedLocale = ({
  classname,
  locale,
  setLocale,
}: ISwithedLocaleTranslateUIProps) => {
  const checkActive = (localeChoose: TLocaleTranslate) =>
    locale === localeChoose;
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
      >
        Ru
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
      >
        En
      </button>
    </div>
  );
};

export default SwithedLocale;
