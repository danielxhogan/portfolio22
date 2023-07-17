import SideNav from "../components/SideNav";

import Head from "next/head";

import styles from "../styles/Resume.module.css";

export default function Resume() {
  return (
    <>
      <Head>
        <title>danielxhogan | resume</title>
      </Head>
      <main className={styles["main"]}>
        <SideNav />
      </main>
    </>
  );
}
