import React from "react";

import DocSubTitleContain from "./Doc-SubTitleContian.jsx";
import DocTextBlurb from "./Doc-TextBlurb.jsx";

export default function GetStarted() {
  return (
    <section className="docComp-wrapper">
      <div className="docComp-title-wrapper">
        <h1 className="getStart-title doc-title">Getting Started</h1>
      </div>
      {<DocSubTitleContain text={"Express.js Confirguration"} />}
      {<DocTextBlurb text={"For each individual service in your microservice architecture, include the package in your dependencies:"} />}
      {/* Section for download npm i tuba-tracing */}
      {<DocTextBlurb text={'Now you\’re ready to require the package function into the file where Express does your error handling:'} />}
      {/* const { tubaMetricRouter } = require('tuba-tracing'); */}
      {<DocTextBlurb text={"The function should be invoked in the Express global error handler, and passed the JavaScript error object and the name of the service/app in which the error occurred:"} />}
      {/* // Global Error handler
      app.use((err, req, res, next) => {

      // TUBA error metrics and parsing
      tubaMetricRouter(err, 'the name of your service');

      // Your custom error handling for http response
       res.status(500).json({"message": "An error occurred!"});
       }); */}
      {<DocTextBlurb text={"You will need to setup/provide your own secure postgres Database. This ensures your data is secure and private. Create an empty database and place the URI in an .env file. You MUST use TUBA_PG_URI as the proprety key. Ex:"} />}
      {/* TUBA_PG_URI='https://postgress.database.link.here.com' */}
      {<DocTextBlurb text={"Tuba now has access to your database. The database schema should still be unconfigured at this point. This can be done via a simple Postman request that will be covered in the Docker Image section of the docs."} />}
    </section>
  )
}