import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <h1>Title of the page {slug}</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          similique, quibusdam molestiae ipsa cum unde. Eaque quasi accusamus,
          deleniti, expedita voluptates ipsa repudiandae consequatur saepe et
          sint veritatis natus! Et!
        </p>
      </div>
    </div>
  );
};

export default slug;
