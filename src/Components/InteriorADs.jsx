// import React from 'react'
import styles from "../styles/InteriorADs.module.css";

const InteriorADs = () => {
  return (
    <div className={styles.container}>
      <h1>Perch chairs</h1>
      <main className="xl:w-[1080px] lg:w-[964px] h-[309px] gap-[42px] flex flex-col">
        <div className={styles.content}>
          <img src="/SVG/interior1.svg" alt="image" />
          <img src="/SVG/interior2.svg" alt="image" />
          <img src="/SVG/interior3.svg" alt="image" />
        </div>
        <span className="w-[140px] h-[24px] border-b-[1px] pb-[5px] border-b-[#905125] flex gap-[4px] text-[#905125]">
          <p className="text-[20px]">See more</p>
          <img
            src="/SVG/arrowRight.svg"
            alt="icon"
            className="w-[15px] h-[11.31px] top-[6.35] left-[4.5px] mt-2"
          />
        </span>
      </main>
    </div>
  );
};

export default InteriorADs;
