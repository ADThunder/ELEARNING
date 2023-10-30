import React, { useEffect } from "react";
import TableKhoaHoc from "../../Components/TableKhoaHoc/TableKhoaHoc";
import { useDispatch } from "react-redux";
import { layDanhSachKhoaHocApi } from "../../redux/slice/quanLyKhoaHocSlice";

const KhoaHocAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHocApi());
  }, []);
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-medium text-3xl text-red-500">Quản lý khoá học</h2>
      <TableKhoaHoc />
    </div>
  );
};

export default KhoaHocAdmin;
