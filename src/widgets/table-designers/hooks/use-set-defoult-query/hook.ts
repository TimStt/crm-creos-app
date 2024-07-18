import { usePathname } from "@/shared/hooks/use-pathname";
import { useEffect } from "react";

export const useSetDefoultQuery = () => {
  const { query } = usePathname();

  const page = query.get("page");

  useEffect(() => {
    if (!page) {
      query.set("page", "1");
    }
  }, [page, query]);
};
