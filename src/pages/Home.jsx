import React from "react";


export default function Home() {

  return (
    <div className="home-wrapper flex justify-center">
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