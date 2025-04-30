import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link 
          href={`/blog?cat=${encodeURIComponent('Life Lessons')}`} 
          className={styles.categoryItem}
        >
          Life Lessons
        </Link>
        <Link 
          href={`/blog?cat=${encodeURIComponent('Loss & Remembrance')}`} 
          className={styles.categoryItem}
        >
          Loss & Remembrance
        </Link>
        <Link 
          href={`/blog?cat=${encodeURIComponent('Everyday Moments')}`} 
          className={styles.categoryItem}
        >
          Everyday Moments
        </Link>
        <Link 
          href={`/blog?cat=${encodeURIComponent('The First Time')}`} 
          className={styles.categoryItem}
        >
          The First Time
        </Link>
      </div>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;