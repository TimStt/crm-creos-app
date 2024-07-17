import { getDesigners } from "@/shared/api/disigner/get-designers";
import { IQueryParams } from "@/shared/types/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDesignersThunk = createAsyncThunk(
  "topDesigner/getDesigners",
  async (queryParam: IQueryParams) => {
    const designers = await getDesigners(queryParam);
    return designers;
  }
);

const initialState = {
  loading: false,
};

export const designerSlice = createSlice({
  name: "designers",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getDesignersThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getDesignersThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDesignersThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectorLoading = (state: RootState) => state.issue.loading;

export default designerSlice.reducer;
