import React from "react";
import { useNavigate } from "react-router";

export default function Nav() {

//   const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div className="nav">
        <ul>
          <li>Dashboard</li>
          <li>Download</li>
        </ul>
      </div>    
    </div>
  )
}