// /app/article/[slug]/ClientArticlePage.js (Client Component)
"use client";

import { useState } from 'react';
import Image from "next/image";
import styles from "./article.module.css";

export default function ClientArticlePage({ article }) {
  if (!article) {
    return (
      <div className={styles.container}>
        <h1>Article not found</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          <span className={styles.author}>By {article.author}</span>
          <span className={styles.date}>{article.submissionDate}</span>
          <span className={styles.readTime}>{article.readingTime} min read</span>
        </div>
        {article.imageUrl && (
          <div className={styles.imageContainer}>
            <Image 
              src={article.imageUrl} 
              alt={article.title} 
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.articleContent}>
          <p>{article.fullContent}</p>
        </div>
        <div className={styles.category}>
          Category: {article.category}
        </div>
      </div>
    </div>
  );
}
