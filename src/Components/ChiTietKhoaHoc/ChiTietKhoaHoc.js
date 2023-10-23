import React, { useEffect } from "react";
import "./chiTietKhoaHoc.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import {
  dangKyKhoaHocApi,
  layDanhSachKhoaHocApi,
  layThongTinKhoaHocApi,
} from "../../redux/slice/quanLyKhoaHocSlice";
import { Rate } from "antd";

const ChiTietKhoaHoc = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { user } = useSelector((state) => state.quanLyNguoiDungSlice);
  const navigate = useNavigate();
  const { detailKhoaHoc, listKhoaHoc } = useSelector(
    (state) => state.quanLyKhoaHocSlice
  );
  // console.log(detailKhoaHoc);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(layThongTinKhoaHocApi(params.id));
  }, [params.id]);
  useEffect(() => {
    dispatch(layDanhSachKhoaHocApi());
  }, []);

  class ThongTinDatKhoaHoc {
    maKhoaHoc = "";
    taiKhoan = "";
  }
  return (
    <>
      {contextHolder}
      <div className="backGroundDetail shine">
        <img
          className="bgDetail"
          src="https://img.freepik.com/premium-vector/elearning-vector-background-design-elearning-text-with-key-board-phone-headphones-technology_572293-2228.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="detailLeft col-span-7">
            <h1 className="pt-2 font-bold text-2xl uppercase">
              {detailKhoaHoc.tenKhoaHoc}
            </h1>
            <div className="giangVienLeft flex items-center justify-between my-3">
              <div className="flex items-center gap-2">
                <img
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                  src="https://picsum.photos/300/300"
                  alt="123"
                />
                <div>
                  <p className="text-gray-400">Giảng viên</p>
                  <p className="font-bold">Robert Ngô Ngọc</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-3xl text-green-500"></i>
                <div>
                  <p className="text-gray-400">Lĩnh vực</p>
                  <p className="font-bold">Lập trình Backend</p>
                </div>
              </div>
              <div>
                <Rate allowHalf defaultValue={2.5} />{" "}
                <span className="font-bold ml-2">3.5</span>
                <p className="ml-[76px] text-gray-400">100 đánh giá</p>
              </div>
            </div>
            <p className="text-gray-400 italic">
              React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
              dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
              đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
              cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
              lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
              niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
              bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
              trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
              tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
              không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
              số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
              nghệ quan trọng với tư cách là một nhà phát triển web và trong
              khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
              trọng!
            </p>
            <hr className="my-2" />
            <div className="seHoc">
              <h3 className="font-bold text-xl">Những gì bạn sẽ học :</h3>
              <div className="">
                <ul className="grid grid-cols-2 gap-2">
                  <li>
                    <i className="fa-solid fa-check text-orange-500 ml-2"></i>
                    <span className="pl-1">
                      Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                      với người dùng và phản ứng nhanh
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500 ml-2"></i>
                    <span className="pl-1">
                      Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                      Javascript NPM, Webpack, Babel và ES6 / ES2015
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Đăng ký công việc được trả lương cao hoặc làm freelancer
                      trong một trong những lĩnh vực được yêu cầu nhiều nhất mà
                      bạn có thể tìm thấy trong web dev ngay bây giờ
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                      kết hợp
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                      dụng sức mạnh của JavaScript một cách dễ dàng
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                      người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Tìm hiểu tất cả về React Hooks và React Components
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                      ứng dụng Redux
                    </span>
                  </li>
                </ul>
                <h3 className="font-bold text-xl py-2">Nội dung khoá học</h3>
              </div>
              <div className="flex items-center bg-slate-100 p-2">
                <h3 className="font-semibold">MỤC 1 : GIỚI THIỆU</h3>
                <button className="text-green-500 font-bold bg-white border-solid border-2 border-green-500 px-1 py-2 hover:bg-green-500 hover:text-white duration-500 ml-2">
                  XEM TRƯỚC
                </button>
              </div>
              <h4 className="my-2 font-medium">Bài học</h4>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Các khái niệm về React Component
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Thiết lập môi trường cho Windows
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Tạo ứng dụng React - React-Scripts
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 p-2">
                <h3 className="font-semibold">MỤC 2 : KIẾN THỨC CĂN BẢN</h3>
                <button className="text-green-500 font-bold bg-white border-solid border-2 border-green-500 px-1 py-2 hover:bg-green-500 hover:text-white duration-500 ml-2">
                  XEM TRƯỚC
                </button>
              </div>
              <h4 className="my-2 font-medium">Bài học</h4>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Trang chủ và thành phần thư mục
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Hướng dẫn khóa học + Liên kết Github
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Trang chủ thương mại điện tử + thiết lập SASS
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">Tệp CSS và SCSS</span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    React 17: Cập nhật các gói + Phiên bản React mới nhất
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 p-2">
                <h3 className="font-semibold">MỤC 3 : KIẾN THỨC CHUYÊN SÂU</h3>
                <button className="text-green-500 font-bold bg-white border-solid border-2 border-green-500 px-1 py-2 hover:bg-green-500 hover:text-white duration-500 ml-2">
                  XEM TRƯỚC
                </button>
              </div>
              <h4 className="my-2 font-medium">Bài học</h4>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    connect() and mapStateToProps
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Trạng thái thư mục vào Redux
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 ">
                <div>
                  <i className="fa-regular fa-circle-play text-green-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Thành phần Tổng quan về Bộ sưu tập
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
            </div>
          </div>
          <div className="detailRight col-span-5 pt-5">
            <div className="card shadowBorder">
              <div
                className="p-5 h-1/2 w-full"
                style={{
                  backgroundImage: `url('${detailKhoaHoc.hinhAnh}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-right mr-5 text-2xl">
                <i className="fa-solid fa-bolt text-yellow-500"></i>
                <span className="font-semibold ml-2">
                  500.000<sup>đ</sup>
                </span>
              </div>
              <div className="text-center my-2 px-5">
                <button
                  onClick={() => {
                    let thongTinDatKhoaHoc = new ThongTinDatKhoaHoc();
                    thongTinDatKhoaHoc.maKhoaHoc = params.id;
                    thongTinDatKhoaHoc.taiKhoan = user.taiKhoan;
                    dispatch(dangKyKhoaHocApi(thongTinDatKhoaHoc));
                    messageApi.success("Đăng ký khoá học thành công");
                  }}
                  className="border-green-500 font-bold border py-2 w-full text-green-500 hover:bg-green-500 hover:text-white duration-500"
                >
                  ĐĂNG KÝ
                </button>
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Ghi danh : <span className="text-black ">10 học viên</span>
                  </p>
                  <i className="fa-solid fa-user-graduate text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Thời gian : <span className="text-black ">18 giờ</span>
                  </p>
                  <i className="fa-regular fa-clock text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Bài học : <span className="text-black ">10</span>
                  </p>
                  <i className="fa-solid fa-book text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Video : <span className="text-black ">14</span>
                  </p>
                  <i className="fa-solid fa-photo-film text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Trình độ :
                    <span className="text-black ">Người mới bắt đầu</span>
                  </p>
                  <i class="fa-solid fa-database text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="my-3">
                  <input
                    type="text"
                    id="nhapMa"
                    className="w-full py-2 pl-[14px] focus:outline-none"
                    placeholder="Nhập mã"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <h3 className="font-bold mb-3 text-xl">Khoá học tham khảo</h3>
          <div className="cardDetails  flex gap-4">
            {listKhoaHoc.slice(0, 4)?.map((item, index) => {
              // console.log(item);
              return (
                <div className="itemCardDetail" key={index}>
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                      <img
                        className="rounded-t-lg w-full"
                        src={item.hinhAnh}
                        alt={item.tenKhoaHoc}
                      />
                    </a>
                    <div className="p-5">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.tenKhoaHoc}
                        </h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                        {item.moTa}
                      </p>
                      <button
                        onClick={() => {
                          navigate(`/chi-tiet/${item.maKhoaHoc}`);
                        }}
                        className="text-white font-bold border-green-500 border w-full rounded py-2 bg-green-500 hover:bg-white hover:text-green-500 duration-500"
                      >
                        Xem chi Tiết
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietKhoaHoc;
