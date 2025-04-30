"use client";

import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";  // <-- now from .js file, not .json

const Featured = () => {
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  if (!featuredArticle) {
    return <div>Loading featured article...</div>;
  }

  return (
    <div className={styles.container}>
      <Link href={`/article/${featuredArticle.slug}`} className={styles.link}>
        <div className={styles.featuredArticle}>
          <div className={styles.imgContainer}>
            <Image 
              src={featuredArticle.imageUrl} 
              alt={featuredArticle.title} 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.titleCard}>
            <span className={styles.category}>
              {featuredArticle.category}
            </span>
            <h1 className={styles.title}>
              {featuredArticle.title}
            </h1>
            <p className={styles.subtitle}>
              <i>{featuredArticle.excerpt}</i>
            </p>
            <div className={styles.authorInfo}>
              <span className={styles.author}>
                BY {featuredArticle.author}
              </span>
              <span className={styles.date}>
                {featuredArticle.submissionDate}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Featured;
