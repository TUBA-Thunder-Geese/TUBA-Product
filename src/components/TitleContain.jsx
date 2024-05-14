import React from "react";


export default function TitleContain ({text}) {

  return (
    <section className="title-section">
      <div className="title-container">
        <h2 className="title">{text}</h2>
      </div>
    </section>
  )
}