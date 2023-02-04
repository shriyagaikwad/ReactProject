import React, { Component } from "react";
import ProductComponent from "./components/productComponent";
import SearchComponent from "./components/searchComponents";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.fetchApi("cars");
    this.state = {
      products: [],
    };
  }

  fetchApi(data) {
    axios
      .get(
        `https://pixabay.com/api/?key=30685457-af06ad80c767aa223af171c42&q=${data}&image_type=photo`
      )
      //   .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ products: data.data.hits });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-5">
            <SearchComponent fetchApi={this.fetchApi} />
          </div>

          <div className="row mt-3">
            <ProductComponent product={this.state.products} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;