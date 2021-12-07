import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/products/productAction";
import { Link } from "react-router-dom";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(dispatch(getAllProducts()));
  }, []);

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>PRODUCTS</h1>
        <p>
          Browse all our products, from every collections, all in one place.
        </p>
      </div>
      <div className="products-list">
        {props.products.products.map((p) => (
          <div key={p.id} className="product-card">
            <Link to={"/product/" + p.id}>
              <div
                className="product-image"
                style={{ backgroundImage: `url(${p.picture})` }}
              />
              <div className="product-infos">
                <div className="name">
                  <h3>{p.name}</h3>
                  <h4>{p.category}</h4>
                </div>
                <div className="price">
                  <h2>€{p.price}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    products: store.products,
  };
};

export default connect(mapStateToProps, null)(Products);
