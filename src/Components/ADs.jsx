// import React from "react";
import styles from "../styles/ADs.module.css";

const ADs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="w-[438px] h-[224px] gap-[30px]">
          <div className={styles.descrip}>
            <p>Unparalleled Comfort</p>
            <p>
              Experience the difference of luxurious cushioning and ergonomic
              design. Sink into the Perch and feel your stress melt away.
            </p>
          </div>
          <span className="w-[140px] h-[24px] border-b-[1px] pb-[5px] border-b-[#905125] flex gap-[4px] text-[#905125]">
            <p className="text-[20px]">Get Started</p>
            <img
              src="/SVG/arrowRight.svg"
              alt="icon"
              className="w-[15px] h-[11.31px] top-[6.35] left-[4.5px] mt-2"
            />
          </span>
        </div>
        <img
          src="./SVG/unsplash.svg"
          alt="image"
          className="xl:w-[530px] xl:h-[530px] lg:w-[460.19px] lg:h-[460.19px]"
        />
      </div>
    </div>
  );
};

export default ADs;
