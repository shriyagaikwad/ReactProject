import React, { useState } from "react";
import ProductComponent from "./component/ProductComponent.jsx";
import SearchComponent from "./component/searchComponent";
import axios from "axios";

const App = () => {
  const [product, setProducts] = useState([]);
  function fetchApi(data) {
    axios
      .get(
        `https://pixabay.com/api/?key=30685457-af06ad80c767aa223af171c42&q=${data}&image_type=photo`
      )
      //   .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        setProducts(data.data.hits);
      });
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <SearchComponent fetchApi={fetchApi} />
        </div>

        <div className="row mt-3">
          <ProductComponent product={product} />
        </div>
      </div>
    </>
  );
};

export default App;