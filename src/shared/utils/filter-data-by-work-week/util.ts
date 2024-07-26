import { getNumberWeekWork } from "../../../shared/utils/get-number-week-work";

export const filterDataByWorkWeek = <T, F extends keyof T>(
  issues: T[],
  weeksAgo: number,
  field: F
) => {
  const startWeek = getNumberWeekWork(new Date()) - weeksAgo + 1;
  return issues.filter(
    (issue) => getNumberWeekWork(new Date(issue[field] as string)) >= startWeek
  );
};
