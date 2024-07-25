import cls from "classnames";
import { Spinner } from "@/shared/ui/spinner";
import style from "./commits.module.scss";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { localeTranslate } from "@/shared/config/locale-translate";
import { CardCommit } from "./ui/card-commit";
import { useGetCommits } from "./hooks/use-get-commits";
import { useSelector } from "react-redux";

const Commits = () => {
  const locale = useSelector(selectorLocale);

  const { titles, other } = localeTranslate[locale];

  const { lastCommits, loadingCommits } = useGetCommits();

  return (
    <section className={cls(style.root, "container")}>
      <h2 className={style.root__title}>
        {titles.recent_comments_on_the_tasks}
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
          <li>{other.no_comments}</li>
        </ul>
      )}
    </section>
  );
};

export default Commits;
