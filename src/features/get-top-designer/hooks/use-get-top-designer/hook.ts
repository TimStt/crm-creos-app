import {
  IDesignerTop,
  IUseGetTopDesignerParams,
} from "@/shared/types/disigner";
import { useEffect, useState } from "react";
import { getDesignersAndIssue } from "../../api/get-designer-and-issue";
import { useDispatch } from "react-redux";

import { findTopDesigners } from "../../utils/find-top-designer";

export const useGetTopDesigner = ({
  limit,
  medianUnit = "hours",
}: IUseGetTopDesignerParams) => {
  const [designersTop, setDesignersTop] = useState<IDesignerTop[]>([]);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const apiGetDesignersAndIssue = async () => {
      try {
        const { designers, issue } = await getDesignersAndIssue({ setSpinner });
        const designersTopList = findTopDesigners({
          designers,
          issue,
          limit,
          medianUnit,
        });

        setDesignersTop(designersTopList);
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    apiGetDesignersAndIssue();
  }, [dispatch, limit, medianUnit]);

  return {
    spinner,
    designersTop,
  };
};
