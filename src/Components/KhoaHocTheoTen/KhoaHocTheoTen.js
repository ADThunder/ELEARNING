import React from "react";
import { useParams } from "react-router-dom";

const KhoaHocTheoTen = () => {
  const params = useParams();
  console.log(params);
  return <div>KhoaHocTheoTen</div>;
};

export default KhoaHocTheoTen;
