import React, { use, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCatalag } from "../../store/slice";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import cls from "classnames";
import style from "./pagination.module.scss";

import Icon from "@/shared/ui/icon";
import { useUrlParams } from "@/shared/utils/url";

export const Pagination = () => {
  const { count, limitPage } = useSelector(selectIsCatalag);
  const { params } = useUrlParams();
  const page = parseInt(params.get("page") as string, 10) || 1;

  const pathname = usePathname();

  const lengthPage = Math.ceil(count / limitPage);

  const createHref = (index: number) => {
    params.set("page", index.toString());

    return `${pathname}?${params.toString()}`;
  };

  const disabledItem = (index: number) =>
    page ? index + 1 < page || index >= page + 2 : true;

  if (count)
    return (
      <ul className={style.root}>
        {page && page !== 1 && (
          <li className={style.root__itemText}>
            <Link
              className={style.root__itemText__button}
              href={createHref(page - 1)}
              scroll={true}
            >
              <Icon
                className={style.root__itemText__leftIcon}
                name="common/arrow2"
              />
              <span>Предыдущая страница</span>
            </Link>
          </li>
        )}
        {Array.from({ length: lengthPage }).map((_, index) => {
          const indexItem = index + 1;

          return (
            <li
              key={index}
              className={cls(style.root__item, {
                [style.isActive]: indexItem === page,
                [style.isDisabled]: disabledItem(indexItem),
              })}
            >
              <Link
                className={style.root__item__doted}
                href={createHref(indexItem)}
                scroll={true}
              >
                {indexItem}
              </Link>
            </li>
            // <li>
            //   {indexItem ===}
            // </li>
          );
        })}

        {page && page !== lengthPage && (
          <li className={style.root__itemText}>
            <Link
              className={style.root__itemText__button}
              href={createHref(page + 1)}
            >
              <span>Следующая страница</span>
              <Icon name="common/arrow2" />
            </Link>
          </li>
        )}
      </ul>
    );
};
