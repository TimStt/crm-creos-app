import { filterDataByWorkWeek } from "../../shared/utils/filter-data-by-work-week/util";
import { ICalcOfdataForClosedTasksArgs } from "../../shared/types/issue";
import { filtersArrayByField } from "../../shared/utils/filters-array-by-field";
import { getNumberWeekWork } from "../../shared/utils/get-number-week-work";
import { calcFinancesWeeklyCount } from "./utils/calc-finances-weekly-count";

export const calcOfdataForClosedTasks = ({
  weeksAgo,
  issues,
}: ICalcOfdataForClosedTasksArgs) => {
  try {
    // Фильтрация задач, которые завершены (имеют дату завершения)
    const closedTasks = filtersArrayByField(issues, "date_finished");

    // Получение текущего номера рабочей недели
    const nowNumberWeekWork = getNumberWeekWork(new Date());

    // Создание массива всех недель в периоде
    const periodWeeksNumber = [...Array(weeksAgo)]
      .fill(nowNumberWeekWork)
      .map((value, i) => value - i)
      .reverse() as number[];

    // Преобразование задач для добавления номера недели
    const allTasksForPeriod = closedTasks.map((issue) => ({
      ...issue,
      numberWeek: getNumberWeekWork(new Date(issue.date_finished)),
    }));

    // Фильтрация задач по рабочим неделям
    const filterTasksForPeriod = filterDataByWorkWeek(
      allTasksForPeriod,
      weeksAgo,
      "date_finished"
    ).sort((a, b) => a.numberWeek - b.numberWeek);

    // Расчет дохода по неделям
    const profit = calcFinancesWeeklyCount(
      filterTasksForPeriod,
      "received_from_client",
      periodWeeksNumber
    );

    // Расчет расходов по неделям
    const expenditure = calcFinancesWeeklyCount(
      filterTasksForPeriod,
      [
        "send_to_project_manager",
        "send_to_account_manager",
        "send_to_designer",
      ],
      periodWeeksNumber
    );

    // Расчет разности между прибылью и расходами (доход - расходы) = прибыль
    const variance = profit.map((profit, i) =>
      expenditure[i] < profit ? profit - expenditure[i] : 0
    );

    return {
      finances: {
        profit,
        expenditure,
        variance,
      },
      allTasksForPeriod,
      periodWeeksNumber,
    };
  } catch (error) {
    console.log(error as Error);
  }
};
