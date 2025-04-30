import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        The First Time
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Everyday Moments
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Loss and Remembrance
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Life Lessons
      </Link>
    </div>
  );
};

export default MenuCategories;