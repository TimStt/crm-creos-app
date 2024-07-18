export const getNumberWeekWork = (date: Date) => {
  const startTimeOfCurrentYear = new Date(new Date().getFullYear(), 0, 1);
  const diffTime = date.getTime() - startTimeOfCurrentYear.getTime();
  const diffDay = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.ceil((diffDay - 1) / 7);
};
