"use client";

import { useSearchParams } from "next/navigation";
import styles from "./homepage.module.css";
import Featured from "../components/featured/Featured";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from "../components/Menu/Menu";

export default function Home() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <CardList page={page} />
        </div>
        <Menu />
      </div>
    </div>
  );
}
