import { Select } from "@/shared/ui/select";

import { useSortActions } from "./hooks/use-actions-sort/hook";

const SelectSort = ({ classname }: { classname?: string }) => {
  const {
    currentLabelSelect,
    listLabelsSelect,
    handlerChangeSort,
    otherTranslate,
  } = useSortActions();

  return (
    <Select
      classname={classname}
      dataList={listLabelsSelect}
      type={"single"}
      onChange={handlerChangeSort}
      value={!!currentLabelSelect?.length ? currentLabelSelect : ""}
      placeholder={otherTranslate.sort_by}
      title="title"
    />
  );
};

export default SelectSort;
