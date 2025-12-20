import App from "./App.jsx";
import Home from "./Homepage/Home.jsx";
import Shop from "./Shop/Shop.jsx";
import Cart from "./Cart/Cart.jsx";
import ErrorPage from "./Errorpage/Errorpage.jsx";
import ProductPage from "./ProductPage/ProductPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
];
export default routes;
