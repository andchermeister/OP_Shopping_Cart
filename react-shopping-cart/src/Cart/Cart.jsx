import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";

const Cart = () => {
  const { products, cart, setCart, setBasketCounter } = useOutletContext();
  console.log(products);
  const cartItems = products.filter((p) => (cart[p.id] ?? 0) > 0);
  const totalQuantity = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  console.log(`cart has ${totalQuantity}`);

  const addItem = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
    setBasketCounter((prev) => prev + 1);
  };

  const removeItem = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] ?? 0) - 1, 0),
    }));
    setBasketCounter((prev) => Math.max(prev - 1, 0));
  };

  const deleteItem = (productId) => {
    const quantityToRemove = cart[productId] ?? 0;
    setCart((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
    setBasketCounter((prev) => Math.max(prev - quantityToRemove, 0));
  };

  return (
    <>
      <section id="cart-section">
        <div id="products-div">
          <h1 id="cart-h1">Cart {totalQuantity} items.</h1>
          <ul className="cart-row cart-header">
            <li>Product</li>
            <li>Unit Price</li>
            <li>Tax</li>
            <li>Total</li>
          </ul>
          {cartItems.map((product) => (
            <div key={product.id} className="cart-name">
              <img src={product.image} alt="product-img" className="prod-img" />
              <ul className="cart-row">
                <li>
                  <p className="product-title">{product.title}</p>
                </li>
                <li>£73.77</li>
                <li>£16.23</li>
                <li>{product.price}</li>
              </ul>
              <div className="counter-remover">
                <div className="products-counter">
                  Quantity
                  <i onClick={() => removeItem(product.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </i>
                  <p>{cart[product.id] ?? 0}</p>
                  <i onClick={() => addItem(product.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </i>
                </div>
                <div className="products-remover">
                  <i onClick={() => deleteItem(product.id)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </i>
                </div>
              </div>
            </div>
          ))}
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
