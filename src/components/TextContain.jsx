import React from "react";


export default function TextContain (text) {

  return (
    <section className="text-section">
      <div className="text-container">
        <p className="text">{text}</p>
      </div>
    </section>
  )
}