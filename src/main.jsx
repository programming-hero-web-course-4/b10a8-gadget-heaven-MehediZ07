import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import AllProduct from "./Components/Products/AllProduct/AllProduct";
import "./index.css";
import Root from "./Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../Categories.json"),
        children: [
          {
            path: "",
            element: <AllProduct></AllProduct>,
            loader: () => fetch("../Data.json"),
          },
          {
            path: "/Product/:Category",
            element: <AllProduct></AllProduct>,
            loader: () => fetch("../Data.json"),
          },
        ],
      },
      {
        path: "/Details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../Data.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
