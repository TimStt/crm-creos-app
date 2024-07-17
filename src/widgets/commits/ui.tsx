import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastCommitsWithUssueThunk,
  selectorLastCommits,
  selectorloadingCommits,
} from "./store";
import { Spinner } from "@/shared/ui/spinner";

import style from "./commits.module.scss";
import cls from "classnames";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { localeTranslate } from "@/shared/config/locale-translate";
import { CardCommit } from "./ui/card-commit";

const Commits = () => {
  const lastCommits = useSelector(selectorLastCommits);
  const loadingCommits = useSelector(selectorloadingCommits);
  const dispatch = useDispatch<AppDispatch>();

  const locale = useSelector(selectorLocale);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getLastCommitsWithUssueThunk({}));
    }, 10000);
  }, [dispatch]);

  return (
    <section className={cls(style.root, "container")}>
      <h2 className={style.root__title}>
        {localeTranslate[locale].titles.recent_comments_on_the_tasks}
      </h2>
      {loadingCommits ? (
        <div className={style.root__spinner}>
          <Spinner size={50} />
        </div>
      ) : lastCommits?.length ? (
        <>
          <ul className={style.root__list}>
            {lastCommits.map((commit) => (
              <li key={commit.id}>
                <CardCommit commit={commit} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul>
          <li>No commits</li>
        </ul>
      )}
    </section>
  );
};

export default Commits;
