import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  console.log(productId);
  const [product, setProduct] = useState(null);
  const {
    productCounter = {},
    setProductCounter,
    setBasketCounter,
  } = useOutletContext();
  const currentCount = productCounter[productId] || 0;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.image} alt="product image" id="product-image" />
      <p id="product-description">{product.title}</p>
      <p className="product-price">£{product.price}</p>
      <select
        name="numOfProducts"
        id="num-of-products"
        value={productCounter[productId] ?? 0}
        onChange={(e) => {
          const newCount = Number(e.target.value);
          setProductCounter((prev) => ({
            ...prev,
            [productId]: newCount,
          }));
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <i
        onClick={() => {
          if (currentCount > 0) {
            setBasketCounter((prev) => prev + currentCount);
            setProductCounter((prev) => ({
              ...prev,
              [productId]: 0,
            }));
          }
        }}
      >
        <FontAwesomeIcon icon={faBasketShopping} />
      </i>
    </div>
  );
};

export default ProductPage;
