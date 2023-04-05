import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import fs from "fs";

const slug = (props) => {
  // const router = useRouter();
  // const { slug } = router.query;
  const [blog, setBlog] = useState(props.blog);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlog(data);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <div>
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

// export async function getServerSideProps(context) {
//   const res = await fetch(
//     `http://localhost:3000/api/getblog?slug=${context.params.slug}`
//   );
//   const blog = await res.json();
//   return {
//     props: {
//       blog,
//     },
//   };
// }
export async function getStaticProps(context) {
  const { slug } = context.params;

  let blog = await fs.promises.readFile(`./blogData/${slug}.json`, "utf8");
  // const res = await fetch(
  //   `http://localhost:3000/api/getblog?slug=${context.params.slug}`
  // );
  // const blog = await res.json();
  return {
    props: {
      blog: JSON.parse(blog),
    },
  };
}

export default slug;
