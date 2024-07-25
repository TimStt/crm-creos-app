import { TStatusIssues } from "../issue/types";

export interface IQueryParams {
  limit?: string;
  status?: TStatusIssues;
  key?: string;
  ordering?: string;
  page?: string;
}

export interface IGetComments {
  limit?: number;
  setSpinner?: TSetSpinner;
}

export interface IGetDesigners {
  queryParams?: IQueryParams;
  setSpinner?: TSetSpinner;
}

export type TSetSpinner = (state: boolean) => void;
