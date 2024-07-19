import { IComment } from "@/shared/types/comment/types";

import axios from "axios";
import { IGetCommentsWithIssue } from "@/shared/types/api";

export const getCommentsWithIssue = async ({
  limit = 10,
}: IGetCommentsWithIssue): Promise<IComment[]> => {
  try {
    const { data: commentsList } = (await axios.get(`api/v1/comment`)) as {
      data: IComment[];
    };

    return commentsList.splice(0, limit);
  } catch (error) {
    console.log((error as Error).message);
  }
};
