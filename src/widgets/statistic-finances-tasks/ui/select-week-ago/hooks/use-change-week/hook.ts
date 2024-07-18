import { usePathname } from "@/shared/hooks/use-pathname";
import { useEffect } from "react";

export const useChangeWeek = (defaultWeeksAgo: number) => {
  const { query, navigate, location } = usePathname();
  const weeksAgo = query.get("weeksAgo");

  const onChange = (value: string) => {
    query.set("weeksAgo", value.split(" ")[0]);
    navigate(`${location.pathname}?${query.toString()}`);
  };

  useEffect(() => {
    if (!weeksAgo) {
      query.set("weeksAgo", defaultWeeksAgo.toString());
      navigate(`${location.pathname}?${query.toString()}`);
    }
  }, [defaultWeeksAgo, location.pathname, navigate, query, weeksAgo]);

  return { weeksAgo, onChange };
};
