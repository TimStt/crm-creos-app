import { localeTranslate } from "@/shared/config/locale-translate";

import { IFieldsByFinancesTasks } from "@/shared/types/issue/types";
import { TLocaleTranslate } from "@/shared/types/swithed";

import { ChartData } from "chart.js";

export const dataFinancesTasks = (
  dataByFinancesTasks: IFieldsByFinancesTasks,
  lang: TLocaleTranslate
): Array<ChartData<"bar">> => {
  const { periodWeeksNumber, finances } = dataByFinancesTasks;
  const { time: timeTranslate, other: otherTranslate } = localeTranslate[lang];

  const colors = ["#09bdab", "#abb3ba", "#44944A"];
  const labels = periodWeeksNumber.map(
    (value) => `${timeTranslate.week} № ${value}`
  );
  const datas = Object.entries(finances).map(([key, value], i) => {
    return {
      labels: labels,

      datasets: [
        {
          categoryPercentage: 0.3,

          label: otherTranslate[key],
          data: value,
          backgroundColor: colors[i],
        },
      ],
    };
  });
  return datas;
};
