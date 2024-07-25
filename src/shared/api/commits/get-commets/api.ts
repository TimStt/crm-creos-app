import { IComment } from "@/shared/types/comment/types";

import axios from "axios";
import { IGetComments } from "@/shared/types/api";

export const getComments = async ({
  setSpinner,
}: IGetComments): Promise<IComment[]> => {
  // отправка запроса для получения последних комментариев
  try {
    setSpinner(true);
    const { data: commentsList } = (await axios.get(`api/v1/comment`)) as {
      data: IComment[];
    };

    return commentsList;
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setSpinner(false);
  }
};
