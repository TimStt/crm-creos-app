import { useSelector } from "react-redux";
import cls from "classnames";
import { selectorLocale } from "@/shared/stores/locale-translate";
import style from "./statistics-finances-tasks.module.scss";
import { Spinner } from "@/shared/ui/spinner";
import { useDataFinancesTasks } from "./hooks/useDataFinancesTasks";
import { localeTranslate } from "@/shared/config/locale-translate";
import ListCharts from "./ui/list-charts/ui";
import { SelectWeekAgo } from "./ui/select-week-ago";
import { getNumberWeekWork } from "@/shared/utils/get-number-week-work";

const StatisticFinancesTasks = () => {
  const locale = useSelector(selectorLocale);
  const MAX_WEEKS_AGO = 8;

  const { titles, time } = localeTranslate[locale];

  const { dataByFinancesTasks, spinner } = useDataFinancesTasks();

  return (
    <section className={cls(style.root, "container")}>
      {" "}
      <h2 className={style.root__title}>
        {titles.statistics_finances_tasks}
      </h2>{" "}
      {!spinner ? (
        <div className={style.root__wrapper}>
          <span>
            {" "}
            {time.current_working_week}: {getNumberWeekWork(new Date())}{" "}
          </span>
          <SelectWeekAgo
            dataListWeekAgo={Array.from(
              { length: MAX_WEEKS_AGO },
              (_, i) => time[`_${i + 1}_weeks_ago`]
            )}
          />
          <ListCharts dataByFinancesTasks={dataByFinancesTasks} />
        </div>
      ) : (
        <div className={style.root__spinner}>
          {" "}
          <Spinner size={50} />{" "}
        </div>
      )}
    </section>
  );
};

export default StatisticFinancesTasks;
