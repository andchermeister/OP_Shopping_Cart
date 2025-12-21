import "./Shop.css";
import logo2 from "../assets/sf_logo2.svg";
import hplogo from "../assets/hp.svg";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterVerticalIcon } from "@hugeicons/core-free-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";
import { Link } from "react-router";

const Shop = () => {
  const {
    products,
    productCounter = {},
    setProductCounter,
    setCart,
    setBasketCounter,
    setOrderTotal,
  } = useOutletContext();
  const quantities = [0, 1, 2, 3, 4, 5];

  const addToBasket = (productId, productPrice) => {
    const quantity = productCounter[productId] ?? 0;
    const priceToAdd = quantity * productPrice;
    if (quantity > 0) {
      setCart((prev) => ({
        ...prev,
        [productId]: (prev[productId] ?? 0) + quantity,
      }));
      setProductCounter((prev) => ({ ...prev, [productId]: 0 }));
      setBasketCounter((prev) => prev + quantity);
      setOrderTotal((prev) => prev + priceToAdd);
    }
  };

  return (
    <>
      <div id="shop-div">
        <section id="shop-logo-section">
          <img src={logo2} alt="ferrari-horse-logo2" id="logo2" />
          <div id="logo-separator"></div>
          <img src={hplogo} alt="hp-logo" id="hplogo" />
        </section>
        <section id="shopping-categories">
          <ul id="list-of-categories">
            <li className="shop-category">MEN</li>
            <li className="shop-category">WOMEN</li>
            <li className="shop-category">KIDS</li>
            <li className="shop-category">DRIVERS</li>
            <li className="shop-category">EYEWEAR</li>
            <li className="shop-category">LEGO</li>
            <li className="shop-category">COLLECTIBLES</li>
          </ul>
        </section>
        <p id="category-name">SCUDERIA FERRARI FORMULA 1 T-SHIRTS</p>
        <section id="filter-and-num-of-itms">
          <div id="filter-div">
            <i>
              <HugeiconsIcon icon={FilterVerticalIcon} size={24} />
            </i>
            <p id="filter-and-sort">FILTER & SORT</p>
          </div>
          <p id="num-of-products">{products.length} ITEMS</p>
        </section>
        <section id="products-section">
          <ul id="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-li">
                <Link to={`/product/${product.id}`} className="link-no-decor">
                  <img
                    src={product.image}
                    alt="product image"
                    className="product-img"
                  />
                  <p className="product-description">{product.title}</p>
                </Link>
                <div id="price-and-counter">
                  <p className="product-price">£{product.price}</p>
                  <div id="select-and-basket">
                    <select
                      name="numOfProducts"
                      id="num-of-products"
                      value={productCounter[product.id] ?? 0}
                      onChange={(e) =>
                        setProductCounter((prev) => ({
                          ...prev,
                          [product.id]: Number(e.target.value),
                        }))
                      }
                    >
                      {quantities.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <i onClick={() => addToBasket(product.id, product.price)}>
                      <FontAwesomeIcon icon={faBasketShopping} />
                    </i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Shop;
