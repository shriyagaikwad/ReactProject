import React, { Component } from "react";

//class Components
class searchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "", //pizza
    };
  }

  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.fetchApi(this.state.searchData);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter what do you  want to search?"
              onChange={(e) => this.setState({ searchData: e.target.value })}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default searchComponent;