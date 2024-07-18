import {
  ICalcOfdataForClosedTasksArgs,
  IIssueWithNumberWeek,
} from "@/shared/types/issue";
import { ICalculatedFieldsByIssue } from "@/shared/types/issue/types";
import { getNumberWeekWork } from "@/shared/utils/get-number-week-work";

export const calcOfdataForClosedTasks = ({
  weeksAgo,
  issues,
  statisticsAllStatuses,
}: ICalcOfdataForClosedTasksArgs) => {
  try {
    const closedTasks = issues.filter((issue) => issue.date_finished);

    const inProgressTasksCount = issues.filter(
      (issue) => issue.status === "In Progress"
    ).length;
    const newIssuesCount = issues.filter(
      (issue) => issue.status === "New"
    ).length;

    const totalCountTasks = issues.length;

    if (statisticsAllStatuses) {
      return {
        countOfStatuses: {
          new: newIssuesCount,
          done: closedTasks.length,
          in_progress: inProgressTasksCount,
        },
        totalCountTasks,
      };
    }
    const nowNumberWeekWork = getNumberWeekWork(new Date());
    const startNumberWeek = nowNumberWeekWork - weeksAgo;

    const periodWeeksNumber = [...Array(weeksAgo)]
      .fill(startNumberWeek)
      .map((value, i) => value + i) as number[];

    const allTasksForPeriod = closedTasks
      .map((issue) => ({
        ...issue,
        numberWeek: getNumberWeekWork(new Date(issue.date_finished)),
      }))
      .filter((issue) => issue.numberWeek >= startNumberWeek)
      .sort((a, b) => a.numberWeek - b.numberWeek);

    const calcValuesByWeeks = (
      arr: IIssueWithNumberWeek[],
      calculatedField: ICalculatedFieldsByIssue
    ) => {
      let res = periodWeeksNumber.map((value) => ({ week: value, value: 0 }));
      arr.forEach(({ numberWeek, ...rest }) => {
        res = res.map(({ week, value }, i) =>
          week === numberWeek
            ? { ...res[i], value: value + rest[calculatedField] }
            : res[i]
        );
      });

      return res.map(({ value }) => value);
    };
    console.log(
      "allTasksForPeriod send_to_project_manager",
      allTasksForPeriod[0]
    );

    const profit = calcValuesByWeeks(allTasksForPeriod, "received_from_client");
    const expenditure = calcValuesByWeeks(
      allTasksForPeriod,
      "send_to_project_manager"
    );

    const variance = profit.map((profit, i) =>
      expenditure[i] < profit ? profit - expenditure[i] : 0
    );

    return {
      financesTasksData: {
        finances: {
          profit,
          expenditure,
          variance,
        },

        allTasksForPeriod,
        totalCountTasks,
        periodWeeksNumber,
      },
    };
  } catch (error) {
    console.log(error as Error);
  }
};
