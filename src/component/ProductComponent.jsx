import React from "react";

//Functional Component
const ProductComponent = ({ product }) => {
  console.log("Prop", product);
  if (!product) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <React.Fragment>
      {product &&
        product.map((data) => {
          return (
            <div className="col-md-4" key={data.id}>
              <div className="card">
                <img className="card-img-top" src={data.largeImageURL} alt="" />
                <div className="card-body">
                  <h4 className="card-title">User : {data.user}</h4>
                  <p className="card-text">Description : {data.tags}</p>
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default ProductComponent;