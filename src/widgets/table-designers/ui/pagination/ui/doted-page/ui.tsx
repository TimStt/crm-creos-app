import { IDotedPageUI } from "@/shared/types/ui";
import { memo } from "react";
import { Link } from "react-router-dom";

import style from "./doted-page.module.scss";
import { useActionsPagination } from "@/widgets/table-designers/hooks/use-action-pagination";

const DotedPage = memo(({ indexItem, totalCount, limitPage }: IDotedPageUI) => {
  const { createHref } = useActionsPagination(totalCount, limitPage);
  return (
    <Link className={style.root} to={createHref(indexItem)}>
      {indexItem}
    </Link>
  );
});

DotedPage.displayName = "DotedPage";

export default DotedPage;
