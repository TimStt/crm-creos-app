import { IComment } from "@/shared/types/comment/types";
import style from "./card-commit.module.scss";
import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import { getRelativeDate } from "@/shared/utils/get-relative-date";

const CardCommit = ({ commit }: { commit: IComment }) => {
  const locale = useSelector(selectorLocale);
  const times = getRelativeDate(new Date(commit.date_created), true);

  const { time: timeTranslate, other: otherTranslate } =
    localeTranslate[locale];

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
        <span id={`${commit.id}-designer_name`}>
          {commit.designer.username}
        </span>
      </div>

      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-date`}>
          {" "}
          {otherTranslate.a_comment_has_been_left}:
        </label>
        <p className={style.root__time} id={`${commit.id}-date`}>
          {Object.entries(times).map(
            ([key, value]) =>
              !!value && (
                <span key={key}>{timeTranslate[`_${value}_${key}_ago`]}</span>
              )
          )}
          <span>{timeTranslate.ago.toLowerCase()}</span>
        </p>
      </div>

      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-comment`}>
          {" "}
          {localeTranslate[locale].other.comment}:
        </label>
        <p className={style.root__discription} id={`${commit.id}-comment`}>
          {" "}
          {commit.message}
        </p>
      </div>

      <div className={style.root__group}>
        <label htmlFor={`${commit.id}-task`}>
          {" "}
          {localeTranslate[locale].other.task}:
        </label>
        <span id={`${commit.id}-task`}> {issue}</span>
      </div>
    </article>
  );
};

export default CardCommit;
