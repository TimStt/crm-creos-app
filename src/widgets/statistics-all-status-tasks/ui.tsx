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

Chart.register(ArcElement, ChartDataLabels, Legend, Tooltip);

const StatisticsAllStatusTasks = () => {
  const locale = useSelector(selectorLocale);
  const theme = useSelector(selectorThemeSwitcher);

  const { titles, other } = localeTranslate[locale];

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
