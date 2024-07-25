import { StatisticFinancesTasks } from "@/widgets/statistic-finances-tasks";
import { StatisticsAllStatusTasks } from "@/widgets/statistics-all-status-tasks";
import cls from "classnames";

import style from "./tasks-page.module.scss";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import { localeTranslate } from "@/shared/config/locale-translate";
import { useGetIssues } from "@/shared/hooks/use-get-issues";

const Tasks: React.FC = () => {
  const locale = useSelector(selectorLocale);

  useGetIssues();

  const { titles } = localeTranslate[locale];
  return (
    <div className={cls(style.root, "container")}>
      <h1 className={cls(style.root__title, "title-h1-fluid")}>
        {titles.statistics}
      </h1>
      <StatisticsAllStatusTasks />
      <StatisticFinancesTasks />
    </div>
  );
};

export default Tasks;
