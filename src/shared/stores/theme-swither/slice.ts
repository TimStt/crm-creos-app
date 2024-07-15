import { RootState } from "@/app/store";

import {
  TSwitchedTheme,
  TSwitchedThemeInitialState,
} from "@/shared/types/swithed/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

    setTheme: (state, action: PayloadAction<TSwitchedTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const selectorThemeSwitcher = (state: RootState) =>
  state.themeSwitcher.theme;

export const { toggleTheme, setTheme } = themeSwitcherSlice.actions;

export default themeSwitcherSlice.reducer;
