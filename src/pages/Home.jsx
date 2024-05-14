import React from "react";

import ImgContain from "../components/ImgContain.jsx";
import TitleContain from "../components/TitleContain.jsx";
import TextContain from "../components/TextContain.jsx";
import HeatMapSS from '../images/HeatMapSS.png';

export default function Home() {

  return (
    <div className="home-wrapper">
      {<TitleContain text={"Welcome to TUBA"}/>}
      {<TextContain text={"Error tracing made simple in micro service architecture"}/>}
      {<ImgContain src={HeatMapSS} alt={"Heat Map image"} />}
    </div>
  )
}