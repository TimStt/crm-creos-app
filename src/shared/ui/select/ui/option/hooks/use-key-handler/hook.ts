import { ISelectUI } from "@/shared/types/ui";
import { useEffect } from "react";

const useKeyHandler = (
  refOption: React.MutableRefObject<HTMLLIElement | null>,
  onChange: ISelectUI["onChange"],
  item: string,
  setIsOpenList: (state: boolean) => void
) => {
  const refOptionCurrent = refOption.current;
  useEffect(() => {
    const option = refOptionCurrent;
    if (!option) return;

    const handleEnterPress = (event: KeyboardEvent) => {
      if (document.activeElement === option && event.key === "Enter") {
        onChange(item);
        setIsOpenList(false);
      }
    };

    option.addEventListener("keydown", handleEnterPress);

    return () => {
      option.removeEventListener("keydown", handleEnterPress);
    };
  }, [item, onChange, refOptionCurrent, setIsOpenList]);
};

export default useKeyHandler;
