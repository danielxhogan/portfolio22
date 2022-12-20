import SideNav from '../components/SideNav'
import DevSection from '../components/DevSection'

import Head from 'next/head'

import styles from '../styles/Projects.module.css'
import mvplaylist from '../public/mvplaylist.png'

export default function Projects() {

  const webDevProjects = [
    {
      key: 0,
      projectTitle: 'mvplaylist',
      projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
      projectImage: mvplaylist
    }
  ]

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
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className={styles['dev-section']}>
            <h2>Web Dev</h2>
          </div>
          <div className={styles['dev-section']}>
            <h2>Trading</h2>
          </div>
          <div className={styles['dev-section']}>
            <h2>Desktop Dev</h2>
          </div>
        </div>
      </main>
    </>
  )
}