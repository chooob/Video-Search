import React from "react";

const VideoDetail = (props) => {
  if (!props.video) {
    return <div className="ui segment">Loading...</div>;
  } else {
    //template literals
    const link = `https://www.youtube.com/embed/${props.video.id.videoId}?autoplay=1`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={link} title="Clicked Video" />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{props.video.snippet.title}</h4>
          <p>{props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
