import { createSlice } from "@reduxjs/toolkit";
const dataUserLocal = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: dataUserLocal,
};

const quanLyNguoiDungSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      // console.log(action);
      state.user = action.payload;
    },
  },
});

export const { setDataUser } = quanLyNguoiDungSlice.actions;

export default quanLyNguoiDungSlice.reducer;

//thunk
