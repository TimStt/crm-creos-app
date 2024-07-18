import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastCommitsWithUssueThunk,
  selectorLastCommits,
  selectorloadingCommits,
} from "../../store";

export const useGetCommits = () => {
  const lastCommits = useSelector(selectorLastCommits);
  const loadingCommits = useSelector(selectorloadingCommits);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getLastCommitsWithUssueThunk({}));
    }, 10000);
  }, [dispatch]);

  return {
    lastCommits,
    loadingCommits,
  };
};
