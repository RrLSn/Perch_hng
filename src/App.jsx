// import { useState } from "react";
import "./App.css";
// import NavBar from "./Components/NavBar";
// import NewArrivals from "./Components/NewArrivals";
// import PageIntro from "./Components/PageIntro";
// import Product from "./Components/Product";
// import ADs from "./Components/ADs";
// import InteriorADs from "./Components/InteriorADs";
// import Footer from "./Components/Footer";

// function App() {
// return (
// <div className="container">
//   <NavBar />
//   <PageIntro />
//   <Product />
//   <NewArrivals />
//   <ADs />
//   <InteriorADs />
//   <Footer />
// </div>
// );
// }

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";

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
    // {
    //   path: "/community",
    //   element: <Checkout />,
    // },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
