import React from "react";
import { useNavigate } from "react-router";

import tubaLogo from '../images/tubaLogo-whiteBG-teal.png'
import { Link } from "react-router-dom";

export default function Nav() {

//   const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div className="nav-content">
        <div className="logo">
          <Link to="/" className="logo-img-link">
            <img className="logo-img" src={tubaLogo} alt="Tuba Logo"></img>
          </Link>
          <div className="tuba-title">
            <h1>TUBA</h1>
          </div>
        </div>
        <div className="nav-buttons">
          <ul className="button-content">
            <li className='nav-button-links'>
              <Link to="/download" className="button-style top-nav">Product</Link>
            </li>
            <li className='nav-button-links'>
              <Link to="/docs" className="button-style top-nav">Docs</Link>
            </li>
          </ul>
        </div>   
      </div> 
    </div>
  )
}





{/* <div className="nav-wrapper">
<div className="nav-content flex items-center justify-between">
  <div className="logo flex items-center justify-start">
    <Link to="/" className="">
      <img className="logo-img" src={tubaLogo} alt="Tuba Logo"></img>
    </Link>
    <div className="tuba-title">
      <h1>TUBA</h1>
    </div>
  </div>
  <div className="nav-buttons">
    <ul className="flex justify-end custom-space">
      <li className='mr-3'>
        <Link to="/download" className="button-style top-nav">Product</Link>
      </li>
      <li>
        <Link to="/docs" className="button-style top-nav">Docs</Link>
      </li>
    </ul>
  </div>   
</div> 
</div> */}