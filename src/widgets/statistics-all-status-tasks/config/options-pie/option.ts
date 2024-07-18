import { TSwitchedTheme } from "@/shared/types/swithed";
import { ChartOptions } from "chart.js";

export const optionsPie = (theme: TSwitchedTheme): ChartOptions<"pie"> => {
  const colorText = theme === "dark" ? "white" : "black";
  return {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "center",
        labels: {
          boxWidth: 10,
          color: colorText,
          font: {
            weight: "lighter",
            size: 15,
          },
        },
      },

      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        position: "average",
      },

      datalabels: {
        display: true,
        color: "white",

        formatter: (_, context) => {
          return ` ${context.dataset.data[context.dataIndex]}%`;
        },

        font: {
          weight: "bold",
          size: 16,
        },

        align: "end",
      },
    },
  };
};
