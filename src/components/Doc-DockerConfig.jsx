import React from "react";
import { Link } from "react-router-dom";

import DocTextBlurb from "./Doc-TextBlurb.jsx";
import DocSubTitleContain from "./Doc-SubTitleContian.jsx";
import CodeSnippet from "./CodeSnippet.jsx";

export default function DockerConfig() {
  return (
    <section className="docComp-wrapper">
      <div className="docComp-title-wrapper">
        <h1 className="dockConfig-title doc-title">Database Instantiation</h1>
      </div>
      <section className="doc-section">
        {<DocTextBlurb text={"This repo is an exact mirror of the code that runs inside the official TUBA image, and can be run independently as a full-stack application with all the functionality and features of the Docker image. The Tuba interface is run via this Docker image."} />}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"The Tuba Docker image can run independently as a standalone container or alongside your microservices images in you application's pre-configured container."} />}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"The TUBA Docker image can be downloaded with Docker Desktop or from Docker Hub with this terminal command:"} />}
        {<CodeSnippet code={"docker pull thundergeese/tuba-tracing:tracing"}/>}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"If you are running Tuba as a standalone container, you’ll need to pass in the link to your postgres database when you start up the image container:"} />}
        {<CodeSnippet code={"docker run -p [Your Port]:42069 -e TUBA_PG_URI=[Your URI] thundergeese/tuba-tracing:tracing"} />}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"Navigate to localhost:[Your Port] to use TUBA"} />}
      </section>
      <section className="doc-section">
        
      </section>
      {<DocSubTitleContain title={"Microserviced Environment"} />}
      <section className="doc-section">
        {<DocTextBlurb text={"To use Tuba alongside other images with docker-compose, you can add the Docker Hub Tuba image to your docker-compose file: The Tuba image in the below example references a .env file that should have the same key value as detailed in the npm package section of these docs:"}/>}
        {<CodeSnippet code={`
          version: "3"
          services:
          tuba:
            image: thundergeese/tuba-tracing:tracing
            env_file:
              - .env
            ports:
              - "[YOUR PORT]:42069"
          your-other-service:
            build:
              context: ./path/to/your/service
              dockerfile: Dockerfile-your-service
            networks:
              - localnetwork
            ports:
              - 3000:3000 
        `}/>}
      </section>
      <section className="doc-content-nav-wrapper">
        <h3 className="doc-content-nav-title">Continue to Database Instantiation</h3>
       <Link to="/docs/databaseConfig" className="button-style side-nav doc-content-nav">Database Config</Link>
      </section>
    </section>
  )
}