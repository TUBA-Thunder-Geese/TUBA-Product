import React from "react";
import { useNavigate } from "react-router";

import tubaLogo from '../images/TubaLogo.png'

export default function Nav() {

//   const navigate = useNavigate();
  return (
    <div className="nav-wrapper">
      <div class="flex justify-start items-center">
            <img className="logo-img" src={tubaLogo}></img>
          </div>
      <div className="nav-buttons">
        <ul class='flex justify-end items-center custom-space'>
          <li class='mr-3'>
            <a class="inline-block border border-rgb(91, 143, 185)-500 rounded py-1 px-3 bg-500 text-white hover:bg-nav-blue" href="#">Product</a>
          </li>
          <li>
            <a class="inline-block border border-rgb(91, 143, 185)-500 rounded py-1 px-3 bg-500 text-white hover:bg-nav-blue" href="#">Docs</a>
          </li>
        </ul>
      </div>    
    </div>
  )
}