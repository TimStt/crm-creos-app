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
