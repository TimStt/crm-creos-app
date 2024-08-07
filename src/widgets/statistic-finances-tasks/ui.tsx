import { useSelector } from "react-redux";
import cls from "classnames";
import { selectorLocale } from "@/shared/stores/locale-translate";
import style from "./statistics-finances-tasks.module.scss";
import { Spinner } from "@/shared/ui/spinner";
import { useDataFinancesTasks } from "./hooks/use-data-finances-tasks";
import { localeTranslate } from "@/shared/config/locale-translate";
import ListCharts from "./ui/list-charts/ui";
import { SelectWeekAgo } from "./ui/select-week-ago";
import { getNumberWeekWork } from "@/shared/utils/get-number-week-work";

const StatisticFinancesTasks = () => {
  const locale = useSelector(selectorLocale);
  const MAX_WEEKS_AGO = 8;

  const { titles, time } = localeTranslate[locale];

  const { dataByFinancesTasks, loadingIssues } = useDataFinancesTasks();

  return (
    <section className={style.root}>
      {" "}
      <h2 className={cls(style.root__title, "title-h2-fluid")}>
        {titles.statistics_finances_tasks}
      </h2>{" "}
      {!loadingIssues ? (
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
