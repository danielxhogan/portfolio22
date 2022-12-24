import mvplaylist from '../public/mvplaylist.png'
import styles from '../styles/Projects.module.css'

import SideNav from '../components/SideNav'
import DevSection from '../components/DevSection'

import Head from 'next/head'

const webDevProjects = [
  {
    key: 0,
    projectTitle: 'mvplaylist',
    projectImage: mvplaylist,
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectDescriptionFull: 'Turn your Spotify playlist into a Youtube music video playlist.',
    languages: '',
    librariesAndFrameworks: '',
    githubLink: '',
  },
  {
    key: 1,
    projectTitle: 'Schieffers Keezers',
    projectImage: mvplaylist,
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectDescriptionFull: 'Turn your Spotify playlist into a Youtube music video playlist.',
    languages: '',
    librariesAndFrameworks: '',
    githubLink: '',
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
          <DevSection sectionTitle={'Web Development'} projects={webDevProjects} />
          <DevSection sectionTitle={'Algorithmic Trading'} projects={webDevProjects} />
        </div>
      </main>
    </>
  )
}