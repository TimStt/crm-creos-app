import { getDesigners } from "@/shared/api/disigner/get-designers";
import { getIssues } from "@/shared/api/issue/get-issues";

export const getDesignersAndIssue = async ({
  setSpinner,
}: {
  setSpinner: (isLoading: boolean) => void;
}) => {
  try {
    setSpinner(true);
    const { results } = await getDesigners({ limit: "128" });

    const issue = await getIssues();

    return { designers: results, issue };
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setSpinner(false);
  }
};
