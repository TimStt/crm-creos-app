import { localeTranslate } from "@/shared/config/locale-translate";
import { TLocaleTranslate } from "@/shared/types/swithed";

export const getRelativeDate = (date: Date, locale: TLocaleTranslate) => {
  const currentDate = new Date();
  const diff = currentDate.getTime() - date.getTime();

  let min: number = 0;
  let hours: number = 0;
  let mounth: number = 0;

  let days = diff / (24 * 60 * 60 * 1000);

  if (!Number.isInteger(days)) {
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
  console.log(days, hours, min);

  return `${
    mounth ? localeTranslate[locale].time[`_${mounth}_months_ago`] : ""
  } ${days ? localeTranslate[locale].time[`_${days}_days_ago`] : ""} ${
    localeTranslate[locale].time[`_${hours}_hours_ago`]
  } ${localeTranslate[locale].time[`_${min}_minutes_ago`]} ${
    localeTranslate[locale].time.ago
  }
  `;
};
