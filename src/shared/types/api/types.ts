import { TStatusIssues } from "../issue/types";

export interface IQueryParams {
  limit?: string;
  status?: TStatusIssues;
  key?: string;
  ordering?: string;
  page?: string;
}

export interface IGetCommentsWithIssue {
  limit?: number;
}
