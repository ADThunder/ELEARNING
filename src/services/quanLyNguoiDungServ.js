import https from "./config";
const maNhom = "GP01";

export const quanLyNguoiDungServ = {
  dangNhap: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/DangNhap`, data);
  },
  dangKy: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/DangKy`, data);
  },
  //todo : lấy danh sách toàn bộ người dùng
  layDanhSachNguoiDung: async () => {
    return await https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    );
  },
  //todo : xoá người dùng
  xoaNguoiDung: async (taiKhoan) => {
    return await https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  //todo : thông tin tài khoản
  thongTinTaiKhoan: async (taiKhoan) => {
    return await https.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${taiKhoan}`
    );
  },
  //todo : cập nhật thông tin người dùng
  capNhatThongTinNguoiDung: async (data) => {
    return await https.put(
      `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      data
    );
  },
  //todo : thêm người dùng
  themNguoiDung: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, data);
  },
  //todo : lấy danh sách loại người dùng
  layDanhSachLoaiNguoiDung: async () => {
    return await https.get("/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
  },
  //todo : lấy danh sách khoá học chưa ghi danh
  layDanhSachKhoaHocChuaGhiDanh: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`
    );
  },
  //todo : lấy danh sách khoá học mà người dùng chờ xét duyệt
  layDanhSachKhoaHocChoXetDuyet: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      taiKhoan
    );
  },
  //todo : lấy danh sách khoá học đã xét duyệt
  layDanhSachKhoaHocDaXetDuyet: async (taiKhoan) => {
    return await https.post(
      `/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      taiKhoan
    );
  },
};
