import { StatisticFinancesTasks } from "@/widgets/statistic-finances-tasks";
import { StatisticsAllStatusTasks } from "@/widgets/statistics-all-status-tasks";

const Tasks: React.FC = () => {
  return (
    <>
      <StatisticsAllStatusTasks />
      <StatisticFinancesTasks />
    </>
  );
};

export default Tasks;
