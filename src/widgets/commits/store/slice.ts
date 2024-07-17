import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCommentsWithIssue } from "../../../shared/api/commits/get-commets-with-ussue";
import { IGetCommentsWithIssue } from "@/shared/types/api";
import { IComment, ILastCommitsState } from "@/shared/types/comment";

export const getLastCommitsWithUssueThunk = createAsyncThunk(
  "lastCommits/getLastCommitsWithUssue",
  async (params?: IGetCommentsWithIssue) => {
    const commitsWithUssue = await getCommentsWithIssue(params);

    return commitsWithUssue;
  }
);

const initialState: ILastCommitsState = {
  lastCommits: [],
  isLoading: false,
};

export const lastCommitsSlice = createSlice({
  name: "lastCommits",
  initialState,
  reducers: {
    setLastCommits: (state, action) => {
      state.lastCommits = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getLastCommitsWithUssueThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getLastCommitsWithUssueThunk.fulfilled,
        (state, action: PayloadAction<IComment[]>) => {
          state.isLoading = false;
          state.lastCommits = action.payload;
        }
      )
      .addCase(getLastCommitsWithUssueThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setLastCommits, setIsLoading } = lastCommitsSlice.actions;

export const selectorLastCommits = (state: RootState) =>
  state.lastCommitsWithUssue.lastCommits;

export const selectorloadingCommits = (state: RootState) =>
  state.lastCommitsWithUssue.isLoading;

export const lastCommitsReducer = lastCommitsSlice.reducer;
