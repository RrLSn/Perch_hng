// import React from 'react'
import { Link } from "react-router-dom";
import styles from "../styles/Cart.module.css";

const Summary = () => {
  return (
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
  );
};

export default Summary;
