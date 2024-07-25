import { getIssuesThunk } from "@/shared/stores/issue";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetIssues = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getIssuesThunk());
  }, [dispatch]);
};
