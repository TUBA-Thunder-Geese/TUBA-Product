import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Overview from "../components/Doc-Overview.jsx";
import Installation from "../components/Doc-Installation.jsx";

export default function Docs() {
  return (
    <Router>
      <h1>Docs Here</h1>
      <div className="flex">
        <ul>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="installation">Overview</Link></li>
        </ul>
      </div>
      <div className="flex-1 p4">
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="installation" element={<Installation />} />
        </Routes>
      </div>
    </Router>
  )
}