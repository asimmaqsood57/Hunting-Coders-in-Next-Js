import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        <div className={styles.blogItem}>
          <Link href="/blogpost/learn-java-script">
            <h3>How to learn javascript?</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, voluptatum, quod, voluptas quibusdam voluptates quidem
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, voluptatum, quod, voluptas quibusdam voluptates quidem
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, voluptatum, quod, voluptas quibusdam voluptates quidem
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn javascript?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae, voluptatum, quod, voluptas quibusdam voluptates quidem
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
