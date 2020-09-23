import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
   onTermSubmit = async (term) => {
    let videos = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };
  render() {
    return (
      <div style={{ paddingTop: "15px" }} className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
