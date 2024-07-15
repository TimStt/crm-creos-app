import {
  enLocaleTranslate,
  ruLocaleTranslate,
} from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";

export const useLocaleTranslate = () => {
  const locale = useSelector(selectorLocale);
  const localeTranslate =
    locale === "Ru" ? ruLocaleTranslate : enLocaleTranslate;
  return localeTranslate;
};
