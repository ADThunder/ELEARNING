import React from "react";
import { Popconfirm, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { layDanhSachKhoaHocApi } from "../../redux/slice/quanLyKhoaHocSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableKhoaHoc = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const { listKhoaHoc } = useSelector((state) => state.quanLyKhoaHocSlice);
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
      title: "Mã khoá học",
      dataIndex: "maKhoaHoc",
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, record, index) => {
        return (
          <img
            className="w-20 h-20"
            src={record.hinhAnh}
            alt={record.hinhAnh}
          />
        );
      },
    },
    {
      title: "Lượt xem",
      dataIndex: "luotXem",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      render: (text, record, index) => {
        return <span>{record.nguoiTao.hoTen}</span>;
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => {}} className="text-xl text-green-500">
            <i className="fa-solid fa-plus"></i>
          </button>
          <button
            onClick={() => {
              navigate(`/admin/chinh-sua-khoa-hoc/${record.maKhoaHoc}`);
            }}
            className="text-xl text-blue-500 "
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá khoá hoc"
            description="Bạn có muốn xoá khoá học không?"
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
            okButtonProps={{
              className: "bg-red-500 hover:bg-red-600 duration:500",
            }}
            onConfirm={() => {
              quanLyKhoaHocServ
                .xoaKhoaHoc(record.maKhoaHoc)
                .then((result) => {
                  //   console.log(result);
                  messageApi.success(result.data);
                  dispatch(layDanhSachKhoaHocApi());
                })
                .catch((error) => {
                  //   console.log(error.response.data);
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
      <Table columns={columns} dataSource={listKhoaHoc} onChange={onChange} />
    </>
  );
};

export default TableKhoaHoc;
