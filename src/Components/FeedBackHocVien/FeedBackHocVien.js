import React from "react";
import FbAnimation from "./FbAnimation/FbAnimation";

const FeedBackHocVien = () => {
  return (
    <div className="grid grid-cols-2  items-center">
      {/* left */}
      <div>
        <FbAnimation />
      </div>
      <div className="w-[600px] feedback">
        <h2 className="font-bold text-2xl text-[#6AB5F8]">Cảm nhận học viên</h2>
        <p>
          <i className="fa-solid fa-quote-left text-[#B76BF8]"></i>
          <span className="mx-2 text-stone-400 ">
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
          </span>
          <i className="fa-solid fa-quote-right text-[#B76BF8]"></i>
        </p>
      </div>
    </div>
  );
};

export default FeedBackHocVien;
