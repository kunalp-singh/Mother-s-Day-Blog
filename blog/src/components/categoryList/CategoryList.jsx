import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const categories = [
    {
      id: 1,
      title: "Life Lessons",
      slug: "Life Lessons",
      img: "/lessons.png",
      style: {
        backgroundColor: "#ff9999",
        borderColor: "#ff6666",
        color: "#800000",
      },
    },
    {
      id: 2,
      title: "Loss & Remembrance",
      slug: "Loss & Remembrance",
      img: "/grief.png",
      style: {
        backgroundColor: "#bbaaff",
        borderColor: "#9988ff",
        color: "#3a2099",
      },
    },
    {
      id: 3,
      title: "Everyday Moments",
      slug: "Everyday Moments",
      img: "/everdaymoments.png",
      style: {
        backgroundColor: "#9ff2c2",
        borderColor: "#7ae0a9",
        color: "#1c6d42",
      },
    },
    {
      id: 4,
      title: "The First Time",
      slug: "The First Time",
      img: "/first.png",
      style: {
        backgroundColor: "#ffd16a",
        borderColor: "#ffbb33",
        color: "#805500",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.map((item) => (
          <Link href={`/category/${encodeURIComponent(item.slug)}`} key={item.id}>
            <div className={styles.category} style={item.style}>
              <Image
                src={item.img}
                alt={item.title}
                width={24}
                height={24}
                className={styles.image}
              />
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
