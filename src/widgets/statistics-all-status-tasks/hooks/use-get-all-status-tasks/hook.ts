import { selectorIssues, selectorLoadingIssues } from "@/shared/stores/issue";
import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dataStatisticsStatus } from "../../config/data-statistics-status";
import { countingNumberTasksStatus } from "../../utils/counting-number-tasks-status";
import { selectorLocale } from "@/shared/stores/locale-translate";

// получаем количество задач по всем статусам и создаем данные для графика
export const useGetAllStatusTasks = (weeksAgo?: number) => {
  const issues = useSelector(selectorIssues);
  const loadingIssues = useSelector(selectorLoadingIssues);
  const [dataByTasksByStatus, setDataByTasksByStatus] =
    useState<ChartData<"pie"> | null>(null);
  const locale = useSelector(selectorLocale);
  useEffect(() => {
    if (!!issues?.length) {
      const countOfStatuses = countingNumberTasksStatus(issues, weeksAgo);
      setDataByTasksByStatus(dataStatisticsStatus(countOfStatuses, locale));
    }
  }, [issues, locale, weeksAgo]);

  return { dataByTasksByStatus, loadingIssues };
};
