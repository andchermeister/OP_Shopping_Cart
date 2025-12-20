import "./Cart.css";
import productImg from "../assets/i1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Cart = () => {
  const [productCounter, setProductCounter] = useState(0);
  return (
    <>
      <section id="cart-section">
        <div id="products-div">
          <h1 id="cart-h1">Cart (1 item)</h1>
          <ul className="cart-row cart-header">
            <li>Product</li>
            <li>Unit Price</li>
            <li>Tax</li>
            <li>Total</li>
          </ul>
          <img src={productImg} alt="prod-img" className="prod-img" />
          <ul className="cart-row">
            <li>
              <div className="product-cell">
                <p className="product-title">
                  Puma for Scuderia Ferrari HP Drivers T-shirt 2025
                </p>
              </div>
            </li>
            <li>£73.77</li>
            <li>£16.23</li>
            <li>£90</li>
          </ul>
          <div className="products-counter">
            Quantity
            <i
              onClick={() => setProductCounter((prev) => prev - 1)}
              className="minus-icon"
            >
              <FontAwesomeIcon icon={faMinus} />
            </i>
            <p>{productCounter}</p>
            <i onClick={() => setProductCounter((prev) => prev + 1)}>
              <FontAwesomeIcon icon={faPlus} />
            </i>
          </div>
        </div>
        <div id="order-summary">
          <h1>Order summary</h1>
          <div className="summary-flex-div">
            <p>Your basket:</p>
            <p>£90,00</p>
          </div>
          <div className="summary-flex-div shipping">
            <p>Shipping:</p>
            <p>£10,00</p>
          </div>
          <div className="summary-flex-div">
            <p>Order total:</p>
            <p>£100,00</p>
          </div>
          <button id="checkout-btn">Checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
