import React, { useRef } from "react";
import "./countUp.scss";
import { useCountUp } from "react-countup";

const CountUp = () => {
  useCountUp({
    ref: "counter",
    end: "1246",
    duration: "10",
    enableScrollSpy: "true",
  });
  useCountUp({
    ref: "counter1",
    end: "19",
    duration: "10",
    enableScrollSpy: "true",
  });
  useCountUp({
    ref: "counter2",
    end: "685",
    duration: "10",
    enableScrollSpy: "true",
  });
  useCountUp({
    ref: "counter3",
    end: "788",
    duration: "10",
    enableScrollSpy: "true",
  });

  return (
    // <span id="counter" />

    <div className="middle">
      <div className="counting-sec">
        <div className="inner-width">
          <div className="col">
            <i className="fa-solid fa-school"></i>
            <div id="counter" className="num">
              1246
            </div>
            <p className="font-bold">Học viên</p>
          </div>
          <div className="col">
            <i className="fa-regular fa-calendar-days"></i>
            <div id="counter1" className="num">
              19
            </div>
            <p className="font-bold">Khoá học</p>
          </div>
          <div className="col">
            <i className="fa-regular fa-hourglass"></i>
            <div id="counter2" className="num">
              685
            </div>
            <p className="font-bold">Giờ học</p>
          </div>
          <div className="col">
            <i className="fa-solid fa-users-line"></i>
            <div id="counter3" className="num">
              788
            </div>
            <p className="font-bold">Giảng viên</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUp;
