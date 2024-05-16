import React from "react";

import TitleContain from "../components/TitleContain.jsx";


export default function Download() {
    return (
      <div className="download-wrapper">
        <div className="title-container">
          <h1 className="download-title">Download TUBA</h1>
        </div>
        <div className="options-grid">
          <section className="npm-section">
            <TitleContain text={"NPM Package"}/>
          </section>
          <section className="docker-section">
            <TitleContain text={"Docker Image"}/>
          </section>
        </div>
      </div>
    )
}