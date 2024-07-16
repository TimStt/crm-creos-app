export const useGetRelativeDate = (date: Date) => {
  const currentDate = new Date();
  const diff = currentDate.getTime() - date.getTime();

  if (diff < 60 * 1000) {
    return localeTranslate._1_minutes_ago;
  }

  if (diff < 60 * 60 * 1000) {
    return localeTranslate[`_${Math.round(diff / (60 * 1000))}_minutes_ago`];
  }

  if (diff < 24 * 60 * 60 * 1000) {
    return localeTranslate[`_${Math.round(diff / (60 * 60 * 1000))}_hours_ago`];
  }

  if (diff < 7 * 24 * 60 * 60 * 1000) {
    return localeTranslate[
      `_${Math.round(diff / (24 * 60 * 60 * 1000))}_days_ago`
    ];
  }

  const week = Math.round(diff / (7 * 24 * 60 * 60 * 1000));

  return localeTranslate[`_${week}_weeks_ago`];
};
