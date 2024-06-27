import React from "react";


export default function TextContain ({text, sectionClasses, divClasses, pClasses}) {

  return (
    <section className={"text-section " + (sectionClasses ? sectionClasses : '')}>
      <div className={"text-container " + (divClasses ? divClasses: '')}>
        <p className={"text " + (pClasses ? pClasses : '')}>{text}</p>
      </div>
    </section>
  )
}