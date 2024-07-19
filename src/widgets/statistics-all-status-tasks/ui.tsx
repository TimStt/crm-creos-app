import { useTriggerGetDataIssue } from "@/features/closed-tasks-by-work-week";

import { Spinner } from "@/shared/ui/spinner";
import { ArcElement, Chart, ChartData, Legend, Tooltip } from "chart.js";
import { useEffect, useState } from "react";
import { dataStatisticsStatus } from "./config/data-statistics-status";
import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import style from "./statistics-all-status-tasks.module.scss";
import cls from "classnames";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { optionsPie } from "./config/options-pie";
import { selectorThemeSwitcher } from "@/shared/stores/theme-swither";

Chart.register(ArcElement, ChartDataLabels, Legend, Tooltip);

const StatisticsAllStatusTasks = () => {
  const { spinner, griggerApiGetIssues } = useTriggerGetDataIssue({
    statisticsAllStatuses: true,
  });
  const locale = useSelector(selectorLocale);
  const theme = useSelector(selectorThemeSwitcher);

  const { titles, other } = localeTranslate[locale];

  const [dataByTasksByStatus, setDataByTasksByStatus] =
    useState<ChartData<"pie"> | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await griggerApiGetIssues();
      if (data?.countOfStatuses && data?.totalCountTasks) {
        setDataByTasksByStatus(
          dataStatisticsStatus(data.countOfStatuses, locale)
        );
      }
    };

    getData();
  }, [griggerApiGetIssues, locale]);

  console.log(dataByTasksByStatus);

  return (
    <section className={style.root}>
      <h2 className={cls(style.root__title, "title-h2-fluid")}>
        {titles.statistics_all_statuses_tasks}
      </h2>

      {!spinner ? (
        !!dataByTasksByStatus ? (
          <Pie
            className={style.root__chart}
            data={dataByTasksByStatus}
            options={optionsPie(theme)}
          />
        ) : (
          <>
            {" "}
            <span>{other.no_data}</span>{" "}
          </>
        )
      ) : (
        <div className={style.root__spinner}>
          {" "}
          <Spinner size={50} />{" "}
        </div>
      )}
    </section>
  );
};

export default StatisticsAllStatusTasks;
