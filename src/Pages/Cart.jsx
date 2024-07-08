// // import React from "react";
import styles from "../styles/Cart.module.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.content}>
        <header className={styles.cartAds}>
          <h1>Cart</h1>
          <p>Get 30% discount on any order above $500</p>
        </header>
        <div className={styles.cartDetails}>
          <div className={styles.detailHeader}>
            <span></span>
            <span></span>
          </div>
          {/* <div></div> */}
        </div>
        {/* <div className={styles.summmary}></div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
