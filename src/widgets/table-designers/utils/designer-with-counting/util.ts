import { countingElementsByField } from "@/shared/utils/counting-elements-by-field/util";
import { IDesigner } from "@/shared/types/disigner/types";

export const countingTasksByDesigner = (designers: IDesigner[]) =>
  designers.map((designer) => ({
    ...designer,
    tasksCount: {
      new: countingElementsByField(designer.issues, "status", "New"),
      done: countingElementsByField(designer.issues, "status", "Done"),
      in_progress: countingElementsByField(
        designer.issues,
        "status",
        "In Progress"
      ),
    },
  }));
