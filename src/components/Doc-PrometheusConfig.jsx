import React from "react";
import { Link } from "react-router-dom";

import DocTextBlurb from "./Doc-TextBlurb.jsx";
import CodeSnippet from "./CodeSnippet.jsx";

export default function PrometheusConfig() {
  return (
    <section className="docComp-wrapper">
      <div className="docComp-title-wrapper">
        <h1 className="prom-title doc-title">Prometheus Configuration</h1>
      </div>
      <section className="doc-section">
        {<DocTextBlurb text={"If you are using Tuba in a Prometheus environment, you can take advantage of the custom Prometheus metrics included in the npm package."} />}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"To use this functionality, include the prom-client package in your dependencies:"} />}
        {<CodeSnippet code={"npm install prom-client"}/>}
      </section>
      <section className="doc-section"></section>
      {<DocTextBlurb text={"Then require the dependency in your server routing file:"} />}
      {<CodeSnippet code={"const promClient = require('prom-client');"}/>}
      <section className="doc-section"></section>
      {<DocTextBlurb text={"Expose /metrics in your Express routing to allow Prometheus to scrape the data that TUBA will capture:"} />}
      {<CodeSnippet code={`
        // Expose metrics endpoint for Prometheus to scrape
          app.get('/metrics', async (req, res) => {
            res.set('Content-Type', promClient.register.contentType);
            res.send( await promClient.register.metrics());
          }); 
      `}/>}
      <section className="doc-section"></section>
      <div className="doc-textb-container">
            <p className="doc-textb-text">For instructions on how to set up prometheus, see the <a className="prom-hyperlink" href="https://prometheus.io/docs/introduction/overview/" target="_blank" rel="noopener noreferrer">
              Prometheus documentation
              </a>.
            </p>
      </div>
      <section className="doc-content-nav-wrapper">
        <h3 className="doc-content-nav-title">Continue to Docker Configuration</h3>
       <Link to="/docs/dockerConfig" className="button-style side-nav doc-content-nav">Docker Config</Link>
      </section>
    </section>
  )
}