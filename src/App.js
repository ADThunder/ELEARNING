import { Route, Routes } from "react-router-dom";
import ChiTietKhoaHoc from "./Components/ChiTietKhoaHoc/ChiTietKhoaHoc";
import KhoaHocTheoTen from "./Components/KhoaHocTheoTen/KhoaHocTheoTen";
import FormDangNhap from "./pages/FormDangNhap/FormDangNhap";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="chi-tiet">
            <Route path=":id" element={<ChiTietKhoaHoc />} />
          </Route>
          <Route path="danh-muc-khoa-hoc">
            <Route path=":id" element={<KhoaHocTheoTen />} />
          </Route>
        </Route>
        <Route path="dang-nhap" element={<FormDangNhap />} />
      </Routes>
    </>
  );
}

export default App;
