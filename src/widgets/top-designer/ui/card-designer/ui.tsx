import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";

import { ICardDesignerTopUI } from "@/shared/types/ui";
import { useSelector } from "react-redux";
import style from "./card-designer.module.scss";

const CardDesigner = ({ designer, UNIT_TOP }: ICardDesignerTopUI) => {
  const locale = useSelector(selectorLocale);
  const { other, time } = localeTranslate[locale];
  return (
    <div className={style.root}>
      {" "}
      <h3 className={style.root__title}>
        <span>{designer.username}</span>
      </h3>
      <details className={style.root__accordion}>
        <summary
          className={style.root__accordion__summary}
          role="term"
          aria-details="content-discription"
          title={other.open_detailed_characteristics}
        >
          <span>{other.learn_more}:</span>

          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              d="M11.25 12.75V21h1.5v-8.25H21v-1.5h-8.25V3h-1.5v8.25H3v1.5h8.25Z"
            />
          </svg>
        </summary>
      </details>
      <div
        className={style.root__accordion__content}
        id="content-discription"
        role="definition"
      >
        <div className={style.root__accordion__wrapper}>
          <img
            className={style.root__accordion__img}
            src={designer.avatar}
            alt={`${designer.username}'s avatar`}
          />
          <span>
            {other.task_count}: {designer.task_count}
          </span>

          <span>
            {other.mediana_tasks}: {designer.mediantime} ({time.unit}:{" "}
            {time[UNIT_TOP]})
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDesigner;
