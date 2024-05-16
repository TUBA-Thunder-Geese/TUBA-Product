import React from "react";

export default function VideoContain({ src, alt, controls = false, autoplay = true, loop = true }) {
    return (
      <section className="video-section">
        <video src={src} alt={alt} controls={controls} autoplay={autoplay} loop={loop}>
          Sorry, your browser does not support embedded videos.
        </video>
      </section>
    )
}

