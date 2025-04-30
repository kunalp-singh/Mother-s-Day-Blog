import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/posts/the-first-fever" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p9.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>The First Time</span>
          <h3 className={styles.postTitle}>
            I always thought moms were unbreakable. That day, she cried over grandma's hospital bill. That's when I learned: strength doesn't mean silence.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Aanya Singh</span>
            <span className={styles.date}> - 2024.05.12</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/papercuts-and-kisses" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p8.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Everyday Moments
          </span>
          <h3 className={styles.postTitle}>
            Every Sunday, we folded sarees together. I didn't realize then that those folds were her way of passing down tradition, and sneaking in life advice between pleats.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Neha Iyer</span>
            <span className={styles.date}> - 2024.05.12</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/grief-in-her-garden" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p10.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Loss & Remembrance</span>
          <h3 className={styles.postTitle}>
            Her roses hadn't bloomed since the funeral. I almost gave up watering them. But one morning, they were back—full, bright, stubborn. Like her.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Tanya Fernandes</span>
            <span className={styles.date}> - 2024.05.12</span>
          </div>
        </div>
      </Link>
      <Link href="/posts/the-tender-stitch" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p7(1).jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Life Lessons
          </span>
          <h3 className={styles.postTitle}>
            I ripped my uniform during recess and feared the scolding. But Mom didn't yell. That night, she stitched it up while humming. 'Things tear, we mend,' she said.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Ishaan Verma</span>
            <span className={styles.date}> - 2024.05.12</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;