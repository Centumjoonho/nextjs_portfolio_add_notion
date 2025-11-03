'use client';

import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "/public/animation_llfuvf1m.json";

export default function Anime() {
  return <Lottie loop animationData={lottieJson} play />;
}
