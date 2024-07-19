import { usePathname } from "@/shared/hooks/use-pathname";
import { useEffect } from "react";

export const useSetDefoultQuery = () => {
  const { query, location, navigate } = usePathname();

  const page = query.get("page");

  useEffect(() => {
    if (!page?.length) {
      query.set("page", "1");
      navigate(`?${query.toString()}`);
    }
  }, [location, navigate, page, query]);
};
