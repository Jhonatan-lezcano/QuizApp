import React from "react";
import Lottie from "lottie-react";
import saddnes from "../../assets/very-sad.json";

export const Saddness = () => {
  return <Lottie animationData={saddnes} loop={true} autoPlay={true} />;
};
