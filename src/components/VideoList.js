import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  const renderedVideoList = videos.map((video) => {
    return <VideoItem video={video} key={video.id.videoId} />;
  });

  return <div className="ui relaxed divided list">{renderedVideoList}</div>;
}

export default VideoList;
