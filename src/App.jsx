import React from "react";
import { Route, Router, Routes } from "react-router";
import Home from "./components/Home";
import Download from "./components/ProductDownload";
import Nav from "./components/Nav";

export default function App() {

  console.log('TUBA TRACING FOR EVAHHH')

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