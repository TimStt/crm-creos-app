import { NavigateFunction } from "react-router-dom";
import { dataListSort } from "../../config/data-list-sort/data";
import { localeTranslate } from "@/shared/config/locale-translate";
import { TLocaleTranslate } from "@/shared/types/swithed";

export const onChangeSort = (
  value: string,
  query: URLSearchParams,
  navigate: NavigateFunction,
  locale: TLocaleTranslate
) => {
  const key = dataListSort.find(
    (item) => localeTranslate[locale].other[item.value] === value
  )?.key;

  if (key) {
    query.set("ordering", key);
  }

  navigate(`?${query.toString()}`);
};
