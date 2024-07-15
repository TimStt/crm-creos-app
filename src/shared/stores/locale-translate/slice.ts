import { RootState } from "@/app/store";
import {
  TLocaleTranslate,
  TLocaleTranslateInitialState,
} from "@/shared/types/swithed";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TLocaleTranslateInitialState = {
  locale: "Ru",
};

export const localeTranslateSlice = createSlice({
  name: "localeTranslate",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<TLocaleTranslate>) => {
      state.locale = action.payload;
    },
    toggleLocale: (state) => {
      state.locale = state.locale === "Ru" ? "En" : "Ru";
    },
  },
});

export const selectorLocale = (state: RootState) =>
  state.localeTranslate.locale;

export const { setLocale, toggleLocale } = localeTranslateSlice.actions;

export default localeTranslateSlice.reducer;
