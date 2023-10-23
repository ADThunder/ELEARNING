import { configureStore } from "@reduxjs/toolkit";
import quanLyKhoaHocSlice from "./slice/quanLyKhoaHocSlice";
import quanLyNguoiDungSlice from "./slice/quanLyNguoiDungSlice";

export const store = configureStore({
  reducer: {
    quanLyKhoaHocSlice,
    quanLyNguoiDungSlice,
  },
});
