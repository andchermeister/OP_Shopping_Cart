import { useParams } from "react-router";
import { useOutletContext } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const { id } = useParams();
  const productId = Number(id);
  const {
    products,
    productCounter = {},
    setProductCounter,
    addToCart,
  } = useOutletContext();
  const product = products.find((p) => p.id === productId);
  const currentCount = productCounter[productId] ?? 0;

  if (!product) return <p>Loading...</p>;

  const addToBasket = () => {
    const currentCount = productCounter[productId] ?? 0;
    addToCart(productId, currentCount, product.price);
    setProductCounter((prev) => ({ ...prev, [productId]: 0 }));
  };

  return (
    <div>
      <img src={product.image} alt="product-image" id="product-image" />
      <p id="product-description">{product.title}</p>
      <p className="product-price">£{product.price}</p>
      <select
        name="numOfProducts"
        className="num-of-products"
        id={product.id}
        value={currentCount}
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
      <i onClick={() => addToBasket()}>
        <FontAwesomeIcon icon={faBasketShopping} />
      </i>
    </div>
  );
};

export default ProductPage;
