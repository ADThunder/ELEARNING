import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";

const KhoaHocDaGhiDanh = () => {
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachKhoaHocChoXetDuyet(params.id)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    quanLyNguoiDungServ
      .layDanhSachKhoaHocDaXetDuyet(params.id)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-red-500 text-xl">
        Khoá học đã ghi danh
      </h2>
      <div class="container p-2 mx-auto sm:p-4 text-gray-800">
        <div class="overflow-x-auto">
          <table class="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr class="bg-gray-300">
                <th class="p-3">STT</th>
                <th class="p-3">Tên khoá học</th>
                <th class="p-3">Chờ Xác nhận</th>
              </tr>
            </thead>
            <tbody class="border-b bg-gray-50 border-gray-300">
              <tr>
                <td class="px-3 text-2xl font-medium text-gray-600">1</td>
                <td class="px-3 py-2">
                  <p>Lập trình FrontEnd</p>
                </td>
                <td class="px-3 py-2">
                  <button className="bg-red-500 text-white rounded px-4 py-2 cursor-pointer hover:bg-red-600 duration-500">
                    Xoá
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KhoaHocDaGhiDanh;
