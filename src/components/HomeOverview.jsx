import React from 'react';

import TitleContain from "../components/TitleContain.jsx";
import SubTitleContain from "../components/SubTitleContain.jsx";
import TextContain from "../components/TextContain.jsx";

export default function HomeOverview() {
  return (
    <section className='home-overview-section'>
        <section className="title-main-section">
          <div className='title-main-contain'>
            <h1 className="title-main">Error Tracing with TUBA</h1>
          </div>
        </section>
        <section className='logo-section'>
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
          <img src="https://img.shields.io/badge/redux-764abc.svg?style=for-the-badge&logo=redux&logoColor=white" />
          <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
          <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
        </section>
        <section className='logo-section'>
          <img src="https://img.shields.io/badge/docker-2153a3.svg?style=for-the-badge&logo=docker&logoColor=white" />
          <img src="https://img.shields.io/badge/prometheus-e6522c?style=for-the-badge&logo=prometheus&logoColor=white" />
          <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
        </section>
      {<TextContain text={"Trace and log runtime errors through a microservices application"}/>}
      {<SubTitleContain text={"Features"}/>}
      {<TextContain text={"TUBA is an error parsing package for Express.js and Docker image that work together, allowing you to quickly review and interpret error data in each service over a given range of time."}/>}
      {<SubTitleContain text={"Own Your Data"} />}
      {<TextContain text={"Have full control of mission-critical historical runtime data in a postgres database you manage."} />}
      {<SubTitleContain text={"Don't Get Lost In The Cloud"} />}
      {<TextContain text={"Use the TUBA Interface to visualize your error data in chronological order, highlight any cascades or closely related errors on your Timeline. Review your Heatmap to see errors by service, or search and filter data by keywords."}/>}
      {<SubTitleContain text={"Native Prometheus Integration"}/>}
      {<TextContain text={"TUBA comes with a suite of custom Prometheus metrics that integrate seamlessly into your existing Prometheu implemetation and metrics visualizer."} />}
    </section>
  )
}

