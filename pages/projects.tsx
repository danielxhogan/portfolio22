import SideNav from '../components/SideNav'
import DevSection from '../components/DevSection'

import Head from 'next/head'

import styles from '../styles/Projects.module.css'
import mvplaylist from '../public/mvplaylist.png'

const webDevProjects = [
  {
    key: 0,
    projectTitle: 'mvplaylist',
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectImage: mvplaylist
  },
  {
    key: 1,
    projectTitle: 'Schieffers Keezers',
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectImage: mvplaylist
  }
]

export const allProjects = [
  ...webDevProjects,
  ...webDevProjects
]


export default function Projects() {

  return (
    <>
      <Head>
        <title>danielxhogan | projects</title>
      </Head>
      <main className={styles['main']}>
        <SideNav />
        <div className={styles['content']}>
          <h1>Projects</h1>
          <DevSection sectionTitle={'Web Dev'} projects={webDevProjects} />
        </div>
      </main>
    </>
  )
}