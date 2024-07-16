import { apiInstance } from "@/shared/config/api/apiinstance";

import { IIssue } from "@/shared/types/issue";

export const getOneIssue = async (issueKey: string): Promise<IIssue> => {
  try {
    const { data: issue } = (await apiInstance.get(
      `/issue/?key = ${issueKey}`
    )) as { data: IIssue };
    return issue;
  } catch (error) {
    console.log((error as Error).message);
  }
};
