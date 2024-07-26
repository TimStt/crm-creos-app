import { HTMLAttributes } from "react";
import { IDesignersWithCountungTasks } from "../disigner";
import { TLocaleTranslate } from "../swithed";
import { IDesigner, IDesignerTop, TUnitData } from "../disigner/types";

export interface ISelectUI {
  dataList: string[];
  type: "multiple" | "single";
  onChange: (arg1: string) => void;
  value: string | undefined;
  classname?: string;
  title?: string;
  hiddenTextOption?: string;
  placeholder?: string;
}

export interface ICardDesignerTopUI {
  designer: IDesignerTop;
  UNIT_TOP: TUnitData;
}

export type ISelectWeekAgoUI = Partial<ISelectUI> & {
  dataListWeekAgo: string[];
};

export interface IPaginationUI {
  totalCount: number;
  limitPage: number;
}

export interface ITableUI {
  disagners: IDesignersWithCountungTasks[];
  locale: TLocaleTranslate;
}

export interface IPaginationButtonPageUI {
  page: number;
  locale: TLocaleTranslate;
  isLeft: boolean;
  classname?: string;
  totalCount: number;
  limitPage: number;
}

export interface IDotedPageUI {
  indexItem: number;
  totalCount: number;
  limitPage: number;
}

export interface IModelUI extends HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
  state?: boolean;
  isOpenFlex?: boolean;
}

export interface IMenuUI {
  onClickItem?: () => void | undefined;
  className?: string;
  locale: TLocaleTranslate;
}
