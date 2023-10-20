import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const HomeTemplate = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeTemplate;
