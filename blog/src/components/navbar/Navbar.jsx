import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
        
        <div className={styles.logo}>Mama's Boy</div>
        
        <div className={styles.links}>
          <ThemeToggle />

          {/* Corrected links */}
          <Link href="/" className={styles.link}>Homepage</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>   {/* Updated */}
          <Link href="/about" className={styles.link}>About</Link>       {/* Updated */}

          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
