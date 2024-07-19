import { useCallback, useState } from "react";

import { getAllIssue } from "../../api/get-all-issue";
import { calcOfdataForClosedTasks } from "../../utils/calc-of-data-for-closed-tasks/util";
import { IUseTriggerGetDataIssueArgs } from "@/shared/types/issue/types";

export const useTriggerGetDataIssue = ({
  weeksAgo = 8,
  statisticsAllStatuses = false,
}: IUseTriggerGetDataIssueArgs) => {
  const [spinner, setSpinner] = useState(false);

  const griggerApiGetIssues = useCallback(async () => {
    try {
      setSpinner(true);
      const issues = await getAllIssue();
      return calcOfdataForClosedTasks({
        issues,
        weeksAgo,
        statisticsAllStatuses,
      });
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      setSpinner(false);
    }
  }, [statisticsAllStatuses, weeksAgo]);

  return {
    spinner,

    griggerApiGetIssues,
  };
};
