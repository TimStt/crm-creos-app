import { ITime } from "@/shared/types/time";

// Вычисление относительного времени с начала указанной даты
export const getRelativeDate = (
  startDate: Date,
  isFullData?: boolean,
  endData?: Date
): ITime => {
  // Получение текущей даты или отчет от указанной даты
  const currentDate = endData || new Date();

  // Получение разницы между текущей датой  и начальной датой
  const diff = currentDate.getTime() - startDate.getTime();

  const times: ITime = {
    days: diff / (24 * 60 * 60 * 1000),
  };

  // высчитываем точное относительное время с начала указанной даты
  if (isFullData) {
    // Если полученное число дней не целое число, то вычисляем остаток в часах вычитая из дней
    if (!Number.isInteger(times.days)) {
      times.hours = (times.days - Math.floor(times.days)) * 24;
      times.days = Math.floor(times.days);
    }

    // Если дни больше 30, то вычисляем количество месяцев
    if (times.days > 30) {
      times.months = Math.floor(times.days / 30);
      times.days -= times.months * 30;
    }

    // Если полученное число часов не целое число, то вычисляем остаток в минутах вычитая из часов
    if (!Number.isInteger(times.hours)) {
      times.minutes = Math.floor((times.hours - Math.floor(times.hours)) * 60);
      times.hours = Math.floor(times.hours);
    }
  }

  /* Если не требуется получение полного относительного времени,
   то возвращаем только месяцы, дни, часы и минуты */

  if (!isFullData) {
    return {
      months: Math.floor(times.days / 30),
      days: Math.floor(times.days),
      hours: Math.floor(times.days * 24),
      minutes: Math.floor(times.days * 24 * 60),
    };
  }

  return times;
};
