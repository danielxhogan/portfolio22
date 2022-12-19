import SideNav from '../components/SideNav'

import Head from 'next/head'
import Image from 'next/image'
import WylieTimes from '../public/wylie-times.jpg'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>danielxhogan</title>
      </Head>
      <main className={styles['main']}>
        <SideNav />
        <div className={styles['content']}>
          <Image src={WylieTimes} alt='wiley times' className={styles['profile-pic']} />
          <h1 className={styles['name']}>Daniel Hogan</h1>
          <h2>Software Developer</h2>
        </div>
      </main>
    </>
  )
}
