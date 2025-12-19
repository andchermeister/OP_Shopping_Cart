import "./Shop.css";
import logo2 from "../assets/sf_logo2.svg";
import hplogo from "../assets/hp.svg";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterVerticalIcon } from "@hugeicons/core-free-icons";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useOutletContext } from "react-router";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productCounter, setProductCounter] = useState({});
  const { setBasketCounter } = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

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
          <p id="num-of-products">9 ITEMS</p>
        </section>
        <section id="products-section">
          <ul id="product-list">
            {products.map((product) => (
              <li key={product.id}>
                <img
                  src={product.image}
                  alt="product image"
                  className="product-img"
                />
                <p className="product-description">{product.title}</p>
                <div id="price-and-counter">
                  <p className="product-price">£{product.price}</p>
                  <div className="products-counter">
                    <i
                      onClick={() =>
                        setProductCounter((prev) => ({
                          ...prev,
                          [product.id]: Math.max(
                            (prev[product.id] || 0) - 1,
                            0
                          ),
                        }))
                      }
                      className="minus-icon"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </i>
                    <p>{productCounter[product.id] || 0}</p>
                    <i
                      onClick={() =>
                        setProductCounter((prev) => ({
                          ...prev,
                          [product.id]: (prev[product.id] || 0) + 1,
                        }))
                      }
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </i>
                  </div>
                  <i
                    onClick={() => {
                      const quantity = productCounter[product.id] || 0;
                      if (quantity > 0) {
                        setBasketCounter((prev) => prev + quantity);
                        setProductCounter((prev) => ({
                          ...prev,
                          [product.id]: 0,
                        }));
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faBasketShopping} />
                  </i>
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
