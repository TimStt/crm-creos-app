import { localeTranslate } from "@/shared/config/locale-translate";
import { ICountOfStatuses } from "@/shared/types/issue";
import { TLocaleTranslate } from "@/shared/types/swithed";
import { calcPerCentInArray } from "@/shared/utils/calc-per-cent-in-array";
import { ChartData } from "chart.js";

export const dataStatisticsStatus = (
  dataByTasksByStatus: ICountOfStatuses,
  lang: TLocaleTranslate
): ChartData<"pie"> => {
  const procentNumbers = calcPerCentInArray(Object.values(dataByTasksByStatus));

  const labels = Object.keys(dataByTasksByStatus).map(
    (key, index) =>
      `${localeTranslate[lang].other[key]}: ${procentNumbers[index]}%`
  );
  return {
    labels: labels,
    datasets: [
      {
        data: calcPerCentInArray(Object.values(dataByTasksByStatus)),
        backgroundColor: ["#f9ec0e", "#abb3ba", "#09bdab"],
      },
    ],
  };
};
