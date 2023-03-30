import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="./hello.js"></Script>

      <main className={styles.main}>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={styles.center}>
          <h1>Hunting Coders</h1>
          <p className={styles.description}>
            A blog for developers and people who want to learn about
          </p>
        </div>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
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
          <div className={styles.blogItem}>
            <h3>How to learn javascript?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quae, voluptatum, quod, voluptas quibusdam voluptates quidem
            </p>
          </div>
        </div>
      </main>
    </>
  );
}