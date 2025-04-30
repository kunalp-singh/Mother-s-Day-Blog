// /app/article/[slug]/page.js

"use client";  // Mark this as a client-side component

import { useEffect, useState } from 'react';
import articlesData from "@/data/articles.json";
import Image from "next/image";
import styles from "./article.module.css";

// This needs to be exported at the module level - outside the client component
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return articlesData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Find the article that matches the slug
    const foundArticle = articlesData.articles.find(
      (article) => article.slug === params.slug
    );
    
    setArticle(foundArticle);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

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