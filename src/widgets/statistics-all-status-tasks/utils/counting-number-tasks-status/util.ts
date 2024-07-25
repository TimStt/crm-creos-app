import { IIssue } from "@/shared/types/issue";
import { countingElementsByField } from "@/shared/utils/counting-elements-by-field";
import { filterDataByWorkWeek } from "@/shared/utils/filter-data-by-work-week";

export const countingNumberTasksStatus = (
  issues: IIssue[],
  weeksAgo?: number
) => {
  const newIssues = weeksAgo
    ? filterDataByWorkWeek(issues, weeksAgo, "date_finished")
    : issues;

  return {
    new: countingElementsByField(newIssues, "status", "New"),
    done: countingElementsByField(newIssues, "date_finished"),
    in_progress: countingElementsByField(newIssues, "status", "In Progress"),
  };
};
