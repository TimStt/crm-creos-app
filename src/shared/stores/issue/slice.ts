import { getIssues } from "@/shared/api/issue/get-issues";
import { IIssue, IIssuesInitialState } from "@/shared/types/issue";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getIssuesThunk = createAsyncThunk("issues/getIssues", async () => {
  return getIssues({});
});

const initialState: IIssuesInitialState = {
  loading: false,
  issues: [],
};

export const issuesSlice = createSlice({
  name: "issues",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(
        getIssuesThunk.fulfilled,
        (state, action: PayloadAction<IIssue[]>) => {
          state.loading = false;
          state.issues = action.payload;
        }
      )
      .addCase(getIssuesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIssuesThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectorLoadingIssues = (state: RootState) => state.issues.loading;
export const selectorIssues = (state: RootState) => state.issues.issues;

export default issuesSlice.reducer;
