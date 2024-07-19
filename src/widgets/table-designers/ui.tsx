import { Spinner } from "@/shared/ui/spinner";
import { Pagination } from "./ui/pagination";
import { useGetDesigners } from "./hooks/use-get-designers";
import { useSetDefoultQuery } from "./hooks/use-set-defoult-query/hook";
import { TableList } from "./ui/table-list";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import style from "./table-designers.module.scss";
import cls from "classnames";
import { localeTranslate } from "@/shared/config/locale-translate";
import { SelectSort } from "./ui/select-sort";
import { SelectStatusFilter } from "./ui/filter-by-status";
import { CleanQueryButton } from "./ui/clean-query-button";

const TableDesigners = () => {
  const { designersResponse, spinner } = useGetDesigners();
  const locale = useSelector(selectorLocale);

  const { titles } = localeTranslate[locale];

  useSetDefoultQuery();

  return (
    <section className={cls(style.root, "container")}>
      <h1 className={cls(style.root__title, "title-h1-fluid")}>
        {titles.table_designers}
      </h1>

      {!spinner ? (
        <>
          {" "}
          <div className={style.root__selects}>
            <div className={style.root__selects__block}>
              <SelectSort classname={style.root__select} />
              <SelectStatusFilter classname={style.root__select} />
            </div>

            <CleanQueryButton classname={style.root__btnCleanQuery} />
          </div>
          {!!designersResponse?.results?.length ? (
            <>
              <TableList
                designer={designersResponse?.results}
                locale={locale}
              />
              <Pagination
                totalCount={designersResponse?.count || 0}
                limitPage={designersResponse?.results?.length || 0}
              />
            </>
          ) : (
            <span>Нет данных :(</span>
          )}
        </>
      ) : (
        <div className={style.root__spinner}>
          <Spinner size={50} />
        </div>
      )}
    </section>
  );
};

export default TableDesigners;
