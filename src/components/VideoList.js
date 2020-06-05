import React from "react";
import VideoItems from "./VideoItems";

const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    return (
      <VideoItems
        key={video.id.videoId}
        video={video}
        selectedVideo={props.selectedVideo}
      />
    );
  });

  return <div className="ui relaxed divided list">{videos}</div>;
};

export default VideoList;
