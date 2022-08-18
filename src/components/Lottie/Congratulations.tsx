import React from "react";
import Lottie from "lottie-react";
import jumping from "../../assets/jumping-lottie-animation.json";

const Congratulations = () => {
  return <Lottie animationData={jumping} loop={true} autoPlay={true} />;
};

export default Congratulations;
