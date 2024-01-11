import React from "react";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Cart from "../../Components/Cart/Cart";
import { useSelector } from "react-redux";
import "./Layoutpage.scss";

function Layoutpage() {
  const [showModal, setshowModal] = useState(false);

  function ModalShow() {
    setshowModal((premodal) => !premodal);
  }
  function Modalback() {
    setshowModal(false);
  }
  const cart = useSelector((state) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="Layout">
      <Navbar />
      <Outlet />
      {showModal && <Cart close={Modalback} />}
      <button className="product-cart" onClick={ModalShow}>
        <i class="fa-solid fa-cart-shopping"></i>{" "}
        <span>{getTotalQuantity()}</span>
      </button>

      <Footer />
    </div>
  );
}

export default Layoutpage;
