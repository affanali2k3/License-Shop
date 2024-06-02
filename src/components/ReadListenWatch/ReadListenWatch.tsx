import React from "react";
import "./ReadListenWatch.scss";
export const ReadListenWatch = () => {
  return (
    <section className="read-listen-watch-main">
      <h1>Read. Listen. Watch</h1>
      <div className="images">
        <div className="item">
          <img src="/blog.png" />
          <h3>Blog</h3>
        </div>
        <div className="item">
          <img src="/podcast.png" />
          <h3>Podcast</h3>
        </div>
        <div className="item">
          <img src="/video.png" />
          <h3>Video</h3>
        </div>
      </div>
    </section>
  );
};
