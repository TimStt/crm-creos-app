import { Select } from "@/shared/ui/select";
import { useStatusFilterActions } from "./hooks/use-actions-status-filter";

const SelectStatusFilter = ({ classname }: { classname?: string }) => {
  const {
    currentLabelSelect,
    listLabelsSelect,
    handlerChangeStatusFilter,
    otherTranslate,
  } = useStatusFilterActions();

  return (
    <Select
      classname={classname}
      dataList={listLabelsSelect}
      type={"single"}
      onChange={handlerChangeStatusFilter}
      value={!!currentLabelSelect?.length ? currentLabelSelect : ""}
      placeholder={otherTranslate.filter_by_status}
      title="title"
    />
  );
};

export default SelectStatusFilter;
