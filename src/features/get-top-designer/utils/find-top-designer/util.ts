import { IDesigner } from "@/shared/types/disigner";
import { TUnitData } from "@/shared/types/disigner/types";
import { IIssue } from "@/shared/types/issue";
import { getRelativeDate } from "@/shared/utils/get-relative-date";
import { findMedian } from "@/shared/utils/median-finding";

export const findTopDesigners = ({
  designers,
  issue,
  limit,
  medianUnit,
}: {
  designers: IDesigner[];
  issue: IIssue[];
  limit: number;
  medianUnit: TUnitData;
}) => {
  const disignerWithIssues = designers.map((designer) => {
    const issueWithDesigner = issue.filter(
      (issue) => issue.status == "Done" && issue.designer === designer.username
    );
    return {
      ...designer,
      issues: issueWithDesigner,
    };
  });

  //

  const disagnersMedianTaskCount = disignerWithIssues.map(
    ({ issues, ...disigners }) => {
      const diffTime = issues.map(
        ({ date_finished_by_designer: end, date_started_by_designer: start }) =>
          getRelativeDate(new Date(start), false, new Date(end))[medianUnit]
      );
      const medianTime = findMedian(diffTime);
      return {
        avatar: disigners.avatar,
        username: disigners.username,
        mediantime: medianTime,
        task_count: issues.length,
      };
    }
  );

  // sort by median asc  time and task count desc
  disagnersMedianTaskCount
    .sort((a, b) => a.mediantime - b.mediantime)
    .sort((a, b) => b.task_count - a.task_count);

  return disagnersMedianTaskCount.splice(0, limit);
};
