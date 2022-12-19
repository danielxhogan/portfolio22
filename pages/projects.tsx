import SideNav from '../components/SideNav'

import Head from 'next/head'

import styles from '../styles/Projects.module.css'

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