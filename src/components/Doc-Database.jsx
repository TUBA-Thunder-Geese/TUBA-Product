import React from "react";

import DocSubTitleContain from "./Doc-SubTitleContian.jsx";
import DocTextBlurb from "./Doc-TextBlurb.jsx";
import CodeSnippet from "./CodeSnippet.jsx";

export default function DocDatabase() {
  return (
    <section className="docComp-wrapper">
      <div className="docComp-title-wrapper">
        <h1 className="database-title doc-title">Database Instantiation</h1>
      </div>
      <section className="doc-section">
        {<DocTextBlurb text={"The first time you start the TUBA image, the interface should be visible but will stall on the loading screen 'Fetching Errors from Database.' This is because the database schema hasn't been set yet. To do this, make sure the image is running and send a GET request to http://localhost:[YOUR PORT]/setup/. Doing so will run this SQL script in your database to create the necessary tables and columns:"} />}
        {<CodeSnippet code={`
          CREATE TABLE users (
            usr_id SERIAL PRIMARY KEY,
            usr_name VARCHAR(250) NOT NULL,
            usr_password VARCHAR(1000) NOT NULL,
            usr_email VARCHAR(500) NOT NULL
            );
            CREATE TABLE applications (
            app_id SERIAL PRIMARY KEY,
            app_usr_id INTEGER REFERENCES users (usr_id) NOT NULL,
            app_name VARCHAR(500) NOT NULL,
            app_kubernetes BOOLEAN NOT NULL
            );
            CREATE TABLE services (
            srv_id SERIAL PRIMARY KEY,
            srv_name VARCHAR(500) NOT NULL,
            srv_language VARCHAR(250),
            srv_usr_id INTEGER REFERENCES users (usr_id) NOT NULL,
            srv_app_id INTEGER REFERENCES applications (app_id) NOT NULL
            );
            CREATE TABLE error_data (
            err_id SERIAL PRIMARY KEY,
            err_app_id INTEGER REFERENCES applications (app_id) NOT NULL,
            err_srv_id INTEGER REFERENCES services (srv_id) NOT NULL,
            err_job_name VARCHAR(500) NOT NULL,
            err_time BIGINT NOT NULL,
            err_message VARCHAR(1000),
            err_type VARCHAR(250) NOT NULL,
            err_stack VARCHAR(4000) NOT NULL,
            err_file_path VARCHAR(2000),
            err_file VARCHAR(500),
            err_line_num INTEGER,
            err_module VARCHAR(500),
            err_module_function VARCHAR(500),
            err_full_text VARCHAR(2000)
            );
            CREATE TABLE service_connections (
            con_id SERIAL PRIMARY KEY,   
            con_srv1 INTEGER REFERENCES services (srv_id) NOT NULL,
            con_srv2 INTEGER REFERENCES services (srv_id) NOT NULL
            );
        `}/>}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"You will then need to populate the following tables with the relevant data that is unique to your application:"}/>}
        <div className="doc-list-contain">
          <ul className="doc-list">
            <li>users</li>
            <li>applications</li>
            <li>services</li>
            <li>service-connections</li>
          </ul>
        </div>
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"The applications table is the name of your overall application. The services table should contain the names of the individual microservices that make up your application. The services_connections should contain the connections between microservices."}/>}
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"For example, if your microservices were connected like in this image:"}/>}
        <div className="doc-img-contain">
          <img className="doc-img" src='../images/Services-connections.png' alt="image of example microservice connections"></img>
        </div>
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"then the relevant columns of your services table would look something like this:"}/>}
        <div className="doc-img-contain">
          <img className="doc-img" src='../images/srv-table.png' alt="image of example microservice connections"></img>
        </div>
      </section>
      <section className="doc-section">
        {<DocTextBlurb text={"and the services_connections table would look like this:"}/>}
        <div className="doc-img-contain">
          <img className="doc-img" src='../images/connect-table.png' alt="image of example microservice connections"></img>
        </div>
      </section>
    </section>
  )
}

