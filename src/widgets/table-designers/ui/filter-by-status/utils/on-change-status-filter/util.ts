import { NavigateFunction } from "react-router-dom";
import { dataListStatus } from "../../config/data-list-status/data";
import { localeTranslate } from "@/shared/config/locale-translate";
import { TLocaleTranslate } from "@/shared/types/swithed";

export const onChangeStatusFilter = (
  value: string,
  query: URLSearchParams,
  navigate: NavigateFunction,
  locale: TLocaleTranslate
) => {
  const key = dataListStatus.find(
    (item) => localeTranslate[locale].other[item.value] === value
  )?.key;

  if (key) {
    query.set("status", key);
  }

  navigate(`?${query.toString()}`);
};
