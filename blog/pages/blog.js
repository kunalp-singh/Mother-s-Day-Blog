import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import articlesData from "@/data/articles.json";
import Card from "@/components/card/Card";
import styles from "@/app/blog.module.css";

export default function Blog({ searchParams }) {
  const { cat } = searchParams; // Get category from URL params
  const allArticles = articlesData.articles; // Access the articles array

  // Filter articles if category is provided
  const filteredArticles = cat 
    ? allArticles.filter(article => article.category === cat)
    : allArticles;

  // Get category display name for heading
  const getCategoryDisplayName = (slug) => {
    const categoryMap = {
      "life-lessons": "Life Lessons",
      "loss-and-rememberence": "Loss & Remembrance",
      "everyday-moments": "Everyday Moments",
      "the-first-time": "The First Time"
    };
    return categoryMap[slug] || "All Categories";
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {cat ? getCategoryDisplayName(cat) : "All Articles"}
      </h1>
      
      {cat && (
        <div className={styles.categoryInfo}>
          <div className={styles.categoryBadge} style={getCategoryStyle(cat)}>
            {getCategoryDisplayName(cat)}
          </div>
          <Link href="/blog" className={styles.viewAllLink}>
            View All Articles
          </Link>
        </div>
      )}
      
      {filteredArticles.length === 0 ? (
        <div className={styles.noResults}>
          <p>No articles found in this category.</p>
          <Link href="/blog" className={styles.viewAllLink}>
            View all articles
          </Link>
        </div>
      ) : (
        <div className={styles.articles}>
          {Array.isArray(filteredArticles) && filteredArticles.map((article) => (
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
      )}
    </div>
  );
}

// Helper function to get category-specific styles
function getCategoryStyle(category) {
  const styles = {
    "life-lessons": {
      backgroundColor: "#ff9999",
      borderColor: "#ff6666",
      color: "#800000"
    },
    "loss-and-rememberence": {
      backgroundColor: "#bbaaff",
      borderColor: "#9988ff",
      color: "#3a2099"
    },
    "everyday-moments": {
      backgroundColor: "#9ff2c2",
      borderColor: "#7ae0a9",
      color: "#1c6d42"
    },
    "the-first-time": {
      backgroundColor: "#ffd16a",
      borderColor: "#ffbb33",
      color: "#805500"
    }
  };
  
  return styles[category] || {};
}