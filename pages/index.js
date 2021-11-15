import Head from "next/head";
import Image from "next/image";
import Episodes from "../components/Episodes";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick &amp; Morty Episodes list</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Episodes />
      </main>
    </div>
  );
}