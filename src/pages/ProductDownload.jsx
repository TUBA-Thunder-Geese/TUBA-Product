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
            <div className="options-npm">
              <TitleContain text={"NPM Package"}/>
              <a href="https://www.npmjs.com/package/tuba-tracing" className="prod-link" target="_blank" rel="noopener noreferrer">
                <ImgContain src={npmLogo} alt={"image of NPM logo with link to website"} className="img-file-npm"/>
              </a>
              <TextContain text={"Public NPM error parsing package for Express.js and Docker image that work together, allowing you to quickly review and interpret error data in each service over a given range of time."}/>
            </div>
          </section>
          <section className="options-inner">
            <div className="options-docker">
              <TitleContain text={"Docker Image"}/>
              <a href="https://hub.docker.com/r/tubatracing/tuba-tracing" className="prod-link" target="_blank" rel="noopener noreferrer">
                <ImgContain src={dockerLogo} alt={"image of dockerHub logo with link to website"} className={"img-file-dock"}/>
              </a>
              <TextContain text={"Node based image that lets you visualize errors captured with the tuba-tracing npm package."}/>
            </div>
          </section>
        </div>
        <div className="prod-docsLink-contain">
          <a href="https://github.com/oslabs-beta/Tuba" className="prod-docsLink button-style" target="_blank" rel="noopener noreferrer">GitHub/TUBA</a>
          <Link to="/docs/getStarted" className="prod-docsLink button-style">TUBA Docs</Link>
        </div>
      </div>
    )
}