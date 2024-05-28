import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import TitleContain from '../components/TitleContain.jsx';
import ImgContain from '../components/ImgContain.jsx';
import TextContain from '../components/TextContain.jsx';

import npmLogo from '../images/npm-logo.png';
import dockerLogo from '../images/dockerhub-logo.png';

export default function Download() {
    return (
      <div className="download-wrapper">
        <div className="title-container">
          <h1 className="download-title">Download TUBA</h1>
        </div>
        <div className="options-grid">
          <section className="options-inner">
            <div>
              <TitleContain text={"NPM Package"}/>
              <a href="https://www.npmjs.com/package/tuba-tracing" className="prod-link" target="_blank" rel="noopener noreferrer">
                <ImgContain src={npmLogo} alt={"image of NPM logo with link to website"} className="img-file-npm"/>
              </a>
              <TextContain text={"Paragraph about the npm package"}/>
            </div>
          </section>
          <section className="options-inner">
            <div>
              <TitleContain text={"Docker Image"}/>
              <a href="https://hub.docker.com/r/tubatracing/tuba-tracing" className="prod-link" target="_blank" rel="noopener noreferrer">
                <ImgContain src={dockerLogo} alt={"image of dockerHub logo with link to website"} className={"img-file-dock"}/>
              </a>
              <TextContain text={"Paragraph about the docker image"}/>
            </div>
          </section>
        </div>
        <div className="prod-docsLink-contain">
          <Link to="/docs/getStarted" className="prod-docsLink button-style">TUBA Docs</Link>
        </div>
      </div>
    )
}