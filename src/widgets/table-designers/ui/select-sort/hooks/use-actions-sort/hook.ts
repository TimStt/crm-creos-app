import { usePathname } from "@/shared/hooks/use-pathname";
import { dataListSort } from "../../config/data-list-sort/data";
import { onChangeSort } from "../../util/on-change-sort";
import { useSelector } from "react-redux";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { localeTranslate } from "@/shared/config/locale-translate";

export const useSortActions = () => {
  const { query, navigate } = usePathname();

  const locale = useSelector(selectorLocale);

  const { other: otherTranslate } = localeTranslate[locale];

  const currentLabelSelect =
    otherTranslate[
      dataListSort.find((item) => item.key === query.get("ordering"))?.value
    ];

  const listLabelsSelect = dataListSort.map(
    (item) => otherTranslate[item.value]
  );

  const handlerChangeSort = (value: string) =>
    onChangeSort(value, query, navigate, locale);

  return {
    handlerChangeSort,
    currentLabelSelect,
    listLabelsSelect,
    otherTranslate,
  };
};
