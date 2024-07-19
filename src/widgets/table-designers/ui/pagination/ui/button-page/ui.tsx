import cls from "classnames";
import style from "./button-page.module.scss";

import { localeTranslate } from "@/shared/config/locale-translate";
import { Link } from "react-router-dom";
import { IPaginationButtonPageUI } from "@/shared/types/ui";
import { useActionsPagination } from "@/widgets/table-designers/hooks/use-action-pagination";

const ButtonPage = ({
  page,
  locale,
  isLeft,
  classname,
  totalCount,
  limitPage,
}: IPaginationButtonPageUI) => {
  const { other } = localeTranslate[locale];
  const { createHref } = useActionsPagination(totalCount, limitPage);
  return (
    <Link
      className={cls(style.root, classname, {
        [style.iconLeft]: isLeft,
      })}
      to={createHref(isLeft ? page - 1 : page + 1)}
    >
      <svg
        className={cls(style.root__icon)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fillOpacity=".4"
          fillRule="evenodd"
          d="m11.46 15.53-5.47-5.47L7.05 9l4.94 4.94L16.94 9 18 10.06l-5.48 5.47a.75.75 0 0 1-1.06 0Z"
        />
      </svg>
      <span>{other[isLeft ? "previous_page" : "next_page"]}</span>
    </Link>
  );
};

export default ButtonPage;
