import { getDesigners } from "@/shared/api/disigner/get-designers";
import { getIssues } from "@/shared/api/issue/get-issues";
import { TSetSpinner } from "@/shared/types/api";

export const getDesignersAndIssue = async ({
  setSpinner,
}: {
  setSpinner: TSetSpinner;
}) => {
  try {
    setSpinner(true);
    const [designers, issues] = await Promise.all([
      getDesigners({
        queryParams: {
          limit: "128",
        },
      }),
      getIssues({}),
    ]);

    return {
      designers: designers.results,
      issue: issues,
    };
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setSpinner(false);
  }
};
