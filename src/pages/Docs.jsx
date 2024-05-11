import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Overview from "../components/Doc-Overview";
import Installation from "../components/Doc-Installation";

export default function Docs() {
  return (
    <Router>
      <div className="flex">
        <ul>
          <li><Link to="/docs/overview">Overview</Link></li>
          <li><Link to="/docs/installation">Overview</Link></li>
        </ul>
      </div>
      <div className="flex-1 p4">
        <Routes>
          <Route path="/docs/overview" element={<Overview />} />
          <Route path="/docs/installation" element={<Installation />} />
        </Routes>
      </div>
    </Router>
  )
}