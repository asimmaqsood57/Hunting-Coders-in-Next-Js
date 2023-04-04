import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <div>
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export default slug;
