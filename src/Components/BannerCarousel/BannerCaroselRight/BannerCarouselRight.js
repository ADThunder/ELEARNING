import React from "react";
import Lottie from "react-lottie";
import stydyAnimation from "./../../../assets/animation/studyAnimation.json";
const BannerCarouselRight = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: stydyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={600} width={500} />
    </div>
  );
};

export default BannerCarouselRight;
