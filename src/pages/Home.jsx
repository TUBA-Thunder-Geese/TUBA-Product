import React from "react";

import ImgContain from "../components/ImgContain.jsx";
import TitleContain from "../components/TitleContain.jsx";
import TextContain from "../components/TextContain.jsx";
import HeatMapSS from '../images/HeatMapSS.png';

export default function Home() {

  return (
    <div className="home-wrapper">
      <section className="title-main">
        <h1>Welcome to TUBA</h1>
      </section>
      {<TextContain text={"Error tracing made simple in micro service architecture"}/>}
      {<TitleContain text={"Heat Map Display"}/>}
      {<ImgContain src={HeatMapSS} alt={"Heat Map image"} />}
      {<TitleContain text={"Timeline Display"} />}
      {/* {<ImgContain src={} alt={"Timeline image"} />} */}
      {<TitleContain text={"History Display"} />}
      {/* {<ImgContain src={} alt={"History image"} />} */}
    </div>
  )
}