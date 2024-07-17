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
      <h2>{titles.top_10_designers}</h2>
      {!spinner ? (
        designersTop?.length ? (
          <ul>
            {designersTop.map((designer) => (
              <li key={designer.username}>
                <img
                  src={designer.avatar}
                  alt={`${designer.username}'s avatar`}
                />
                <span>
                  {other.designer_name}: {designer.username}
                </span>
                <span>
                  {other.task_count}: {designer.task_count}
                </span>
                <span>
                  {other.mediana_tasks}: {designer.mediantime} (единица
                  измерения: {time[UNIT_TOP]})
                </span>
              </li>
            ))}
          </ul>
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
