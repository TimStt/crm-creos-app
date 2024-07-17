export const getRelativeDate = (
  startDate: Date,
  isFullData: boolean = true,
  endData?: Date
) => {
  const currentDate = endData ? endData : new Date();
  const diff = currentDate.getTime() - startDate.getTime();

  let min: number = 0;
  let hours: number = 0;
  let mounth: number = 0;

  let days = diff / (24 * 60 * 60 * 1000);

  if (isFullData && !Number.isInteger(days)) {
    hours = (days - Math.floor(days)) * 24;
    days = Math.floor(days);

    if (days > 30) {
      mounth = Math.floor(days / 30);
      days = days - mounth * 30;
    }

    if (!Number.isInteger(hours)) {
      min = Math.floor((hours - Math.floor(hours)) * 60);
      hours = Math.floor(hours);
    }
  }

  if (!isFullData) {
    return {
      mounth: Math.floor(days / 30),
      days: Math.floor(days),
      hours: Math.floor(days * 24),
      min: Math.floor(days * 24 * 60),
    };
  }

  return {
    mounth,
    days,
    hours,
    min,
  };
};
