// import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import PageIntro from "./Components/PageIntro";
import Product from "./Components/Product";
import "./fonts.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <PageIntro />
      <Product />
    </div>
  );
}

export default App;
