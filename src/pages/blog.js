import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);
  return (
    <div>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        {blogs.map((blog) => {
          return (
            <div className={styles.blogItem} key={blog.title}>
              <Link href={`/blogpost/${blog.slug}`}>
                <h3>{blog.title}</h3>
              </Link>
              <p>{blog.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/blogs`);
//   const blogs = await res.json();
//   return {
//     props: {
//       blogs,
//     },
//   };
// }
export async function getStaticProps() {
  const data = await fs.promises.readdir("./blogData/", "utf8");

  let blogs = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const myFile = await fs.promises.readFile(`./blogData/${item}`, "utf8");
    blogs.push(JSON.parse(myFile));
  }

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
