import {
  ICalculatedFieldsByIssue,
  IIssueWithNumberWeek,
  IWeeklySortedValues,
} from "../../../../shared/types/issue/types";

export const calcFinancesWeeklyCount = (
  issues: IIssueWithNumberWeek[],
  calculatedField: ICalculatedFieldsByIssue,
  periodWeeksNumber: number[]
) => {
  // Инициализация результата с нулевыми значениями для каждой недели
  const initializedValues = (weeks: number[]): IWeeklySortedValues[] =>
    weeks.map((value) => ({ week: value, value: 0 }));

  // получение значения для одного поля или суммирование значений для массива полей
  const getValueFinance = (
    issue: IIssueWithNumberWeek,
    field: ICalculatedFieldsByIssue
  ) =>
    Array.isArray(field)
      ? field.reduce((acc, field) => acc + issue[field], 0)
      : +issue[field];

  const updateValues = (
    issues: IIssueWithNumberWeek[],
    initialValues: IWeeklySortedValues[]
  ) => {
    // Обновление значений для каждой недели в результате
    return issues.reduce((acc, issue) => {
      // получение значения для одного поля или суммирование значений для массива полей
      const valueFinance = getValueFinance(issue, calculatedField);
      //  сортировка по номеру недели и сумирование значений для каждой недели
      return acc.map(({ week, value: lastValueFinance }, i) =>
        week === issue.numberWeek
          ? { ...acc[i], value: lastValueFinance + valueFinance }
          : acc[i]
      );
    }, initialValues);
  };

  const initialWeeklySorted = initializedValues(periodWeeksNumber);
  const weeklyWithValue = updateValues(issues, initialWeeklySorted);

  // Возвращаем массив значений без недель
  return weeklyWithValue.map(({ value }) => value);
};
