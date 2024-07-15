import { RootState } from "@/app/store";

import { TSwitchedThemeInitialState } from "@/shared/types/swithed/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TSwitchedThemeInitialState = {
  theme: "dark",
};

export const themeSwitcherSlice = createSlice({
  name: "themeSwitcher",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const selectorThemeSwitcher = (state: RootState) =>
  state.themeSwitcher.theme;

export const { toggleTheme } = themeSwitcherSlice.actions;

export default themeSwitcherSlice.reducer;
