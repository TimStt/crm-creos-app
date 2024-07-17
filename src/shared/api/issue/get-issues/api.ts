import { IIssue } from "@/shared/types/issue";
import axios from "axios";

export const getIssues = async (): Promise<IIssue[]> => {
  try {
    const { data: issue } = await axios.get<IIssue[]>(`api/v1/issue`);
    return issue;
  } catch (error) {
    console.log((error as Error).message);
  }
};
