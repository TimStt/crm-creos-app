import { getIssues } from "@/shared/api/issue/get-issues";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getIssuesThunk = createAsyncThunk(
  "topDesigner/getDesigners",
  async () => {
    const designers = await getIssues();
    return designers;
  }
);

const initialState = {
  loading: false,
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getIssuesThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getIssuesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getIssuesThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectorLoading = (state: RootState) => state.topDesigner.loading;

export default issueSlice.reducer;
