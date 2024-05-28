import React from "react";

import TitleContain from '../components/TitleContain.jsx';
import ImgContain from '../components/ImgContain.jsx';

import npmLogo from '../images/npm-logo.png';
import dockerLogo from '../images/dockerhub-logo.png';

export default function Download() {
    return (
      <div className="download-wrapper">
        <div className="title-container">
          <h1 className="download-title">Download TUBA</h1>
        </div>
        <div className="options-grid">
          <section className="npm-section">
            <TitleContain text={"NPM Package"}/>
            <ImgContain src={"npmLogo"} alt={"image of NPM logo with link to website"} />
          </section>
          <section className="docker-section">
            <TitleContain text={"Docker Image"}/>
            <ImgContain src={"dockerLogo"} alt={"image of dockerHub logo with link to website"}/>
          </section>
        </div>
      </div>
    )
}