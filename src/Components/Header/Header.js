import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataUser } from "../../redux/slice/quanLyNguoiDungSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.quanLyNguoiDungSlice);
  // console.log(user);
  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if (userLocal) {
      dispatch(setDataUser(userLocal));
    }
  }, []);
  const navigate = useNavigate();
  const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //todo : lấy danh mục các khoá học
  useEffect(() => {
    quanLyKhoaHocServ
      .layDanhMucKhoaHoc()
      .then((result) => {
        // console.log(result);
        setDanhMucKhoaHoc(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //todo : mở khoá toggle hamberger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //todo : hàm lấy ra các tên danh mục khoá học
  const items = danhMucKhoaHoc?.map((item, index) => {
    // console.log(item);
    return {
      key: index,
      label: (
        <Link to={`/danh-muc-khoa-hoc/${item.maDanhMuc}`}>
          <a className="font-medium hover:text-orange-500 duration-500">
            {item.tenDanhMuc}
          </a>
        </Link>
      ),
    };
  });

  return (
    <header className="p-4 bg-[#6BB5F8] text-neutral-800 dark:text-neutral-200 z-[999]">
      <div className="container flex justify-between h-16 mx-auto">
        <ul
          className={`items-stretch space-x-1 lg:flex font-medium gap-2 ${
            isOpen ? "" : "hidden"
          } `}
          id="mobile-menu"
        >
          <li className="flex">
            <Dropdown menu={{ items }}>
              <a
                onClick={(e) => e.preventDefault()}
                className="flex items-center -mb-1 border-b-2 border-transparent cursor-pointer"
              >
                <i className="fa-solid fa-bars"></i>
                <span className="ml-1">DANH MỤC</span>
              </a>
            </Dropdown>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center -mb-1 border-b-2 border-transparent"
            >
              KHOÁ HỌC
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center  -mb-1 border-b-2 border-transparent"
            >
              BLOGS
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center -mb-1 border-b-2 border-transparent"
            >
              SỰ KIỆN
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center -mb-1 border-b-2 border-transparent"
            >
              THÔNG TIN
            </a>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          to={"/"}
          aria-label="Back to homepage"
          className="flex items-center mr-[150px]"
        >
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
            alt="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
            width={250}
          />
        </Link>
        <div className="flex items-center md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
            />
          </div>
          {user ? (
            <p className="text-white">{user.hoTen}</p>
          ) : (
            <Link
              to={"/dang-nhap"}
              className="hidden px-6 py-2 font-semibold rounded lg:block bg-[#B86BF8] text-gray-50 hover:bg-[#B87BF9] duration-500"
            >
              Đăng nhập
            </Link>
          )}
        </div>
        <button
          onClick={toggleMenu}
          title="Open menu"
          type="button"
          className="p-4 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
