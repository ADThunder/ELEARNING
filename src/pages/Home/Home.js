import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BannerCarousel from "../../Components/BannerCarousel/BannerCarousel";
import CountUp from "../../Components/CountUp/CountUp";
import FeedBackHocVien from "../../Components/FeedBackHocVien/FeedBackHocVien";
import GiangVien from "../../Components/GiangVien/GiangVien";
import ListKhoaHoc from "../../Components/ListKhoaHoc/ListKhoaHoc";
import ThongTinKhoaHoc from "../../Components/ThongTinKhoaHoc/ThongTinKhoaHoc";
import { layDanhSachKhoaHocApi } from "../../redux/slice/quanLyKhoaHocSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHocApi());
  }, []);
  return (
    <div>
      <BannerCarousel />
      <ThongTinKhoaHoc />
      <ListKhoaHoc />
      <CountUp />
      <GiangVien />
      <FeedBackHocVien />
    </div>
  );
};

export default Home;
