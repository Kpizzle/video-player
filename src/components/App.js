import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "15px" }} className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
