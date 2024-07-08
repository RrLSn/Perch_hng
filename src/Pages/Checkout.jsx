// import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.checkOut}>
        <h1>Checkout</h1>
        <div className={styles.content}>
          <div className={styles.buyerInfo}>
            <div className={styles.address}></div>
            <div className={styles.payInfo}></div>
          </div>
          <div></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
