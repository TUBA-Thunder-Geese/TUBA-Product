import React from "react";
import { useNavigate } from "react-router";

import tubaLogo from '../images/TubaLogo.png'
import { Link } from "react-router-dom";

export default function Nav() {

//   const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div className="nav-content flex items-center justify-between">
        <div className="logo justify-start">
          <Link to="/">
            <img className="logo-img" src={tubaLogo} alt="Tuba Logo"></img>
          </Link>
        </div>
        <div className="tuba-title">
          <h1>TUBA</h1>
        </div>
        <div className="nav-buttons">
          <ul className='flex justify-end custom-space'>
            <li className='mr-3'>
              <Link to="/download" className="inline-block border border-rgb(91, 143, 185)-500 rounded py-1 px-3 bg-500 text-white hover:bg-nav-blue">Product</Link>
            </li>
            <li>
              <a to="/docs" className="inline-block border border-rgb(91, 143, 185)-500 rounded py-1 px-3 bg-500 text-white hover:bg-nav-blue">Docs</a>
            </li>
          </ul>
        </div>   
      </div> 
    </div>
  )
}