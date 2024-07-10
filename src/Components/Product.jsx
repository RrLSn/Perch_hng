// import React from "react";
import styles from "../styles/Product.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <div
        className={`xl:w-[530px] lg:w-[472px] lg:h-[655px] xl:h-[655px] xl:p-[30px] lg:p-[30px] bg-[#F5F5F5] inline-flex ${styles.scandinavian}`}
      >
        <div
          className={`max-w-[194px] max-h-[70px] lg:gap-[12px] xl:gap-[12px] flex flex-col justify-between z-1  ${styles.productInf}`}
        >
          <p className={styles.product_name}>Scandinavian</p>
          <span className={styles.shop}>
            <p>Shop now</p>
            <img
              src="./SVG/arrowRight.svg"
              alt="icon"
              className="max-w-[15px] max-h-[11.31px] top-[6.35] left-[4.5px] mt-2"
            />
          </span>
        </div>
        <img
          src="./SVG/scandinavian.svg"
          alt="image"
          className="xl:w-[370px] lg:w-[342px] xl:h-[566px] lg:h-[511px] z-2 ml-[-10rem]"
        />
      </div>

      <div className="xl:w-[530px] lg:w-[472px] h-[655px] flex flex-col justify-between gap-[24px]">
        <div className="w-[100%] h-[316px] p-[30px] xs:p-5 bg-[#F5F5F5] flex justify-between ">
          <div className="w-[176px] h-[70px] xs:w-[126px] xs:h-[48.52px] xs:gap-[8.17px] gap-[12px] flex flex-col justify-between mt-[auto] xs:m-0">
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
          <img
            src="./SVG/chesterfield.svg"
            alt="image"
            className="xs:w-[333px] xs:mt-[auto] xs:h-[256px]"
          />
        </div>

        <div className="w-[100%] h-[316px] p-[30px] xs:p-5 bg-[#F5F5F5] flex justify-between">
          <div className="w-[111px] h-[70px] gap-[12px] flex flex-col justify-between mt-[auto] xs:mt-0">
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

          <img
            src="./SVG/denatti.svg"
            alt="image"
            className="xs:w-[301px] xs:mt-[auto] xs:h-[255px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
