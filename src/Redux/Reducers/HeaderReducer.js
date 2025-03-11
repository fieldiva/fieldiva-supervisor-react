import { createSlice } from "@reduxjs/toolkit";

const HeaderSlice = createSlice({
  name: "header",
  initialState: {
    menu: "dashboard",
    subMenu: "mapView"
  },
  reducers: {
    changeMenu: (state, action) => {
      state.menu = action.payload;
    },
    changeSubMenu: (state, action) => {
        state.subMenu = action.payload
    }
  },
});

export const { changeMenu, changeSubMenu } = HeaderSlice.actions;
export default HeaderSlice.reducer;
