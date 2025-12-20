import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productCounter, setProductCounter] = useState({});
  const [cart, setCart] = useState({});
  const [basketCounter, setBasketCounter] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  return (
    <>
      <Navbar basketCounter={basketCounter} />
      <Outlet
        context={{
          products,
          setProducts,
          productCounter,
          setProductCounter,
          cart,
          setCart,
          basketCounter,
          setBasketCounter,
        }}
      />
    </>
  );
};

export default App;
