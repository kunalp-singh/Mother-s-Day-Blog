// /app/article/[slug]/page.js (Server Component)
import articlesData from "@/data/articles.json";
import ClientArticlePage from "./ClientArticlePage";

// This function MUST be in a Server Component file
export async function generateStaticParams() {
  return articlesData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }) {
  // Find the article data on the server
  const article = articlesData.articles.find(
    (article) => article.slug === params.slug
  );

  // Pass data to the client component
  return <ClientArticlePage article={article} />;
}