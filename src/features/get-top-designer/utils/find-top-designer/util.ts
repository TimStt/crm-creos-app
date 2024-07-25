import {
  IDesigner,
  IDesignerTop,
  ITopDesignersFind,
} from "@/shared/types/disigner/types";
import { IIssue } from "@/shared/types/issue";

import { getRelativeDate } from "@/shared/utils/get-relative-date";
import { findMedian } from "@/shared/utils/median-finding";

export const findTopDesigners = ({
  designers,
  issue,
  limit,
  medianUnit,
}: ITopDesignersFind) => {
  // сортировка по медиане времени и по количеству задач
  const sortedDesigners = (disagners: IDesignerTop[]) =>
    disagners
      .sort((a, b) => a.mediantime - b.mediantime)
      .sort((a, b) => b.task_count - a.task_count)
      .splice(0, limit);

  // получение задач определенного дизайнера
  const getIssueWithDesigner = (
    nameDesigner: IDesigner["username"],
    issues: IIssue[]
  ) =>
    issues.filter(
      (issue) => issue.status == "Done" && issue.designer === nameDesigner
    );

  // получение списка с временными интервалами для каждой задачи определенного дизайнера
  const getListTimeIntervals = (
    issues: IIssue[],
    medianUnit: ITopDesignersFind["medianUnit"]
  ) =>
    issues.map(
      ({ date_finished_by_designer: end, date_started_by_designer: start }) =>
        getRelativeDate(new Date(start), false, new Date(end))[medianUnit]
    );

  // получение списка дизайнеров с их задачами
  const getDesignersWithMedianTime = (
    designers: IDesigner[],
    ussues: IIssue[]
  ) =>
    designers.map(({ username, avatar }) => {
      const issueWithDesigner = getIssueWithDesigner(username, ussues);

      // получение списка с временными интервалами для каждой задачи
      const listTimeInterval = getListTimeIntervals(
        issueWithDesigner,
        medianUnit
      );

      // получение медианы времени
      const mediantime = findMedian(listTimeInterval);

      return {
        avatar,
        username,
        mediantime,
        task_count: issueWithDesigner.length,
      };
    });

  const designersMedianTaskCount = getDesignersWithMedianTime(designers, issue);
  const topDesigners = sortedDesigners(designersMedianTaskCount);

  return topDesigners;
};
