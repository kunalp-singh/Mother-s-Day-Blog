"use client";  // Ensure this file is a client component

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoryPage({ params }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [isClient, setIsClient] = useState(false); // To handle hydration issue

  // Get category directly from params
  const categoryFromParams = params.category;

  useEffect(() => {
    setIsClient(true); // Set to true once component is mounted on client

    setCategory(categoryFromParams);  // Access category param correctly

    const fetchArticles = async () => {
      const response = await import("@/data/articles.json"); // Dynamically import the JSON file
      setArticles(response.articles || response);
      setLoading(false);
    };

    fetchArticles();
  }, [categoryFromParams]);

  // Handle hydration issue (render only after component is mounted on client)
  if (!isClient) {
    return null;  // Prevent hydration issues
  }

  // Filter articles based on the category
  const filteredArticles = articles.filter(
    (article) =>
      article.category.toLowerCase() === decodeURIComponent(category).toLowerCase()
  );

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message when no articles found
  if (!filteredArticles.length) {
    return (
      <div>
        <h1>No articles found for "{decodeURIComponent(category)}"</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Articles about "{decodeURIComponent(category)}"</h1>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.slug}`}>
              <h2 style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}>
                {article.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}