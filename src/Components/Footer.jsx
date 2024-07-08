// import React from 'react'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.submission}>
        <div className={styles.footerContent}>
          <h1>Join Our Newsletter</h1>
          <p>Big discount and latest news in your inbox</p>
        </div>
        <form className="flex w-[100%] h-[42px] gap-[20px] items-center justify-center">
          <div
            className="flex w-[438px] h-[100%]
          rounded-[1px] p-[10px] gap-[8px] border-[1px] border-[#905125] items-center"
          >
            <img
              src="/SVG/mail.svg"
              alt="icon"
              className="w-[18.33px] h-[14.67px] top-[13.67px] left-[11.83px]"
            />
            <input type="email" placeholder="Email address" />
          </div>
          <button>Sign up</button>
        </form>
      </div>
      <div className="w-[440px] h-[112px] gap-[40px] flex flex-col items-center">
        <h1 className={styles.logo}>Perch</h1>
        <div className={styles.footers}>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy</p>
          <p>My account</p>
        </div>
      </div>
      <footer>© 2024 Perch Store</footer>
    </div>
  );
};

export default Footer;
