import React from "react";
import { Popconfirm, Space, Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./tableUser.css";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { layDanhSachNguoiDungApi } from "../../redux/slice/quanLyNguoiDungSlice";
import { useNavigate } from "react-router-dom";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { danhSachNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungSlice
  );
  //   console.log(danhSachNguoiDung);
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      sorter: (a, b) => {
        return a.index - b.index;
      },
      render: (text, record, index) => {
        return <span className="text-center">{index + 1}</span>;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      filters: [
        { text: "GV", value: "GV" },
        { text: "HV", value: "HV" },
      ],
      onFilter: (value, record) => {
        return record.maLoaiNguoiDung === value;
      },
    },
    {
      title: "Hành dộng",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              navigate(`/admin/chinh-sua-user/${record.taiKhoan}`);
            }}
            className="text-xl text-blue-500 "
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá Người dùng"
            description="Bạn có muốn xoá người dùng không không?"
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
            okButtonProps={{
              className: "bg-red-500 hover:bg-red-600 duration:500",
            }}
            onConfirm={() => {
              quanLyNguoiDungServ
                .xoaNguoiDung(record.taiKhoan)
                .then((result) => {
                  console.log(result);
                  messageApi.success(result.data);
                  dispatch(layDanhSachNguoiDungApi());
                })
                .catch((error) => {
                  console.log(error);
                  messageApi.error(error.response.data);
                });
            }}
          >
            <button className="text-xl text-red-500">
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      {contextHolder}
      <Table
        columns={columns}
        dataSource={danhSachNguoiDung}
        onChange={onChange}
      />
    </>
  );
};

export default TableUser;
