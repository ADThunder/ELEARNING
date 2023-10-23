import https from "./config";
const maNhom = "GP04";

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
  //todo : lấy thông tin khoá học để làm trang detail
  layThongTinKhoaHoc: async (maKhoaHoc) => {
    return await https.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  },
  //todo : đăng ký khoá học
  dangKyKhoaHoc: async (thongTinDangKy) => {
    return await https.post(`/api/QuanLyKhoaHoc/DangKyKhoaHoc`, thongTinDangKy);
  },
};
