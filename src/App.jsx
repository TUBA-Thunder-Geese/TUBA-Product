import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Download from "./pages/ProductDownload";
import Nav from "./components/Nav.jsx";
import Docs from "./pages/Docs.jsx";
import Download from "./pages/ProductDownload.jsx";

export default function App() {

  return (
    <>
      <Router>
        {<Nav/>}
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/docs" element={<Docs />} />
          <Route path="/download" element={<Download/>} />
        </Routes>
      </Router>
    </>
  )
}