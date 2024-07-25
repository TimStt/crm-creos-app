import { useSelector } from "react-redux";
import { selectorLocale } from "@/shared/stores/locale-translate";

import { localeTranslate } from "@/shared/config/locale-translate";
import { Select } from "@/shared/ui/select";
import style from "./select-week-ago.module.scss";
import { useChangeWeek } from "./hooks/use-change-week";
import { ISelectWeekAgoUI } from "@/shared/types/ui/types";

const SelectWeekAgo = ({ dataListWeekAgo }: ISelectWeekAgoUI) => {
  const locale = useSelector(selectorLocale);
  const { titles, time } = localeTranslate[locale];

  const { weeksAgo, onChange } = useChangeWeek(dataListWeekAgo.length);

  return (
    <Select
      classname={style.root}
      dataList={dataListWeekAgo}
      type="single"
      onChange={onChange}
      value={time[`_${weeksAgo}_weeks_ago`]}
      placeholder={titles.choose_period}
      hiddenTextOption={time.select_period_time}
    />
  );
};

export default SelectWeekAgo;
