import { IComment } from "@/shared/types/comment/types";
import style from "./card-commit.module.scss";
import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import { getRelativeDate } from "@/shared/utils/get-relative-date";

const CardCommit = ({ commit }: { commit: IComment }) => {
  const locale = useSelector(selectorLocale);
  const { mounth, days, hours, min } = getRelativeDate(
    new Date(commit.date_created)
  );
  const { issue } = commit;
  return (
    <article className={style.root}>
      <img
        className={style.root__avatar}
        src={commit.designer.avatar}
        alt={commit.designer.username}
      />
      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-designer_name`}>
          {" "}
          {localeTranslate[locale].other.designer_name}:
        </label>
        <span id={`${commit.id}-date`}>{commit.designer.username}</span>
      </div>

      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-date`}>
          {" "}
          {localeTranslate[locale].other.a_comment_has_been_left}:
        </label>
        <span>
          {`${
            mounth ? localeTranslate[locale].time[`_${mounth}_months_ago`] : ""
          } ${days ? localeTranslate[locale].time[`_${days}_days_ago`] : ""} ${
            localeTranslate[locale].time[`_${hours}_hours_ago`]
          } ${localeTranslate[locale].time[`_${min}_minutes_ago`]} ${
            localeTranslate[locale].time.ago
          }
  `}
        </span>
      </div>

      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-comment`}>
          {" "}
          {localeTranslate[locale].other.comment}:
        </label>
        <p className={style.root__discription}> {commit.message}</p>
      </div>

      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-task`}>
          {" "}
          {localeTranslate[locale].other.task}:
        </label>
        <span> {issue}</span>
      </div>

      {/* <details className={style.root__accordion}>
        <summary
          className={style.root__accordion__summary}
          role="term"
          aria-details="content-discription"
          title={localeTranslate[locale].other.open_task_description}
        >
          <span>{localeTranslate[locale].other.task}:</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              fill="#E8E9EA"
              fill-rule="evenodd"
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
          <span>
            {localeTranslate[locale].other.name_project}: {issue}
          </span>

          <span>
            {localeTranslate[locale].other.status}: {issue.status}
          </span>

          <p className={style.root__discription}>
            {localeTranslate[locale].other.summury}: {issue.summary}
          </p>
        </div>
      </div> */}
    </article>
  );
};

export default CardCommit;
