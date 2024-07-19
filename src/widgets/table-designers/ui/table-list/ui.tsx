import { IDesignersWithCountungTasks } from "@/shared/types/disigner";

import style from "./table-list.module.scss";

import { TLocaleTranslate } from "@/shared/types/swithed";
import { localeTranslate } from "@/shared/config/locale-translate";

const TableList = ({
  designer,
  locale,
}: {
  locale: TLocaleTranslate;
  designer: IDesignersWithCountungTasks[];
}) => {
  const { titles } = localeTranslate[locale];
  return (
    <div className={style.root__wrapper}>
      <table className={style.root}>
        <thead className={style.root__head}>
          <tr className={style.root__head__row}>
            <th>{titles.photograph}</th>
            <th>{titles.name}</th>
            <th>{titles.mail}</th>
            <th>{titles.tasks_count_in_progress}</th>
            <th>{titles.tasks_count_done}</th>
          </tr>
        </thead>
        <tbody className={style.root__body}>
          {designer.map((item) => (
            <tr className={style.root__body__row} key={item.email}>
              <td>
                <img
                  className={style.root__body__img}
                  src={item.avatar}
                  alt={item.username}
                />
              </td>
              <td>
                <span>{item.username}</span>
              </td>
              <td>
                <span>{item.email}</span>
              </td>
              <td>
                <span>{item.tasksCount.in_progress}</span>
              </td>
              <td>
                <span>{item.tasksCount.done}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
