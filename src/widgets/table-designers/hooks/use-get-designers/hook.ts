import { useEffect, useState } from "react";

import { IDesignersResponseWithCountungTasks } from "@/shared/types/disigner/types";

import { countingTasksByDesigner } from "../../utils/designer-with-counting";
import { usePathname } from "@/shared/hooks/use-pathname";
import { getDesigners } from "@/shared/api/disigner/get-designers";

export const useGetDesigners = () => {
  const [spinner, setSpinner] = useState(false);

  const { query } = usePathname();

  const [designersResponse, setDesignersResponse] =
    useState<IDesignersResponseWithCountungTasks>();

  // получение дизайнеров
  useEffect(() => {
    const queryParams = Object.fromEntries(query.entries());
    const fetchData = async () => {
      {
        const data = await getDesigners({ queryParams, setSpinner });

        setDesignersResponse({
          ...data,
          // считаем по количество задач для каждого дизайнера
          results: countingTasksByDesigner(data.results),
        });
      }
    };
    fetchData();
  }, [query]);

  return { designersResponse, spinner };
};
