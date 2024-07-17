import { IQueryParams } from "@/shared/types/api";

import { IDesigner } from "@/shared/types/disigner";
import axios from "axios";

export const getDesigners = async (
  queryParam: IQueryParams
): Promise<IDesigner[]> => {
  try {
    const queryParamFilters = new URLSearchParams({
      ...queryParam,
    }).toString();

    const { data } = await axios.get<{ results: IDesigner[] }>(
      `api/v1/designer/?${!!queryParam ? queryParamFilters : ""}`
    );
    return data.results;
  } catch (error) {
    console.log((error as Error).message);
    return [];
  }
};
