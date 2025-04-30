import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import articlesData from "@/data/articles.json";

const SinglePage = ({ params }) => {
  // Find the article that matches the slug from the articles array
  const article = articlesData.articles.find(article => article.slug === params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{article?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{article?.author}</span>
              <span className={styles.date}>{article?.submissionDate}</span>
            </div>
          </div>
        </div>
        {article?.imageUrl && (
          <div className={styles.imageContainer}>
            <Image src={article.imageUrl} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            {article?.fullContent}
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;