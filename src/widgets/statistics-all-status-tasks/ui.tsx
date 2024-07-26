import { Spinner } from "@/shared/ui/spinner";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import style from "./statistics-all-status-tasks.module.scss";
import cls from "classnames";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { optionsPie } from "./config/options-pie";
import { selectorThemeSwitcher } from "@/shared/stores/theme-swither";

import { useGetAllStatusTasks } from "./hooks/use-get-all-status-tasks";
// import { getNumberWeekWork } from "@/shared/utils/get-number-week-work";

Chart.register(ArcElement, ChartDataLabels, Legend, Tooltip);

const StatisticsAllStatusTasks = () => {
  const locale = useSelector(selectorLocale);
  const theme = useSelector(selectorThemeSwitcher);

  const { titles, other } = localeTranslate[locale];
  // const date = "2024-07-08T10:59:00.000Z";
  // const date1 = "2024-07-08T11:00:00.000Z";

  // const result = getNumberWeekWork(new Date(date));
  // const result1 = getNumberWeekWork(new Date(date1));
  // console.log(date, result);
  // console.log(date1, result1);

  const { dataByTasksByStatus, loadingIssues } = useGetAllStatusTasks();

  return (
    <section className={style.root}>
      <h2 className={cls(style.root__title, "title-h2-fluid")}>
        {titles.statistics_all_statuses_tasks}
      </h2>

      {!loadingIssues ? (
        !!dataByTasksByStatus ? (
          <Pie
            className={style.root__chart}
            data={dataByTasksByStatus}
            options={optionsPie(theme)}
          />
        ) : (
          <>
            <span>{other.no_data}</span>{" "}
          </>
        )
      ) : (
        <div className={style.root__spinner}>
          <Spinner size={50} />{" "}
        </div>
      )}
    </section>
  );
};

export default StatisticsAllStatusTasks;
