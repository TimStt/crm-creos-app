import { IComment } from "@/shared/types/comment";

export const sortByLastComments = (
  comments: IComment[],
  sortBy: keyof IComment,
  limit: number
): IComment[] => {
  const sortedComments = comments
    .sort((a, b) => {
      if (sortBy === "date_created")
        return new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime();
      else if (sortBy === "message") return b[sortBy].length - a[sortBy].length;
    })
    .slice(0, limit);
  return sortedComments;
};
