import { useEffect, useState } from "react";
import { dataFinancesTasks } from "../../config/data-finances-tasks";
import { useSelector } from "react-redux";
import { selectorLocale } from "@/shared/stores/locale-translate";

import { TDataListFinancesTasks } from "@/shared/types/issue/types";
import { usePathname } from "@/shared/hooks/use-pathname";
import { selectorIssues, selectorLoadingIssues } from "@/shared/stores/issue";
import { calcOfdataForClosedTasks } from "@/features/closed-tasks-by-work-week";

// получаем данные по финансам задач и приводим данные к ожидаемому формату для графика

export const useDataFinancesTasks = () => {
  const { query } = usePathname();
  const loadingIssues = useSelector(selectorLoadingIssues);
  const weeksAgoQuery = query.get("weeksAgo");
  const issues = useSelector(selectorIssues);
  const locale = useSelector(selectorLocale);
  const [dataByFinancesTasks, setDataByFinancesTasks] =
    useState<TDataListFinancesTasks | null>(null);

  useEffect(() => {
    if (!!issues?.length) {
      const financesTasksData = calcOfdataForClosedTasks({
        issues,
        weeksAgo: +weeksAgoQuery,
      });
      setDataByFinancesTasks(dataFinancesTasks(financesTasksData, locale));
    }
  }, [issues, locale, weeksAgoQuery]);

  return {
    dataByFinancesTasks,
    loadingIssues,
  };
};
