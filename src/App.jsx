// import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import NewArrivals from "./Components/NewArrivals";
import PageIntro from "./Components/PageIntro";
import Product from "./Components/Product";
import ADs from "./Components/ADs";

function App() {
  return (
    <div className="container">
      <NavBar />
      <PageIntro />
      <Product />
      <NewArrivals />
      <ADs />
    </div>
  );
}

export default App;
