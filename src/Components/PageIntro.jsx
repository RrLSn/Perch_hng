// import React from "react";
import styles from "../styles/PageIntro.module.css";

const PageIntro = () => {
  return (
    <div className={styles.container}>
      <div className={`lg:hidden xl:hidden ${styles.searchInput}`}>
        <img
          src="/SVG/searchIcon.svg"
          alt=""
          className="w-[18px] h-[18px] top-[7px] left-[9px]"
        />
        <input type="text" placeholder="Search your favorite perch" />
      </div>
      <div
        className={`w-[100%] max-h-[764px] lg:flex xl:flex items-center xl:justify-center xl:gap-[98px] lg:p-[30px] bg-[#F5F5F5] ${styles}`}
      >
        <div
          className={`max-w-[402px] max-h-[368px] xl:gap-[150px] lg:gap-[150px] flex flex-col justify-between ${styles.elevate}`}
        >
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
                className="max-w-[15px] max-h-[11.31px] top-[6.35] left-[4.5px] mt-2"
              />
            </div>
          </div>
        </div>
        <img
          src="./SVG/slipper.svg"
          alt="image"
          className={`max-w-[581px] max-h-[665px] ${styles.slipperChair}`}
        />
      </div>
    </div>
  );
};

export default PageIntro;
