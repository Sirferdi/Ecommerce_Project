import React from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementQuantity } from "../../redux/cartslice";
import { decrementQuantity } from "../../redux/cartslice";
import { removeItem } from "../../redux/cartslice";

function Cart(prop) {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  console.log(getTotalQuantity());
  console.log(cart);

  return (
    <div className="Cart-Section">
      <div className="Card-Container">
        <span className="close" onClick={prop.close}>
          &times;
        </span>
        <p className="Cart-Header">Order Cart</p>

        {cart.map((cart) => (
          <div className="Cart-Card">
            <div className="Cart-Image">
              <img src={cart.image} alt="" />
            </div>
            <div className="Cart-Details">
              <p className="Cart-Name">{cart.title}</p>
              <p className="Cart-Cate">{cart.category}</p>

              <div className="Cart-Amount">
                <div>
                  <p className="Cart-Price">${cart.price}</p>
                </div>
                <div className="Cart-Control">
                  <span>
                    <button
                      onClick={() => dispatch(decrementQuantity(cart.id))}
                    >
                      -
                    </button>
                  </span>
                  <span className="Cart-quantity">{cart.quantity}</span>
                  <span>
                    <button
                      onClick={() => dispatch(incrementQuantity(cart.id))}
                    >
                      +
                    </button>
                  </span>
                </div>

                <div>
                  <p
                    onClick={() => dispatch(removeItem(cart.id))}
                    className="Cart-delete"
                  >
                    <i class="fa-solid fa-trash delete "></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <p className="Cart-Total">
          Total({getTotalQuantity().totalQuantity} = $
          {getTotalQuantity().totalPrice})
        </p>
      </div>
    </div>
  );
}

export default Cart;
