import React from "react";

import ImgContain from "../components/ImgContain.jsx";
import TitleContain from "../components/TitleContain.jsx";
import TextContain from "../components/TextContain.jsx";
import HeatMapSS from '../images/HeatMapSS.png';

export default function Home() {

  return (
    <div className="home-wrapper">
      {TitleContain }
      {/* <div className="title-section">
        <h1>TUBA</h1>
        <p>Error tracing made simple in micro service architecture</p>
      </div> */}
      {<ImgContain src={HeatMapSS} alt={"Heat Map image"} />}
    </div>
  )
}