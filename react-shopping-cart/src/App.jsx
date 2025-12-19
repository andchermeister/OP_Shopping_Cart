import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";

const App = () => {
  const [basketCounter, setBasketCounter] = useState(0);
  return (
    <>
      <Navbar basketCounter={basketCounter} />
      <Outlet context={{ basketCounter, setBasketCounter }} />
    </>
  );
};

export default App;
