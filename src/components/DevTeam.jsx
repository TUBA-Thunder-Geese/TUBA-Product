import React from "react";

import TitleContain from "./TitleContain.jsx";

import tubaDev from '../images/tubadev-placeholder.jpg';
import Myles from '../images/Myles-profile.jpg';
import Matt from '../images/Matt-profile.jpeg';

export default function DevTeam() {
    return (
      <section className="dev-team-section">
        {<TitleContain text={"The TUBA Dev Team"}/>}
        <div className="devTeam-img-container">
          <div className="devTeam-img">
            <img src={Matt} alt={"Image of Matthew Allen"} />
            <div className="devTeam-text text">
              <p>Matthew Allen</p>
            </div>
          </div>
          <div className="devTeam-img">
            <img src={Myles} alt={"Image of Myles Austin"} />
              <div className="devTeam-text text">
                <p>Myles Austin</p>
              </div>
          </div>
          <div className="devTeam-img">
            <img src={tubaDev} alt={"Image of Emi Knox-Hershey"} />
            <div className="devTeam-text text">
              <p>Emi Knox-Hershey</p>
            </div>
          </div>
          <div className="devTeam-img">
            <img src={tubaDev} alt={"Image of Rick Markowitz"} />
            <div className="devTeam-text text">
              <p>Rick Markowitz</p>
            </div>
          </div>
        </div>
        {/* <div className="devTeam-text-container">
          <div className="devTeam-text text">
            <p>Myles Austin</p>
          </div>
          <div className="devTeam-text text">
            <p>Matt Allen</p>
          </div>
          <div className="devTeam-text text">
            <p>Emi Knox-Hershey</p>
          </div>
          <div className="devTeam-text text">
            <p>Rick Markowitz</p>
          </div>
        </div> */}
      </section>
    )
}

