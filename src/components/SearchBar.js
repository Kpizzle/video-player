import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    //TODO: Make sure we call callback from parent comp
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            Video Search
            <input value={this.state.term} onChange={this.onInputChange} />

          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
