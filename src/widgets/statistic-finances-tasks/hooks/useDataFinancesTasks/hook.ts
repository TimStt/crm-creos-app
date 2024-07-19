import { useEffect, useState } from "react";
import { dataFinancesTasks } from "../../config/data-finances-tasks";
import { useSelector } from "react-redux";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useTriggerGetDataIssue } from "@/features/closed-tasks-by-work-week";

import { TDataListFinancesTasks } from "@/shared/types/issue/types";
import { usePathname } from "@/shared/hooks/use-pathname";

export const useDataFinancesTasks = () => {
  const { query } = usePathname();

  const weeksAgoQuery = query.get("weeksAgo");
  const { spinner, griggerApiGetIssues } = useTriggerGetDataIssue({
    weeksAgo: +weeksAgoQuery,
  });

  const locale = useSelector(selectorLocale);
  const [dataByFinancesTasks, setDataByFinancesTasks] =
    useState<TDataListFinancesTasks | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await griggerApiGetIssues();
      if (!!data?.financesTasksData?.finances) {
        setDataByFinancesTasks(
          dataFinancesTasks(data.financesTasksData, locale)
        );
      }
    };

    getData();
  }, [dataByFinancesTasks?.length, griggerApiGetIssues, locale, weeksAgoQuery]);

  return {
    dataByFinancesTasks,
    spinner,
  };
};
