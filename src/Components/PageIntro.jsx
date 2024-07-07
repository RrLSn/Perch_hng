// import React from "react";
import styles from "@/styles/PageIntro.module.css";

const PageIntro = () => {
  return (
    <div className={styles.container}>
      <div className="w-[402px] h-[368px] gap-[150px]">
        <div className={styles.intro}>
          <h1>Elevate Your</h1>
          <h1>COMFORT</h1>
        </div>
        <div className={styles.intro2}>
          <p>Want comfort and style? Perch is for you.</p>
          <div className=" w-[170px] h-[24px] flex gap-[4px] text-[#905125] items-center">
            <p>See collection</p>
            <img
              src="./SVG/arrowRight.svg"
              alt="icon"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
      <img
        src="./SVG/slipper.svg"
        alt="image"
        className="w-[580px] h-[665px]"
      />
    </div>
  );
};

export default PageIntro;
