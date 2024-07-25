import { IGetDesigners } from "@/shared/types/api";

import { IDesignersResponse } from "@/shared/types/disigner/types";
import axios from "axios";

export const getDesigners = async ({
  queryParams,
  setSpinner,
}: IGetDesigners): Promise<IDesignersResponse> => {
  try {
    setSpinner && setSpinner(true);
    const queryParamFilters = new URLSearchParams({
      ...queryParams,
    }).toString();

    const { data } = await axios.get<IDesignersResponse>(
      `api/v1/designer/?${!!queryParams ? queryParamFilters : ""}`
    );
    return data;
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setSpinner && setSpinner(false);
  }
};
