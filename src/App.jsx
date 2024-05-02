import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "./pages/Home";
import Download from "./pages/ProductDownload";
import Nav from "./components/Nav";

export default function App() {


  return (
    <>
      {<Nav/>}
      <Router>
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/download" element={<Download/>} />
        </Routes>
      </Router>
    </>
  )
}