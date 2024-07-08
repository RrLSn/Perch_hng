// import React from "react";
import styles from "../styles/Product.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className="w-[530px] h-[655px] p-[30px] bg-[#F5F5F5] inline-flex">
        <div className="w-[194px] h-[70px] gap-[12px] flex flex-col justify-between z-1">
          <p className={styles.product_name}>Scandinavian</p>
          <span className={styles.shop}>
            <p>Shop now</p>
            <img
              src="./SVG/arrowRight.svg"
              alt="icon"
              className="w-[15px] h-[11.31px] top-[6.35] left-[4.5px] mt-2"
            />
          </span>
        </div>
        <img
          src="./SVG/scandinavian.svg"
          alt="image"
          className="w-[370px] h-[566px] z-2 ml-[-10rem]"
        />
      </div>

      <div className="w-[530px] h-[655px] flex flex-col justify-between gap-[24px]">
        <div className="w-[100%] h-[316px] p-[30px] bg-[#F5F5F5] flex justify-between">
          <div className="w-[176px] h-[70px] gap-[12px] flex flex-col justify-between">
            <p className={styles.product_name}>Chesterfield</p>
            <span className={styles.shop}>
              <p>Shop now</p>
              <img
                src="./SVG/arrowRight.svg"
                alt="icon"
                className="w-[15px] h-[11.31px] top-[6.35] left-[4.5px] mt-2"
              />
            </span>
          </div>
          <img src="./SVG/chesterfield.svg" alt="image" />
        </div>

        <div className="w-[100%] h-[316px] p-[30px] bg-[#F5F5F5] flex justify-between">
          <div className="w-[111px] h-[70px] gap-[12px] flex flex-col justify-between">
            <p className={styles.product_name}>Denatti</p>
            <span className={styles.shop}>
              <p>Shop now</p>
              <img
                src="./SVG/arrowRight.svg"
                alt="icon"
                className="w-[15px] h-[11.31px] top-[6.35] left-[4.5px] mt-2"
              />
            </span>
          </div>
          <img src="./SVG/denatti.svg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Product;
