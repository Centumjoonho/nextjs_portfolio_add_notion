import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/developer-front-end_anime.json";

export default function Anime() {
  return <Lottie loop animationData={lottieJson} play />;
}
