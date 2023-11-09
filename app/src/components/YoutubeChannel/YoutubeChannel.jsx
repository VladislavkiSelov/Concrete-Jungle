import React from 'react'

export default function YoutubeChannel() {
  return <section className="section_youtube">
      <h2>Наш you-tube канал</h2>
      <div className="box_video">
        {/* <video autoPlay controls src="https://youtu.be/ATRAMsPagcU?si=O4GMAE5kFXSbIQ8T" /> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ATRAMsPagcU?si=QKoKn9zsDuNr5gtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </div>
    </section>;
}
