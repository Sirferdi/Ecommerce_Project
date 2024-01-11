import React from "react";
import "./Product.scss";

import { addtoCart } from "../../redux/cartslice";

import { useDispatch } from "react-redux";

function Product({ id, image, title, price, category, quantity = 0 }) {
  // console.log;

  const dispatch = useDispatch();

  function add() {
    dispatch(
      addtoCart({
        id,
        title,
        image,
        price,

        quantity,
      })
    );
  }
  return (
    <div className="product-display" to="">
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-detail">
        <div>
          <p className="product-name">{title.substring(0, 30)}</p>
          <p className="product-cate">{category}</p>
        </div>

        <div className="add-price">
          <p className="product-price">${price}</p>
          <p className="product-add" onClick={add}>
            <button>+</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
