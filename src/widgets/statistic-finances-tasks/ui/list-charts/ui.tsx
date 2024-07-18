import { TDataListFinancesTasks } from "@/shared/types/issue/types";

import style from "./list-charts.module.scss";
import { BarItem } from "../bar-item";
import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";

const ListCharts = ({
  dataByFinancesTasks,
}: {
  dataByFinancesTasks: TDataListFinancesTasks;
}) => {
  const locale = useSelector(selectorLocale);
  const { other } = localeTranslate[locale];
  return (
    <ul className={style.root}>
      {!!dataByFinancesTasks?.length ? (
        dataByFinancesTasks.map((item, i) => (
          <li className={style.root__item} key={i}>
            <BarItem dataChart={item} key={i} />
          </li>
        ))
      ) : (
        <>
          {" "}
          <li>{other.no_data}</li>{" "}
        </>
      )}
    </ul>
  );
};

export default ListCharts;
