import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";

const initialState = {
  listKhoaHoc: [],
};

const quanLyKhoaHocSlice = createSlice({
  name: "khoaHoc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layDanhSachKhoaHocApi.fulfilled, (state, action) => {
      //   console.log(action);
      state.listKhoaHoc = action.payload;
    });
  },
});

export const {} = quanLyKhoaHocSlice.actions;

export default quanLyKhoaHocSlice.reducer;

//Thunk
//todo : lấy danh sách toàn bộ các khoá học
export const layDanhSachKhoaHocApi = createAsyncThunk(
  "khoaHoc/layDanhSachKhoaHocApi",
  async () => {
    const result = await quanLyKhoaHocServ.layDanhSachKhoaHoc();
    return result.data;
  }
);
