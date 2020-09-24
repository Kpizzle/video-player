import React from "react";

function VideoItem({ video }) {
  return (
    <div className="ui container">
      <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" srcset="" />
      <div>{video.snippet.title}</div>
    </div>
  );
}

export default VideoItem;
