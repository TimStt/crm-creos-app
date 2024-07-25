import { ChartData } from "chart.js";

export interface IIssue {
  id: string;
  status: TStatusIssues;
  designer: string;
  project: string;
  date_created: string;
  summary: string;
  received_from_client: number;
  send_to_project_manager: number;
  send_to_account_manager: number;
  send_to_designer: number;
  date_updated: string;
  date_started_by_designer: string;
  date_finished_by_designer: string;
  date_finished: string;
}

export interface IIssueWithNumberWeek extends IIssue {
  numberWeek: number;
}

export interface IWeeklySortedValues {
  week: number;
  value: number;
}

export type ICalculatedFieldsByIssue =
  | "received_from_client"
  | ["send_to_project_manager", "send_to_account_manager", "send_to_designer"];

export type TStatusIssues = "Done" | "In Progress" | "New";

export interface ICalcOfdataForClosedTasksArgs {
  weeksAgo?: number;
  issues: IIssue[];
}

export type IUseTriggerGetDataIssueArgs = Omit<
  ICalcOfdataForClosedTasksArgs,
  "issues"
>;

export interface ICountOfStatuses {
  new: number;
  done: number;
  in_progress: number;
}

export interface IFieldsByFinancesTasks {
  finances: IFinaces;

  allTasksForPeriod: IIssueWithNumberWeek[];

  periodWeeksNumber: number[];
}

export interface IFinaces {
  profit: number[];
  expenditure: number[];
  variance: number[];
}

export interface IIssuesInitialState {
  loading: boolean;
  issues: IIssue[];
}

export type TDataChartFinancesTasks = ChartData<"bar">;
export type TDataListFinancesTasks = TDataChartFinancesTasks[];
