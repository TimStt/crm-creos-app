import { getIssues } from "@/shared/api/issue/get-issues";
import { IIssue } from "@/shared/types/issue";
export const getAllIssue = async (): Promise<IIssue[]> => {
  try {
    return await getIssues();
  } catch (error) {
    console.log((error as Error).message);
  }
};
