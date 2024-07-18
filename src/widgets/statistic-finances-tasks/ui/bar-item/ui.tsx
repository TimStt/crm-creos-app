import { TDataChartFinancesTasks } from "@/shared/types/issue/types";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { optionsLine } from "../../config/options-line";
import { useSelector } from "react-redux";
import { selectorThemeSwitcher } from "@/shared/stores/theme-swither";
import style from "./bar-item.module.scss";
import cls from "classnames";
import { selectorLocale } from "@/shared/stores/locale-translate";

Chart.register(
  CategoryScale,
  ChartDataLabels,
  Legend,
  Tooltip,
  LinearScale,
  BarElement,
  LineElement
);

const BarItem = ({ dataChart }: { dataChart: TDataChartFinancesTasks }) => {
  const theme = useSelector(selectorThemeSwitcher);
  const lang = useSelector(selectorLocale);
  return (
    <>
      <h2 className={style.root__title}>{dataChart.datasets[0].label}</h2>
      <Bar
        className={cls(style.root)}
        data={dataChart}
        options={optionsLine(theme, lang)}
      />
    </>
  );
};

export default BarItem;
