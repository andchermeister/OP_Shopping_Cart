import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import { Link } from "react-router";

const Cart = () => {
  const {
    products,
    cart,
    setCart,
    setBasketCounter,
    orderTotal,
    setOrderTotal,
  } = useOutletContext();
  const cartItems = products.filter((p) => (cart[p.id] ?? 0) > 0);
  const totalQuantity = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const basketPrice = Math.round(orderTotal * 100) / 100;
  const shippingCost = basketPrice > 0 ? 10 : 0;
  const orderTotalWithShipping = basketPrice + shippingCost;

  const addItem = (productId, productPrice) => {
    `productPrice: ${productPrice}`;
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
    setBasketCounter((prev) => prev + 1);
    setOrderTotal((prev) => prev + productPrice);
  };

  const removeItem = (productId, productPrice) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] ?? 0) - 1, 0),
    }));
    setBasketCounter((prev) => Math.max(prev - 1, 0));
    setOrderTotal((prev) => Math.max(prev - productPrice, 0));
  };

  const deleteItem = (productId, productPrice) => {
    const quantityToRemove = cart[productId] ?? 0;
    const priceToRemove = quantityToRemove * productPrice;
    setCart((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
    setBasketCounter((prev) => Math.max(prev - quantityToRemove, 0));
    setOrderTotal((prev) => Math.max(prev - priceToRemove, 0));
  };

  const checkout = () => {
    if (totalQuantity === 0) return;
    setCart({});
    setBasketCounter(0);
    setOrderTotal(0);
    alert("Thank you for shopping with us!");
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
          {cartItems.map((product) => {
            const quantityOfItem = cart[product.id] ?? 0;
            const totalSumOfItem = quantityOfItem * product.price;
            const unitPrice = Math.round(product.price * 0.82 * 100) / 100;
            const taxPrice = Math.round(product.price * 0.18 * 100) / 100;
            return (
              <div key={product.id} className="cart-name">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt="product-img"
                    className="prod-img"
                  />
                </Link>
                <ul className="cart-row">
                  <Link to={`/product/${product.id}`} className="link-no-decor">
                    <li>
                      <p className="product-title">{product.title}</p>
                    </li>
                  </Link>
                  <li>£{unitPrice}</li>
                  <li>£{taxPrice}</li>
                  <li>£{totalSumOfItem}</li>
                </ul>
                <div className="counter-remover">
                  <div className="products-counter">
                    Quantity
                    <i onClick={() => removeItem(product.id, product.price)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </i>
                    <p>{quantityOfItem}</p>
                    <i onClick={() => addItem(product.id, product.price)}>
                      <FontAwesomeIcon icon={faPlus} />
                    </i>
                  </div>
                  <div className="products-remover">
                    <i onClick={() => deleteItem(product.id, product.price)}>
                      <FontAwesomeIcon icon={faXmark} />
                    </i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="order-summary">
          <h1>Order summary</h1>
          <div className="summary-flex-div">
            <p>Your basket:</p>
            <p>£{basketPrice}</p>
          </div>
          <div className="summary-flex-div shipping">
            <p>Shipping:</p>
            <p>£{shippingCost}</p>
          </div>
          <div className="summary-flex-div">
            <p>Order total:</p>
            <p>£{orderTotalWithShipping}</p>
          </div>
          <button id="checkout-btn" onClick={() => checkout()}>
            Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default Cart;
