import moment from "moment";

export const getNumberWeekWork = (date: Date) => {
  date.setHours(date.getHours() - 11);

  const numberOfWeekWork = moment.utc(date).isoWeek();

  return numberOfWeekWork;
};
