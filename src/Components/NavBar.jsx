// import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <h1>Perch</h1>
      <div className="lg:flex w-[308px] justify-between text-center items-center leading-[16.94px] font-[14px] sm:hidden">
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
          <img src="./SVG/searchIcon.svg" alt="icon" />
          <img src="./SVG/person.svg" alt="icon" />
          <div className={styles.cart}>
            <img src="./SVG/cart.svg" alt="icon" />
            <p>1</p>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
