// import { useState } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
