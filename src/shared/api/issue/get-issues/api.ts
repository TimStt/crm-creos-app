import { TSetSpinner } from "@/shared/types/api";
import { IIssue } from "@/shared/types/issue";
import axios from "axios";

export const getIssues = async ({
  setSpinner,
}: {
  setSpinner?: TSetSpinner;
}): Promise<IIssue[]> => {
  try {
    setSpinner && setSpinner(true);
    const { data: issue } = await axios.get<IIssue[]>(`api/v1/issue`);
    return issue;
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setSpinner && setSpinner(false);
  }
};
