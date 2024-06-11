import React from "react";

import ImgContain from "../components/ImgContain.jsx";
import TitleContain from "../components/TitleContain.jsx";
import SubTitleContain from "../components/SubTitleContain.jsx";
import TextContain from "../components/TextContain.jsx";
import DevTeam from "../components/DevTeam.jsx";
import Footer from "../components/Footer.jsx";
import HomeOverview from "../components/HomeOverview.jsx";

import dashboardSS from '../images/dashboardSS.png';
import HeatMapSS from '../images/HeatMapSS.png';
import TimelineSS from '../images/timelineSS.png';
import HistorySS from '../images/history-syntaxSS.png';
import CSVDemo from '../images/tuba-csv-demo.png';

export default function Home() {

  return (
    <div className="home-wrapper">
      {<HomeOverview />}
      <div className='home-visual-container'>
        {<TitleContain text={"Dashboard with pinned errors"}/>}
        {<ImgContain src={dashboardSS} alt={"Dashboard image"} className={"img-file-visual"}/>}
        {<TitleContain text={"Heat Map Display"}/>}
        {<ImgContain src={HeatMapSS} alt={"Heat Map image"} className={"img-file-visual"}/>}
        {<TitleContain text={"Timeline Display"} />}
        {<ImgContain src={TimelineSS} alt={"Timeline image"} className={"img-file-visual"}/>}
        {<TitleContain text={"History Display"} />}
        {<ImgContain src={HistorySS} alt={"History image"} className={"img-file-visual"}/>}
        {<TitleContain text={"Download Pinned Errors to a CSV"}/>}
        {<TextContain text={"All your currently viewed errors compiled to a csv file for easy shareability and record keeping"}/>}
        {<ImgContain src={CSVDemo} alt={"TUBA CSV demo image"} className={"img-file-visual"}/>}
      </div>
        {<DevTeam />}
        {<Footer />}
    </div>
  )
}