import https from "./config";
const maNhom = "GP01";

export const quanLyNguoiDungServ = {
  dangNhap: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/DangNhap`, data);
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
};
