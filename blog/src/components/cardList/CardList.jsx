import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import articlesData from "@/data/articles.json";

const CardList = ({ page = 1, category }) => {
  // Get all articles from the JSON file
  const posts = articlesData.articles;

  // Filter posts by category if category is provided
  const filteredPosts = category
    ? posts.filter(post => post.category === category)
    : posts;
  
  const POST_PER_PAGE = 2;
  const count = filteredPosts.length;
  
  const start = (page - 1) * POST_PER_PAGE;
  const end = start + POST_PER_PAGE;
  
  // Get posts for current page only
  const currentPosts = filteredPosts.slice(start, end);

  const hasPrev = page > 1;
  const hasNext = end < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {category ? `Stories about ${category}` : "Recent Stories"}
      </h1>
      {currentPosts.length > 0 ? (
        <>
          <div className={styles.posts}>
            {currentPosts.map((item) => (
              <Card 
                item={{
                  _id: item.id,
                  title: item.title,
                  desc: item.excerpt,
                  img: item.imageUrl,
                  createdAt: item.submissionDate,
                  category: item.category,
                  slug: item.slug
                }} 
                key={item.id} 
              />
            ))}
          </div>
          <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </>
      ) : (
        <p className={styles.noResults}>No stories found in this category yet.</p>
      )}
    </div>
  );
};

export default CardList;