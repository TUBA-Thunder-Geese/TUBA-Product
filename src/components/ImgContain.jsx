import React from "react";


export default function ImgContain (src, alt) {

  console.log('Src prop: ', src); 

  return (
    <section className="img-section">
      <div className="img-container">
        <img className="img-file" src={src.src} alt={src.alt}></img>
      </div>
    </section>
  )
}