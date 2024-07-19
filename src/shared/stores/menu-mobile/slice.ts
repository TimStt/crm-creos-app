import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const menuMobileSlice = createSlice({
  name: "menuMobile",
  initialState,
  reducers: {
    setStateModalMenu: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const selectModalMenuState = (state: RootState) =>
  state.menuMobile.isOpen;
export const { setStateModalMenu } = menuMobileSlice.actions;

export default menuMobileSlice.reducer;
