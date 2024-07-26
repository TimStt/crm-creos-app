import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";

import style from "./top-designer.module.scss";
import { useSelector } from "react-redux";
import cls from "classnames";

import { useGetTopDesigner } from "@/features/get-top-designer";
import { Spinner } from "@/shared/ui/spinner";
import { TUnitData } from "@/shared/types/disigner/types";
import { CardDesigner } from "./ui/card-designer";

const TopDesigner = () => {
  const locale = useSelector(selectorLocale);
  const UNIT_TOP: TUnitData = "hours";
  const { designersTop, spinner } = useGetTopDesigner({
    limit: 10,
    medianUnit: UNIT_TOP,
  });
  const { titles, other } = localeTranslate[locale];

  return (
    <section className={cls(style.root, "container")}>
      <h2 className={cls(style.root__title, "title-h2-fluid")}>
        {titles.top_10_designers}
      </h2>
      {!spinner ? (
        designersTop?.length ? (
          <ol className={style.root__list}>
            {designersTop.map((designer) => (
              <li className={style.root__item} key={designer.username}>
                <CardDesigner designer={designer} UNIT_TOP={UNIT_TOP} />
              </li>
            ))}
          </ol>
        ) : (
          <div className={style.root__not_found}>
            <span>{other.designers_not_found}</span>
          </div>
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
