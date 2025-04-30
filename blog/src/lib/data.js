import articles from '../data/articles.json';

export const getAllArticles = () => {
  return articles.articles;
};

export const getArticleById = (id) => {
  return articles.articles.find(article => article.id === id);
};

export const getArticlesByCategory = (category) => {
  return articles.articles.filter(article => article.category === category);
};

export const getFeaturedArticle = () => {
  // You can implement your own logic to determine which article should be featured
  return articles.articles[0];
};

export const getLatestArticles = (limit = 5) => {
  return articles.articles
    .sort((a, b) => new Date(b.submissionDate) - new Date(a.submissionDate))
    .slice(0, limit);
};
