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

  useEffect(() => {
    const queryParams = Object.fromEntries(query.entries());
    const fetchData = async () => {
      try {
        setSpinner(true);
        const data = await getDesigners(queryParams);
        const designerWithCounting = countingTasksByDesigner(data.results);
        const newData = {
          ...data,
          results: designerWithCounting,
        };

        setDesignersResponse(newData);
        console.log("123");
      } catch (error) {
        console.log((error as Error).message);
      } finally {
        setSpinner(false);
      }
    };

    fetchData();
  }, [query]);

  return { designersResponse, spinner };
};
