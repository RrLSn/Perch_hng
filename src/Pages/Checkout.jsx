// import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.checkOut}>
        <h1>Checkout</h1>
        <div className={styles.content}>
          <div className={styles.buyerInfo}>
            <div className={styles.address}>
              <hp>Shipping address</hp>
              <form className={styles.addForm}>
                <div>
                  <p></p>
                  <span>
                    <input type="text" />
                    <img src="" alt="icon" />
                  </span>
                </div>
                {/* <div>
                  <p></p>
                  <span>
                    <input type="text" />
                    <img src="" alt="icon" />
                  </span>
                </div>
                <div>
                  <p></p>
                  <span>
                    <input type="text" />
                    <img src="" alt="icon" />
                  </span>
                </div>
                <div>
                  <p></p>
                  <span>
                    <input type="text" />
                    <img src="" alt="icon" />
                  </span>
                </div> */}
              </form>
            </div>
            {/* <div className={styles.payInfo}></div> */}
          </div>
          {/* <div></div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
