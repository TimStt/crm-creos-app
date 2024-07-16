import { IIssue } from "../issue/types";

export interface IDesigner {
  id: string;
  avatar: string;
  username: string;
  email: string;
  thumbnails: IThumbnails;
  issues: IIssueDisigner[];
}

export interface IIssueDisigner {
  id: IIssue["id"];
  date_created: IIssue["date_created"];
  status: IIssue["status"];
}

export interface IThumbnails {
  avatar: string;
  avatar_2x: string;
  avatar_webp: string;
  avatar_webp_2x: string;
}
