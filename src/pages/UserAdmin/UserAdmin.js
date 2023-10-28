import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TableUser from "../../Components/TableUser/TableUser";
import { layDanhSachNguoiDungApi } from "../../redux/slice/quanLyNguoiDungSlice";

const UserAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachNguoiDungApi());
  }, []);
  return (
    <div className="bg-white p-10 space-y-5">
      <h2 className="font-medium text-3xl text-red-500">Quản lý người dùng</h2>
      <TableUser />
    </div>
  );
};

export default UserAdmin;
