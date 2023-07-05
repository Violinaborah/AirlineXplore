import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id,name,logo, country } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="ui fluid logo">
                <img src={logo}  alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price"> {country}</div>
                {/* <div className="meta">{products}</div> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
