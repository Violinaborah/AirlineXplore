import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from "lodash";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.allProducts.products);

  const product = _.find(products, { id: _.toNumber(productId) });

  if (_.isNil(product)) {
    return <div className="ui active centered inline loader"></div>;
  }

  const { name, country, logo, slogan, head_quaters, website } = product;

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider"></div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={logo} />
            </div>
            <div className="column rp">
              <h1>{name}</h1>
              <h2>
                <a className="ui teal tag label">{slogan}</a>
              </h2>
              <h3 className="ui brown block header">{head_quaters}</h3>
              <h4 className="ui black block header">{country}</h4>
              <div className="ui red vertical animated button" tabIndex="0">
                <a
                  href={`//${website}`}
                  target="_blank"
                  className="btn btn-danger card-link download-button"
                >
                  Confirm Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
