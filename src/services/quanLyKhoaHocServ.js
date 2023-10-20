import https from "./config";
const maNhom = "GP09";

export const quanLyKhoaHocServ = {
  //todo : Lấy danh mục  khoá học
  layDanhMucKhoaHoc: async () => {
    return await https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  //todo : lấy danh sách toàn bộ các khoá học
  layDanhSachKhoaHoc: async () => {
    return await https.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`
    );
  },
};
