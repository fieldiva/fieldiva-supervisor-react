import { createSlice } from "@reduxjs/toolkit";

const getLastPathSegment = () => {
  const segments = window.location.pathname.split("/").filter(Boolean);
  return segments.length > 0 ? segments[segments.length - 1] : "dashboard";
};

const HeaderSlice = createSlice({
  name: "header",
  initialState: {
    menu: getLastPathSegment(),
    subMenu: "mapView"
  },
  reducers: {
    changeMenu: (state, action) => {
      state.menu = action.payload;
    },
    changeSubMenu: (state, action) => {
      state.subMenu = action.payload;
    }
  },
});

export const { changeMenu, changeSubMenu } = HeaderSlice.actions;
export default HeaderSlice.reducer;
