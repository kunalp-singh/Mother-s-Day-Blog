import React from "react";
import articlesData from "@/data/articles.json";
import Card from "@/components/card/Card";
import styles from "./page.module.css";

// Make it a server component and properly handle searchParams
export default function BlogPage({ searchParams = {} }) {
  // Get the category from URL and decode it
  const categoryName = searchParams?.cat ? decodeURIComponent(searchParams.cat) : null;
  
  // Get all articles
  const allArticles = articlesData.articles;
  
  // Filter articles based on category
  const displayedArticles = categoryName
    ? allArticles.filter(article => article.category === categoryName)
    : allArticles;

  return (
    <div className={styles.container}>
      {categoryName && (
        <h1 className={styles.categoryTitle}>Articles about {categoryName}</h1>
      )}
      <div className={styles.posts}>
        {displayedArticles.map((article) => (
          <Card
            key={article.id}
            item={{
              _id: article.id,
              title: article.title,
              desc: article.excerpt,
              img: article.imageUrl,
              createdAt: article.submissionDate,
              category: article.category,
              slug: article.slug
            }}
          />
        ))}
      </div>
    </div>
  );
}
