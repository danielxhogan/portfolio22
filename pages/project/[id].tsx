import SideNav from "../../components/SideNav";
import { allProjects } from "../projects";
import { IProject } from "../../components/Project";
import styles from "../../styles/ProjectPage.module.css";

import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const SHOWN = "shown";
const HIDDEN = "hidden";

interface IProjectPageProps {
  projectData: IProject;
}

export default function ProjectPage({ projectData }: IProjectPageProps) {
  const [imageClass, setImageClass] = useState(SHOWN);
  const [videoClass, setVideoClass] = useState(HIDDEN);

  useEffect(() => {
    if (projectData.projectVideo) {
      setImageClass(HIDDEN);
      setVideoClass(SHOWN);
    }
  }, [projectData.projectVideo]);

  return (
    <>
      <Head>
        <title>{`danielxhogan | ${projectData.projectTitle}`}</title>
      </Head>
      <main className={styles["main"]}>
        <SideNav />
        <div className={styles["content"]}>
          <h1>{projectData.projectTitle}</h1>

          <div className={`${styles[videoClass]} ${styles["video"]}`}>
            {projectData.projectVideo && (
              <div className={styles["iframe-container"]}>
                <iframe
                  className={styles["large-video"]}
                  width="711"
                  height="400"
                  src={`https://www.youtube.com/embed/${projectData.projectVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <iframe
                  className={styles["small-video"]}
                  width="533"
                  height="300"
                  src={`https://www.youtube.com/embed/${projectData.projectVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <iframe
                  className={styles["tiny-video"]}
                  width="356"
                  height="200"
                  src={`https://www.youtube.com/embed/${projectData.projectVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>

          <div className={`${styles[imageClass]} ${styles["image"]}`}>
            <Image
              className={styles["large-image"]}
              src={projectData.projectImage}
              alt="mvplaylist"
              height={400}
            />
            <Image
              className={styles["small-image"]}
              src={projectData.projectImage}
              alt="mvplaylist"
              height={300}
            />
            <Image
              className={styles["tiny-image"]}
              src={projectData.projectImage}
              alt="mvplaylist"
              height={200}
            />
          </div>

          <div className={styles["project-info"]}>
            <p>{projectData.projectDescriptionFull}</p>
            <p>Languages: {projectData.languages}</p>
            <p>
              Libraries and Frameworks: {projectData.librariesAndFrameworks}
            </p>
            {projectData.toolsAndTechnology ? (
              <p>Tools and Technology: {projectData.toolsAndTechnology}</p>
            ) : (
              <></>
            )}
            {projectData.apis ? <p>Apis: {projectData.apis}</p> : <></>}

            <div className={styles["links"]}>
              <Link href={{ pathname: projectData.githubLink }} target="_blank">
                <i className="fa-3x fa-brands fa-github" />
              </Link>
              {projectData.siteLink ? (
                <Link href={{ pathname: projectData.siteLink }} target="_blank">
                  <i className="fa-3x fa-sharp fa-solid fa-earth-americas" />
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = allProjects.map(project => {
    return { params: { id: project.key.toString() } };
  });

  return { paths, fallback: false };
}

interface IGetStaticProps {
  params: {
    id: String;
  };
}

export async function getStaticProps({ params }: IGetStaticProps) {
  let projectData;

  allProjects.forEach(project => {
    if (project.key.toString() == params.id) {
      projectData = project;
      return;
    }
  });

  return { props: { projectData } };
}
