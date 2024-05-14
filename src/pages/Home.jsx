import React from "react";

import HeatMapSS from '../images/HeatMapSS.png';

export default function Home() {

  return (
    <div className="home-wrapper">
      <div className="title-section">
        <h1>TUBA</h1>
        <p>Error tracing made simple in micro service architecture</p>
      </div>
      <div>
        <img className="heat-map-img" src={HeatMapSS}></img>
      </div>
    </div>
  )
}