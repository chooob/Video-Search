import React from "react";
import "./VideoItems.css";

class VideoItems extends React.Component {
  render() {
    return (
      //onclick function pass in arrow function to call the method with the current video not just invoking the function
      //or else the function has no clue which video we are talking about
      //if no arrow function method is called instantly on render instead of onclick
      <div
        onClick={() => this.props.selectedVideo(this.props.video)}
        className="video-item item"
      >
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.default.url}
          alt="pic"
        ></img>
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItems;
