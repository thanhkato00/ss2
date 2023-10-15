import React from "react";
import "./Product.css";

function Product({ state }) {
  return (
    <>
      <section className="card-container .row-cols-3 ">
        {state.map((product) => (
          <div className="card " style={{ width: "18rem" }}>
            <div className="card-header ">
              <img src={product.img} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Product;
{
  /* <section className="card">
            <img
              className="card-img"
              src={product.img}
              alt=""
              srcset=""
            />
            <div className="card-details">
              <h3 className="title">{product.title}</h3>
              <section className="card-reviews">
                <BsFillStarFill className="ratings-star" />
                <BsFillStarFill className="ratings-star" />
                <BsFillStarFill className="ratings-star" />
                <BsFillStarFill className="ratings-star" />
                <span className="total-reviews">{product.reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>{product.prevPrice}円</del> {product.newPrice}円
                </div>
                <div className="bag">
                  <BsFillBagHeartFill className="bag-icon" />
                </div>
              </section>
            </div>
          </section> */
}
