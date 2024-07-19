import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";

import style from "./top-designer.module.scss";
import { useSelector } from "react-redux";
import cls from "classnames";

import { useGetTopDesigner } from "@/features/get-top-designer";
import { Spinner } from "@/shared/ui/spinner";

const TopDesigner = () => {
  const locale = useSelector(selectorLocale);
  const UNIT_TOP = "hours";
  const { designersTop, spinner } = useGetTopDesigner({
    limit: 10,
    medianUnit: UNIT_TOP,
  });
  const { titles, other, time } = localeTranslate[locale];

  return (
    <section className={cls(style.root, "container")}>
      <h2 className={cls(style.root__title, "title-h2-fluid")}>
        {titles.top_10_designers}
      </h2>
      {!spinner ? (
        designersTop?.length ? (
          <ol className={style.root__list}>
            {designersTop.map((designer) => (
              <li key={designer.username} className={style.root__list__item}>
                <h3 className={style.root__list__title}>
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
              </li>
            ))}
          </ol>
        ) : (
          <span>No designers</span>
        )
      ) : (
        <div className={style.root__spinner}>
          <Spinner size={50} />
        </div>
      )}
    </section>
  );
};

export default TopDesigner;
