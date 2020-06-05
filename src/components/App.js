import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import dotenv from "dotenv";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
dotenv.config();

class App extends React.Component {
  state = { video: [], selected: null };

  componentDidMount() {
    this.onTermSubmit("cat");
  }

  onTermSubmit = async (term) => {
    //const test = process.env.REACT_APP_API_KEY;

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        type: "video",
      },
    });

    console.log(response.data.items);
    this.setState({
      video: response.data.items,
      selected: response.data.items[0],
    });
  };

  selectedVideo = (video) => {
    console.log(video);

    this.setState({ selected: video });
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: "20px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.video}
                selectedVideo={this.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
