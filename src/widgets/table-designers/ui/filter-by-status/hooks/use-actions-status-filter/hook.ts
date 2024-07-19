import { usePathname } from "@/shared/hooks/use-pathname";
import { dataListStatus } from "../../config/data-list-status/data";

import { useSelector } from "react-redux";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { localeTranslate } from "@/shared/config/locale-translate";
import { onChangeStatusFilter } from "../../utils/on-change-status-filter";

export const useStatusFilterActions = () => {
  const { query, navigate } = usePathname();

  const locale = useSelector(selectorLocale);

  const { other: otherTranslate } = localeTranslate[locale];

  const currentLabelSelect =
    otherTranslate[
      dataListStatus.find((item) => item.key === query.get("status"))?.value
    ];

  const listLabelsSelect = dataListStatus.map(
    (item) => otherTranslate[item.value]
  );

  const handlerChangeStatusFilter = (value: string) =>
    onChangeStatusFilter(value, query, navigate, locale);

  return {
    handlerChangeStatusFilter,
    currentLabelSelect,
    listLabelsSelect,
    otherTranslate,
  };
};
