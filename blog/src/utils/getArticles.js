import articles from '@/data/articles.json';

export const getAllArticles = () => {
  return articles.articles;
};

export const getArticleBySlug = (slug) => {
  return articles.articles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category) => {
  return articles.articles.filter(article => article.category === category);
};
