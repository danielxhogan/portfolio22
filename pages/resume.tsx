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

        <iframe
          className={styles["resume"]}
          src="https://docs.google.com/document/d/e/2PACX-1vSYC1KqAKnVP2hrhIDmdIMxZ4GBe5ynnFu0cBpOVMOZpHte_IxT7-kaJd-urPy4CA/pub?embedded=true"
        ></iframe>
      </main>
    </>
  );
}
