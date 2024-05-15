import React from 'react';

import TitleContain from "../components/TitleContain.jsx";
import SubTitleContain from "../components/SubTitleContain.jsx";
import TextContain from "../components/TextContain.jsx";

export default function HomeOverview() {
  return (
    <section className='home-overview-section'>
        <section className="title-main-section">
          <h1 className="title-main">Error Tracing with TUBA</h1>
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

