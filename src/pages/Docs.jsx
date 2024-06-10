import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import GetStarted from "../components/Doc-GetStarted.jsx";
import DockerConfig from "../components/Doc-DockerConfig.jsx";
import PrometheusConfig from "../components/Doc-PrometheusConfig.jsx";
import DocDatabase from "../components/Doc-Database.jsx";

export default function Docs() {
  return (
    <div className="docs-wrapper grid grid-cols-[300px_auto]">
      <div className="docs-nav flex justify-center">
        <ul className="docs-nav-link-contain">
          <li className="docs-nav-links"><Link to="getStarted" className="button-style side-nav">Getting Started</Link></li>
          <li className="docs-nav-links"><Link to="promConfig" className="button-style side-nav">Prometheus Config</Link></li>
          <li className="docs-nav-links"><Link to="dockerConfig" className="button-style side-nav">Docker Config</Link></li>
          <li className="docs-nav-links"><Link to="databaseConfig" className="button-style side-nav">Database Config</Link></li>
        </ul>
      </div>
      <div className="docs-container">
        <Routes>
          <Route index element={<GetStarted/>} />
          <Route path="getStarted" element={<GetStarted/>} />
          <Route path="dockerConfig" element={<DockerConfig/>} />
          <Route path="promConfig" element={<PrometheusConfig/>} />
          <Route path="databaseConfig" element={<DocDatabase/>} />
        </Routes>
      </div>
    </div>
  )
}