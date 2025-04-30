"use client";

import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  // Static comments data
  const comments = [
    {
      _id: 1,
      user: {
        name: "Rajesh Kumar",
        image: "/user1.jpg"
      },
      desc: "Great post!",
      createdAt: "2024-01-01"
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      <Link href="/login">Login to write a comment</Link>
      <div className={styles.comments}>
        {comments.map((item) => (
          <div className={styles.comment} key={item._id}>
            <div className={styles.user}>
              {item?.user?.image && (
                <Image
                  src={item.user.image}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.image}
                />
              )}
              <div className={styles.userInfo}>
                <span className={styles.username}>{item.user.name}</span>
                <span className={styles.date}>{item.createdAt}</span>
              </div>
            </div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;