import { IDesigner } from "../disigner";
import { IIssue } from "../issue";

export interface IComment {
  id: number;
  issue: string;
  designer: Omit<IDesigner, "issues">;

  date_created: string;
  message: string;
}

export interface ICommentsListWithIssue extends Omit<IComment, "issue"> {
  issue: IIssue;
}

export interface ILastCommitsState {
  lastCommits: IComment[];
  isLoading: boolean;
}
