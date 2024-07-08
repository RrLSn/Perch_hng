// import React from "react";
import styles from "../styles/PageIntro.module.css";

const PageIntro = () => {
  return (
    <div className={styles.container}>
      <div className="w-[402px] h-[368px] gap-[150px] flex flex-col justify-between">
        <div className={styles.intro}>
          <h1>Elevate Your</h1>
          <h1>COMFORT</h1>
        </div>

        <div className={styles.intro2}>
          <p className="font-'Inter'">
            Want comfort and style? Perch is for you.
          </p>
          <div className={styles.collection}>
            <p>See collection</p>
            <img
              src="./SVG/arrowRight.svg"
              alt="icon"
              className="w-[15px] h-[11.31px] top-[6.35] left-[4.5px] mt-2"
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
