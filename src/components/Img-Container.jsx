import React from "react";


export default function ImgContain (imgSrc) {

  return (
    <section className="img-section">
      <div className="img-container">
        <img className="img-file" src={imgSrc}></img>
      </div>
    </section>
  )
}