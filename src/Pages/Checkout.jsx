// import React from "react";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.checkOut}>
        <h1
          style={{
            "font-family": "Montserrat",
            "font-size": "48px",
            "font-weight": " 500",
            "line-height": "58.51px",
            width: "100%",
            height: "59px",
            textAlign: "center",
          }}
        >
          Checkout
        </h1>
        <div className={styles.content}>
          <div className={styles.buyerInfo}>
            <div className={styles.address}>
              <h1
                style={{
                  "font-family": "Montserrat",
                  fontWeight: "500",
                  fontSize: "22px",
                  lineHeight: "26px",
                }}
              >
                Shipping address
              </h1>
              <form className={styles.addForm}>
                <div className={styles.fillInfo}>
                  <p>Shipping address*</p>
                  <span>
                    <input
                      type="text"
                      placeholder="Shipping address"
                      className={styles.fillInput}
                    />
                  </span>
                </div>
                <div className={styles.fillInfo}>
                  <p>Country*</p>
                  <span>
                    <input
                      type="text"
                      placeholder="Country"
                      className={styles.fillInput}
                    />
                    <img src="/SVG/arrowdown2.svg" alt="icon" />
                  </span>
                </div>
                <div className={styles.fillInfo}>
                  <p>Town/City*</p>
                  <span>
                    <input
                      type="text"
                      placeholder="Town/City"
                      className={styles.fillInput}
                    />
                    <img src="/SVG/arrowdown2.svg" alt="icon" />
                  </span>
                </div>

                <div className="w-[100%] h-[80px] flex justify-between">
                  <div className={styles.footerInfo}>
                    <p>State</p>
                    <input type="text" placeholder="State" />
                  </div>
                  <div className={styles.footerInfo}>
                    <p>Zip code</p>
                    <input type="text" placeholder="Zip code" />
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.payInfo}>
              <h1>Payment Information</h1>
              <form className={styles.payForm}>
                <span
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "13px 16px",
                    borderRadius: "4px",
                    border: "1px solid #905125",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="flex gap-[12px] w-[126px] h-[26px] items-center">
                    <img
                      src="/SVG/inputchecked.svg"
                      alt="icon"
                      className="w-[14px] h-[14px] top-[5px] left-[5px]"
                    />
                    <p
                      style={{
                        "font-family": "Inter",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "26px",
                      }}
                    >
                      Pay by card
                    </p>
                  </div>
                  <img
                    src="/SVG/card.svg"
                    alt="icon"
                    className="w-[19.5px] h-[15.5px] top-[4.2px] left-[2.09px]"
                  />
                </span>
                <div className={styles.fillInfo}>
                  <p>Card number</p>
                  <span>
                    <input
                      type="text"
                      placeholder="124 1234 124"
                      className={styles.fillInput}
                    />
                  </span>
                </div>
                <div className="w-[100%] h-[80px] flex justify-between">
                  <div className={styles.footerInfo}>
                    <p>Expiry date</p>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className={styles.footerInfo}>
                    <p>CVC code</p>
                    <input type="text" placeholder="CVC code" />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-[100%] h-[166px] gap-[16px] flex flex-col justify-between">
              <p className={styles.payFooter}>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              <button className={styles.orderBtn}>Place order</button>
            </div>
          </div>

          <div className={styles.orderSummary}>
            <div className={styles.orderContent}>
              <h1>Order Summary</h1>
              <span className="w-[100%] h-[144.59px] gap-[12px] border-t-[1px] border-[#905125] pt-[6px]">
                <div className="w-[115px] h-[132.59] py-[4.51px] px-[18.04px] gap-[4.51px] bg-[#f5f5f5] flex items-center justify-center">
                  <img
                    src="/SVG/zefisonChair.svg"
                    alt="image"
                    className="w-[94.95px] h-[126.22px]"
                  />
                </div>
                <div className={styles.order}>
                  <h2>Zefison Chair</h2>
                  <p className="font-light text-[16px] leading-[19.36px">
                    Colour: Brown
                  </p>
                  <p className="flex w-[82px] h-[20px] justify-between items-center font-medium leading-[19.36px] text-[16px]">
                    <img
                      src="/SVG/deleteIcon.svg"
                      alt="icon"
                      className="w-[12.53px] h-[14.07px] top-[3.01px] left-[3.75px] font-bold"
                    />
                    Remove
                  </p>
                </div>
              </span>
            </div>
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
                <p className={styles.price}>$0.00</p>
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
                <p className={styles.price}>+$20.00</p>
              </span>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
