import { useEffect } from "react";

export const useScrollHidden = (state: boolean) => {
  useEffect(() => {
    state
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [state]);
};
