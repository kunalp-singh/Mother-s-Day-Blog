"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ item }) => {
  if (!item) return null;

  return (
    <div className={styles.container}>
      {item.img && (
        <Link href={`/posts/${item.slug}`} className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </Link>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {new Date(item.createdAt).toLocaleDateString()}
          </span>
          <span className={styles.category}>{item.category}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc}</p>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;