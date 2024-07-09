// // import React from "react";
import NavBar from "../Components/NavBar";
import NewArrivals from "../Components/NewArrivals";
import PageIntro from "../Components/PageIntro";
import Product from "../Components/Product";
import ADs from "../Components/ADs";
import InteriorADs from "../Components/InteriorADs";
import Footer from "../Components/Footer";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <PageIntro />
      <Product />
      <NewArrivals />
      <ADs />
      <InteriorADs />
      <Footer />
    </div>
  );
};

export default HomePage;
