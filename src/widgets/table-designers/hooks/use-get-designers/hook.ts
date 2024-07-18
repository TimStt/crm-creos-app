import { useEffect, useState } from "react";

import { getDesigners } from "@/shared/api/disigner/get-designers";
import { IQueryParams } from "@/shared/types/api";
import { IDesignersResponse } from "@/shared/types/disigner/types";

export const useGetDesigners = (queryParams: IQueryParams) => {
  const [spinner, setSpinner] = useState(false);

  const [designersResponse, setDesignersResponse] =
    useState<IDesignersResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true);
        const data = await getDesigners(queryParams);
        setDesignersResponse(data);
      } catch (error) {
        console.log((error as Error).message);
      } finally {
        setSpinner(false);
      }
    };
    fetchData();
  }, [queryParams]);

  return { designersResponse, spinner };
};
