// import React from "react";
import styles from "@/styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <h1>Perch</h1>
      <div className="inline-flex w-[308px] justify-between text-center items-center leading-[16.94px] font-[14px]">
        <p>Home</p>
        <span>
          <p>Shop</p>
          <img src="./SVG/arrowDown.svg" alt="icon" />
        </span>
        <span>
          <p>Product</p>
          <img src="./SVG/arrowDown.svg" alt="icon" />
        </span>
        <span>
          <p>Pages</p>
          <img src="./SVG/arrowDown.svg" alt="icon" />
        </span>
      </div>
      <div className="headerIcon flex h-[24px] w-[124px] gap-[20px] justify-between">
        <img src="./SVG/searchIcon.svg" alt="icon" />
        <img src="./SVG/person.svg" alt="icon" />
        <div className={styles.cart}>
          <img src="./SVG/cart.svg" alt="icon" />
          <p></p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
