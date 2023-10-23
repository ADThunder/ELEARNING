import https from "./config";

export const quanLyNguoiDungServ = {
  dangNhap: async (data) => {
    return await https.post(`/api/QuanLyNguoiDung/DangNhap`, data);
  },
};
