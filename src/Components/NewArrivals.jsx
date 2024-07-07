// import React from "react";
import styles from "@/styles/NewArrivals.module.css";

const NewArrivals = () => {
  return (
    <div className={styles.container}>
      <h1>New Arrivals</h1>

      <main>
        <div className={styles.arrivals}>
          <div className={styles.imageCard}>
            <img src="./SVG/tyleyChair.svg" alt="image" />
          </div>
          <div className={styles.details}>
            <p>Tyler Chair</p>
            <p>$200</p>
          </div>
        </div>
        <div className={styles.arrivals}>
          <div className={styles.imageCard}>
            <img src="./SVG/zefisonChair.svg" alt="image" />
          </div>
          <div className={styles.details}>
            <p>Zefision Chair</p>
            <p>$350</p>
          </div>
        </div>
        <div className={styles.arrivals}>
          <div className={styles.imageCard}>
            <img src="./SVG/rococo.svg" alt="image" />
          </div>
          <div className={styles.details}>
            <p>Italian Rococo</p>
            <p>$700</p>
          </div>
        </div>
        <div className={styles.arrivals}>
          <div className={styles.imageCard}>
            <img src="./SVG/sofa.svg" alt="image" />
          </div>
          <div className={styles.details}>
            <p>King sofa</p>
            <p>$899</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewArrivals;
