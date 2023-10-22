import { Route, Routes } from "react-router-dom";
import ChiTietKhoaHoc from "./Components/ChiTietKhoaHoc/ChiTietKhoaHoc";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
