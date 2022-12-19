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
      </main>
    </>
  )
}