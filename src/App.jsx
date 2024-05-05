import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Download from "./pages/ProductDownload";
import Nav from "./components/Nav.jsx";
import Header from "./components/Header.jsx";

export default function App() {

  return (
    <>
      {/* {<Header/>} */}
      {<Nav/>}
      {<Home/>}
      {/* <Router>
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/download" element={<Download/>} />
        </Routes>
      </Router> */}
    </>
  )
}