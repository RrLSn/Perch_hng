// import React from "react";
import styles from "../styles/Cart.module.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantity, setquatity] = useState(0);

  const quntityIncrement = () => {
    setquatity(quantity + 1);
  };

  const quantitydecrement = () => {
    if (quantity > 1) {
      setquatity(quantity - 1);
    }
  };

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
            <span className="w-[339px] h-[100%] gap-[10px] flex text-center">
              <p>Product</p>
            </span>
            <span className="w-[556px] h-[100%] gap-[186px] flex">
              <p>Quality</p>
              <p>Total</p>
              <p>Subtotal</p>
            </span>
          </div>
          <div className={styles.productCard}>
            <span className="w-[346px] h-[100%] gap-[20px]">
              <div className="w-[163px] h-[100%] px-[6.30px] py-[25.57px] gap-[6.39px] bg-[#f5f5f5] flex items-center justify-center">
                <img
                  src="/SVG/zefisonChair.svg"
                  alt="image"
                  className="w-[134.58px] h-[178.9px]"
                />
              </div>
              <div className={styles.productDetails}>
                <h1>Zefison Chair</h1>
                <p className="font-light">Colour: Brown</p>
                <p className="flex w-[82px] h-[20px] justify-between items-center font-medium">
                  <img
                    src="/SVG/deleteIcon.svg"
                    alt="icon"
                    className="w-[12.53px] h-[14.07px] top-[3.01px] left-[3.75px] font-bold"
                  />
                  Remove
                </p>
              </div>
            </span>
            <div className="w-[550px] flex justify-between mr-[2rem]">
              <span className={styles.qty}>
                <p onClick={quantitydecrement}>-</p>
                <p>{quantity}</p>
                <p onClick={quntityIncrement}>+</p>
              </span>
              <p className={styles.price}>$350</p>
              <p className={styles.price}>$350</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[392px] gap-[119px] flex justify-between">
          <div className={styles.coupon}>
            <h1>Have a coupon?</h1>
            <p>Add your code for instant discount</p>
            <span>
              <input type="text" placeholder="Code" />
              <button className={styles.applyButton}>Apply</button>
            </span>
          </div>
          <div className={styles.summary}>
            <div className="w-[501px] h-[154px] gap-[24px]">
              <h1>Cart Summary</h1>
              <div className={styles.delivery}>
                <span>
                  <p className={styles.option}>
                    <img
                      src="/SVG/inputradio.svg"
                      alt="icon"
                      className="w-[24px] h-[24px]"
                    />
                    Free shipping
                  </p>
                  <p>$0.00</p>
                </span>
                <span>
                  <p className={styles.option}>
                    <img
                      src="/SVG/inputchecked.svg"
                      alt="icon"
                      className="w-[24px] h-[24px]"
                    />
                    Express shipping
                  </p>
                  <p>+$20.00</p>
                </span>
              </div>
            </div>
            <div className="max-w-[100%] h-[86px] flex flex-col justify-between gap-[21px] items-center">
              <span className={styles.total}>
                <p>Subtotal</p>
                <p>$370.00</p>
              </span>
              <p className="w-[404px] border-[1px] border-[#905125]"></p>

              <span className={styles.subtotal}>
                <p>Total</p>
                <p>$370.00</p>
              </span>
            </div>
            <Link to="/checkout">
              <button className={styles.summaryButton}>Checkout</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
