import styles from "../styles/Home.module.css";
import SideNav from "../components/SideNav";
import headshot from "../public/good-if-rounded.jpg";

import { useState } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [message, setMessage] = useState("");
  return (
    <>
      <Head>
        <title>danielxhogan</title>
      </Head>

      <main className={styles["main"]}>
        <SideNav />

        <div className={styles["content"]}>
          <div className={styles["title-section"]}>
            <div className={styles["personal-info"]}>
              <Image
                src={headshot}
                alt="headshot"
                className={styles["profile-pic"]}
              />

              <div className={styles["name"]}>
                <h1>Daniel Hogan</h1>
              </div>

              <h2>Software Engineer</h2>
            </div>

            <div className={styles["bio"]}>
              <p>
                I&apos;ve been programming for 4 years. I have a Bachelors in
                Computer Science and I&apos;m a pretty good web developer. I use
                Typescript, React, Redux, & Next, and recently I started using
                Rust by the way. If you want to see what I can do, check out one
                of the projects below. You can also check out my Github or
                Linkedin account.
              </p>

              <div className={styles["personal-icons"]}>
                <a href="https://github.com/danielxhogan" target="__blank">
                  <i
                    className={`${styles["personal-icon"]} fa-brands fa-github`}
                    onMouseOver={() => setMessage("go to my github account")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </a>

                <a href="https://linkedin.com/in/danielxhogan" target="__blank">
                  <i
                    className={`${styles["personal-icon"]} fa-brands fa-linkedin`}
                    onMouseOver={() => setMessage("go to my linkedin account")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div className={styles["message"]}>{message}</div>

          <div className={styles["projects-section"]}>
            <div className={`${styles["project"]} ${styles["movieshlok"]}`}>
              <a href="http://movieshlok.com" target="__blank">
                <div
                  className={styles["link"]}
                  onMouseOver={() => setMessage("check out the site")}
                  onMouseOut={() => setMessage("")}
                >
                  movieshlok
                </div>
              </a>

              <div className={styles["icons"]}>
                <a
                  href="https://github.com/danielxhogan/movieshlok"
                  target="__blank"
                >
                  <i
                    className={`${styles["link"]} fa-brands fa-github`}
                    onMouseOver={() => setMessage("view the github repo")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=5nCuNbf1WWw"
                  target="__blank"
                >
                  <i
                    className={`${styles["link"]} fa-brands fa-youtube`}
                    onMouseOver={() => setMessage("watch the demo")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </a>

                <Link href="/project/0">
                  <i
                    className={`${styles["link"]} fa-solid fa-circle-info`}
                    onMouseOver={() => setMessage("see more info")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </Link>
              </div>
            </div>

            <div className={`${styles["project"]} ${styles["mvplaylist"]}`}>
              <a href="https://mvplaylist.vercel.app" target="__blank">
                <div
                  className={styles["link"]}
                  onMouseOver={() => setMessage("check out the site")}
                  onMouseOut={() => setMessage("")}
                >
                  mvplaylist
                </div>
              </a>

              <div className={styles["icons"]}>
                <a
                  href="https://github.com/danielxhogan/mvplaylist"
                  target="__blank"
                >
                  <i
                    className={`${styles["link"]} fa-brands fa-github`}
                    onMouseOver={() => setMessage("view the github repo")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </a>

                <a
                  href="https://www.youtube.com/watch?v=70tjwO3O_Q4"
                  target="__blank"
                >
                  <i
                    className={`${styles["link"]} fa-brands fa-youtube`}
                    onMouseOver={() => setMessage("watch the demo")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </a>

                <Link href="/project/1">
                  <i
                    className={`${styles["link"]} fa-solid fa-circle-info`}
                    onMouseOver={() => setMessage("see more info")}
                    onMouseOut={() => setMessage("")}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
