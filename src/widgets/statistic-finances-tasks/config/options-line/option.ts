import { TLocaleTranslate, TSwitchedTheme } from "@/shared/types/swithed";
import { ChartOptions } from "chart.js";

export const optionsLine = (
  theme: TSwitchedTheme,
  lang: TLocaleTranslate
): ChartOptions<"bar"> => {
  const colorText = theme === "dark" ? "white" : "black";
  const colorGray = theme === "dark" ? "#2c2c2c" : "#e5e5e5";
  const langTranslate = lang === "Ru" ? "ru-RU" : "en-US";

  return {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        position: "average",

        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.formattedValue} ₽`;
          },
        },
      },

      datalabels: {
        display: true,
        color: "white",
        formatter: (value: number) =>
          `${value.toLocaleString(langTranslate)} ₽`,
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },

    scales: {
      y: {
        grid: {
          display: true,
          color: colorGray,
        },

        ticks: {
          padding: 10,
          color: colorText,
          font: {
            weight: "lighter",
            size: 15,
          },

          callback: (value: number) => {
            return `${value.toLocaleString(langTranslate)} ₽`;
          },
        },
      },

      x: {
        grid: {
          display: true,
          color: colorGray,
        },

        ticks: {
          color: colorText,
          font: {
            weight: "lighter",
            size: 15,
          },
        },
      },
    },
  };
};
