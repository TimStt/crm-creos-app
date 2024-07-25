import {
  IDesignerTop,
  IUseGetTopDesignerParams,
} from "@/shared/types/disigner";
import { useEffect, useState } from "react";
import { getDesignersAndIssue } from "../../api/get-designer-and-issue";

import { findTopDesigners } from "../../utils/find-top-designer";

export const useGetTopDesigner = ({
  limit,
  medianUnit = "hours",
}: IUseGetTopDesignerParams) => {
  const [designersTop, setDesignersTop] = useState<IDesignerTop[]>([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const apiGetDesignersAndIssue = async () => {
      const { designers, issue } = await getDesignersAndIssue({ setSpinner });
      const designersTopList = findTopDesigners({
        designers,
        issue,
        limit,
        medianUnit,
      });

      setDesignersTop(designersTopList);
    };
    apiGetDesignersAndIssue();
  }, [limit, medianUnit]);

  return {
    spinner,
    designersTop,
  };
};
