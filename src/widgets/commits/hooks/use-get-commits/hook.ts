import { useEffect, useState } from "react";

import { IComment } from "@/shared/types/comment";

import { getComments } from "@/shared/api/commits/get-commets";
import { sortByLastComments } from "../../utils/sort-by-last-comments";

export const useGetCommits = () => {
  const [lastCommits, setLastCommits] = useState<IComment[]>([]);
  const [loadingCommits, setLoadingCommits] = useState<boolean>(false);

  // получение последних комментариев с последними задачами
  useEffect(() => {
    const getLastCommits = async () => {
      const lastCommits = await getComments({ setSpinner: setLoadingCommits });
      setLastCommits(sortByLastComments(lastCommits, "date_created", 10));
    };
    getLastCommits();
  }, []);

  return {
    lastCommits,
    loadingCommits,
  };
};
