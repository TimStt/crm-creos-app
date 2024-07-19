import { useEffect } from "react";

import { usePathname } from "../use-pathname";

export const useScrollIntoView = () => {
  const { query } = usePathname();
  useEffect(() => {
    console.log("useScrollIntoView");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  }, [query]);
};
