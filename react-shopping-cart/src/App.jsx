import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
