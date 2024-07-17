import {
  IDesigner,
  IDesignerTop,
  IUseGetTopDesignerParams,
} from "@/shared/types/disigner";
import { useCallback, useEffect, useState } from "react";
import { getDesignersAndIssue } from "../../api/get-designer-and-issue";
import { useDispatch } from "react-redux";
import { IIssue } from "@/shared/types/issue";

import { getRelativeDate } from "@/shared/utils/get-relative-date";
import { findMedian } from "@/shared/utils/median-finding";

export const useGetTopDesigner = ({
  limit,
  medianUnit = "hours",
}: IUseGetTopDesignerParams) => {
  const [designersTop, setDesignersTop] = useState<IDesignerTop[]>([]);
  const [spinner, setSpinner] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const findTopDesigners = useCallback(
    ({ designers, issue }: { designers: IDesigner[]; issue: IIssue[] }) => {
      const disignerWithIssues = designers.map((designer) => {
        const issueWithDesigner = issue.filter(
          (issue) =>
            issue.status == "Done" && issue.designer === designer.username
        );
        return {
          ...designer,
          issues: issueWithDesigner,
        };
      });

      //

      const disagnersMedianTaskCount = disignerWithIssues.map(
        ({ issues, ...disigners }) => {
          const diffTime = issues.map(
            ({
              date_finished_by_designer: end,
              date_started_by_designer: start,
            }) =>
              getRelativeDate(new Date(start), false, new Date(end))[medianUnit]
          );
          const medianTime = findMedian(diffTime);
          return {
            avatar: disigners.avatar,
            username: disigners.username,
            mediantime: medianTime,
            task_count: issues.length,
          };
        }
      );

      // sort by median asc  time and task count desc
      disagnersMedianTaskCount
        .sort((a, b) => a.mediantime - b.mediantime)
        .sort((a, b) => b.task_count - a.task_count);

      return disagnersMedianTaskCount.splice(0, limit);
    },
    [limit, medianUnit]
  );

  useEffect(() => {
    const apiGetDesignersAndIssue = async () => {
      try {
        const { designers, issue } = await getDesignersAndIssue({ setSpinner });
        const designersTopList = findTopDesigners({ designers, issue });

        setDesignersTop(designersTopList);
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    apiGetDesignersAndIssue();
  }, [dispatch, findTopDesigners]);

  return {
    spinner,
    designersTop,
  };
};
