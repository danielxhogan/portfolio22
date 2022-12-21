import { allProjects } from '../projects'
import { IProject } from '../../components/Project'
import styles from '../../styles/ProjectPage.module.css'

import SideNav from '../../components/SideNav'

import Head from 'next/head'
import Image from 'next/image'

interface IProjectPageProps {
  projectData: IProject
}

export default function ProjectPage({ projectData }: IProjectPageProps) {
  return (
    <>
      <Head>
        <title>{`danielxhogan | ${projectData.projectTitle}`}</title>
      </Head>
      <main className={styles['main']}>
        <SideNav />
        <div className={styles['content']}>

          <div className={styles['project-info']}>
            <h1>{ projectData.projectTitle }</h1>
            <div className={styles['description']}>
              <p>{ projectData.projectDescriptionFull }</p>
            </div>
          </div>

          <div className={styles['image']}>
            <Image
              className={styles['large-image']}
              src={projectData.projectImage}
              alt='mvplaylist'
              height={400}
            />
            <Image
              className={styles['small-image']}
              src={projectData.projectImage}
              alt='mvplaylist'
              height={300}
            />
            <Image
              className={styles['tiny-image']}
              src={projectData.projectImage}
              alt='mvplaylist'
              height={200}
            />
          </div>

        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = allProjects.map(project => {
    return {params: { id: project.key.toString() }}
  })

  return { paths, fallback: false}
}

interface IGetStaticProps {
  params: {
    id: String
  }
}

export async function getStaticProps({ params }: IGetStaticProps) {
  let projectData;

  allProjects.forEach(project => {
    if (project.key.toString() == params.id) {
      projectData = project
      return
    }
  })

  return { props: {projectData}}
}