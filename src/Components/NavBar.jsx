// import React from "react";
import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isDissolved, setIsDissolved] = useState(false);

  const handleDissolve = () => {
    setIsDissolved(true);
  };

  return (
    <nav className={styles.navWrapper}>
      <div className="min-w-[126px] min-h-[24px] max-w-[auto] max-h-[auto] flex justify-between items-center">
        <div className={styles.hamburger}>
          <img src="/SVG/hamburgerMenu.svg" alt="" />
        </div>

        <h1>Perch</h1>
      </div>
      <div
        className={`${styles.links} lg:flex w-[308px] justify-between text-center items-center leading-[16.94px] font-[14px]`}
      >
        <Link to="/">
          <p>Home</p>
        </Link>
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
      <Link to="/cart">
        <div className={styles.iconContainer}>
          <img
            src="./SVG/searchIcon.svg"
            alt="icon"
            className={styles.search}
          />
          <img src="./SVG/person.svg" alt="icon" />
          <div
            className={`${styles.cart} ${
              isDissolved ? styles.isDissolved : ""
            }`}
            onClick={handleDissolve}
          >
            <img src="./SVG/cart.svg" alt="icon" />
            <p>1</p>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
