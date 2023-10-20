import { configureStore } from "@reduxjs/toolkit";
import quanLyKhoaHocSlice from "./slice/quanLyKhoaHocSlice";

export const store = configureStore({
  reducer: {
    quanLyKhoaHocSlice,
  },
});
