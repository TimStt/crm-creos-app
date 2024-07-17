import { ICommentsList } from "@/shared/types/comment/types";

import axios from "axios";
import { IGetCommentsWithIssue } from "@/shared/types/api";

export const getCommentsWithIssue = async ({
  limit = 10,
}: IGetCommentsWithIssue): Promise<ICommentsList[]> => {
  try {
    // const filterQueryParam = new URLSearchParams({
    //   ...queryParam,
    // }).toString();

    const { data: commentsList } = (await axios.get(`api/v1/comment`)) as {
      data: ICommentsList[];
    };

    // for (const comment of commentsList.slice(0, limit)) {
    //   const issue = await getOneIssue(comment.issue);
    //   const newComment = {
    //     ...comment,
    //     issue: issue,
    //   } as unknown as ICommentsListWithIssue;

    //   commentsListWithIssue.push(newComment);
    // }

    return commentsList.splice(0, limit);
  } catch (error) {
    console.log((error as Error).message);
  }
};
