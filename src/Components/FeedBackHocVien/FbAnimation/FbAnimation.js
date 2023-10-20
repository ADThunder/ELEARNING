import React from "react";
import Lottie from "react-lottie";
import feedBackAnimation from "./../../../assets/animation/feedbackAnimation.json";

const FbAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: feedBackAnimation,
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

export default FbAnimation;
