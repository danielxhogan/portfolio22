import mvplaylist from '../public/mvplaylist.png'
import styles from '../styles/Projects.module.css'

import SideNav from '../components/SideNav'
import DevSection from '../components/DevSection'

import Head from 'next/head'

const mvplaylistprojectDescriptionFull = '\
mvplaylist is a web app that allows a user to login to their existing Spotify account, \
view and play any song on any existing playlist, and add music videos from Youtube to \
any song. When the user logs in, they are redirected \
to a Spotify log in page. If successful, the user is redirected to the playlists page \
of mvplaylist. This page shows the user all their playlists from their Spotify \
account and allows them to select a playlist. When they select a playlist, \
they are redirected to the mvplaylist/${playlistId} page. This page \
displays all songs for the chosen playlist and lets the user play any song in the browser. \
It also queries the mvplaylist database for any videos associated with \
the playlist. When the page loads, any song with a music video is rendered \
with a YouTube icon next to it. Each song is rendered with a search icon next to it. \
When the button is clicked, a \
search query is formed out of the song title and artist name and sent to the YouTube api. \
The first five results are displayed to the user with radio buttons next to them. The user \
can select a video and click the add video button or click cancel. If the user clicks add \
video, a record is created in the database that stores \
an object with the song id and the video id. \
When the user clicks the YouTube icon next to a song, a YouTube \
video player is embedded in the page with \
the song the user chose. This way, a user can take any song in their existing Spotify \
playlist and add a YouTube music video and make a music video playlist. \
'

const webDevProjects = [
  {
    key: 0,
    projectTitle: 'mvplaylist',
    projectImage: mvplaylist,
    projectVideo: '70tjwO3O_Q4',
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectDescriptionFull: mvplaylistprojectDescriptionFull,
    languages: 'Javascript, Html, Sass',
    librariesAndFrameworks: 'Next, React, Redux, NextAuth, Mongoose, Axios',
    apis:'Spotify, Youtube',
    githubLink: 'https://github.com/danielxhogan/mvplaylist',
    siteLink: 'https://mvplaylist.vercel.app'
  },
  {
    key: 1,
    projectTitle: 'Schieffers Keezers',
    projectImage: mvplaylist,
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectDescriptionFull: 'Turn your Spotify playlist into a Youtube music video playlist.',
    languages: '',
    librariesAndFrameworks: '',
    githubLink: 'https://github.com/danielxhogan/schieffers-keezers',
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