import { IQueryParams } from "@/shared/types/api";

import { IDesignersResponse } from "@/shared/types/disigner/types";
import axios from "axios";

export const getDesigners = async (
  queryParam: IQueryParams
): Promise<IDesignersResponse> => {
  try {
    const queryParamFilters = new URLSearchParams({
      ...queryParam,
    }).toString();

    const { data } = await axios.get<IDesignersResponse>(
      `api/v1/designer/?${!!queryParam ? queryParamFilters : ""}`
    );
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
};
