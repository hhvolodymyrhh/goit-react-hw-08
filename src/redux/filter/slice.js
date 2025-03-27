import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});


export const filterReducer = filterSlice.reducer;
export default filterReducer;

export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = state => state.filters.name;