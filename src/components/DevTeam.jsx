import React from "react";

import TitleContain from "./TitleContain.jsx";

import tubaDev from '../images/tubadev-placeholder.jpg';

export default function DevTeam() {
    return (
      <section className="dev-team-section">
        {<TitleContain text={"The TUBA Dev Team"}/>}
        <div className="devTeam-img-container">
          <div className="devTeam-img">
            <img src={tubaDev} alt={"Image of Myles Austin"} />
          </div>
          <div className="devTeam-img">
            <img src={tubaDev} alt={"Image of Matt Allen"} />
          </div>
          <div className="devTeam-img">
            <img src={tubaDev} alt={"Image of Emi Knox-Hershey"} />
          </div>
          <div className="devTeam-img">
            <img src={tubaDev} alt={"Image of Rick Markowitz"} />
          </div>
        </div>
        <div className="devTeam-text-container">
          <div className="devTeam-text">
            <p>Myles Austin</p>
          </div>
          <div className="devTeam-text">
            <p>Matt Allen</p>
          </div>
          <div className="devTeam-text">
            <p>Emi Knox-Hershey</p>
          </div>
          <div className="devTeam-text">
            <p>Rick Markowitz</p>
          </div>
        </div>
      </section>
    )
}

