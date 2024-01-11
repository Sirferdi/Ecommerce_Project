import React, { useState, useEffect, useMemo } from "react";
import "./Search.scss";

import { Link } from "react-router-dom";
import Product from "../Product/Product";

function Search() {
  const [Cart, setCart] = useState([]);

  const [category, setCategory] = useState("");

  const [Endpoint, setEndpoint] = useState("");

  useEffect(() => {
    const Rapid = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${
            category ? "category/" + category : ""
          }`
        );
        const result = await response.json();
        setCart(result);
      } catch (error) {
        console.error(error);
      }
    };
    Rapid();
  }, [category]);

  function all(e) {
    setCategory("");
    e.preventDefault();
  }

  function electronics() {
    setCategory("electronics");
  }

  function men() {
    setCategory("men's clothing");
  }

  function women() {
    setCategory("women's clothing");
  }
  function jewelery() {
    setCategory("jewelery");
  }

  const handleChange = (e) => {
    e.preventDefault();
    setEndpoint(e.target.value);
  };
  console.log(Endpoint);
  const filtered = useMemo(() => {
    return Cart.filter((product) => {
      if (Endpoint.length === 0) {
        return Cart;
      } else if (Endpoint.length > 0) {
        return product.title.toLowerCase().includes(Endpoint.toLowerCase());
      }

      // else if (Finalpoint.length > 0 || !product.title.includes(Finalpoint)) {
      //   return Api;
      // }
      else {
        return true;
      }
      // return Finalpoint.length > 0 ? product.title.includes(Finalpoint) : true;
    });
  }, [Endpoint, Cart]);

  const CartElement = filtered.map((cart) => (
    <Product
      key={cart.id}
      id={cart.id}
      image={cart.image}
      category={cart.category}
      title={cart.title}
      price={cart.price}
      quantity={cart.quantity}
    />
  ));

  console.log(filtered);
  return (
    <div>
      <section className="searchBar">
        <div id="searchBar" class="searchBar fade-in">
          <form
            // onSubmit={handleSubmit}
            id="searchBar_form"
            class="searchBar_form"
            role="search"
          >
            <label for=" searchBar_text" class="offscreen"></label>
            <input
              type="text"
              id="searchBar_text"
              class="searchBar_text"
              onChange={handleChange}
              autocomplete="off"
              placeholder="Find an item"
            />
            <button
              id="searchBar_button"
              class="searchBar_button"
              title="Submit Location"
            >
              <i class="fa-solid fa-search"></i>
            </button>
          </form>
        </div>
      </section>

      <section className=" product-section">
        <div className="search-gif">
          <img src="./image/gif1.gif" alt="" />
        </div>
        <div className="category">
          <Link className="cate-link" onClick={all}>
            All
          </Link>
          <Link className="cate-link" onClick={electronics}>
            Electronics
          </Link>
          <Link className="cate-link" onClick={women}>
            Women
          </Link>
          <Link className="cate-link" onClick={men}>
            Men
          </Link>
          <Link className="cate-link" onClick={jewelery}>
            jewelery
          </Link>
        </div>
        <div className="product">
          {filtered ? CartElement : <div>Not Available</div>}
        </div>
      </section>
    </div>
  );
}

export default Search;
