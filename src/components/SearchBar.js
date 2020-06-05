import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: " " };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.onChange}
              value={this.state.term}
              type="text"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
