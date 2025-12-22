import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [productCounter, setProductCounter] = useState({});
  const [cart, setCart] = useState({});
  const [basketCounter, setBasketCounter] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  const addToCart = (productId, quantity, productPrice) => {
    if (quantity <= 0) return;
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + quantity,
    }));
    setBasketCounter((prev) => prev + quantity);
    setOrderTotal((prev) => prev + productPrice * quantity);
  };

  const removeFromCart = (productId, quantity = 1, productPrice) => {
    setCart((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] ?? 0) - quantity, 0),
    }));
    setBasketCounter((prev) => Math.max(prev - quantity, 0));
    setOrderTotal((prev) => Math.max(prev - productPrice * quantity, 0));
  };

  const deleteFromCart = (productId, productPrice) => {
    const quantity = cart[productId] ?? 0;
    setCart((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
    setBasketCounter((prev) => Math.max(prev - quantity, 0));
    setOrderTotal((prev) => Math.max(prev - productPrice * quantity, 0));
  };

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
          orderTotal,
          setOrderTotal,
          addToCart,
          removeFromCart,
          deleteFromCart,
        }}
      />
    </>
  );
};

export default App;
