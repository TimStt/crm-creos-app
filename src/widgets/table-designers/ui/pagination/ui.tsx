import cls from "classnames";
import style from "./pagination.module.scss";
import { IPaginationUI } from "@/shared/types/ui";
import { ButtonPage } from "./ui/button-page";
import { useActionsPagination } from "../../hooks/use-action-pagination";
import { DotedPage } from "./ui/doted-page";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";

const Pagination = ({ totalCount, limitPage }: IPaginationUI) => {
  const locale = useSelector(selectorLocale);
  const { page, lengthPage, disabledDoted, visibleButton } =
    useActionsPagination(totalCount, limitPage);
  console.log("render pagination", page);

  if (totalCount)
    return (
      <ul className={style.root}>
        {visibleButton(1) && (
          <li className={style.root__itemText}>
            <ButtonPage
              page={page}
              locale={locale}
              isLeft={true}
              totalCount={totalCount}
              limitPage={limitPage}
            />
          </li>
        )}
        {Array.from({ length: lengthPage }).map((_, index) => {
          return (
            <li
              className={cls(style.root__item, {
                [style.isActive]: index + 1 === page,
                [style.isDisabled]: disabledDoted(index + 1),
              })}
              key={index}
            >
              <DotedPage
                indexItem={index + 1}
                totalCount={totalCount}
                limitPage={limitPage}
              />
            </li>
          );
        })}

        {visibleButton(lengthPage) && (
          <li className={style.root__itemText}>
            <ButtonPage
              page={page}
              locale={locale}
              isLeft={false}
              totalCount={totalCount}
              limitPage={limitPage}
            />
          </li>
        )}
      </ul>
    );
};

export default Pagination;
