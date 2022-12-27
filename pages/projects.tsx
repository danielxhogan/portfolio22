import mvplaylist from '../public/mvplaylist.png'
import schieffersKeezers from '../public/schieffers-keezers.png'
import styles from '../styles/Projects.module.css'

import SideNav from '../components/SideNav'
import DevSection from '../components/DevSection'

import Head from 'next/head'

const mvplaylistProjectDescriptionFull = '\
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

const schieffersKeezersProjectDescriptionFull = '\
Schieffers Keezers is a prototype online ordering web app that allows potential customers \
to order custom keezers from Schieffers Keezers, LLC. The customize page is broken up into \
sections for each category of component needed for a full build. Each sections shows \
all the available components for that category and the user can choose only one. The user \
can add items to their cart as long as they are logged in. If they don\'t have an account, \
they can make one by clicking the register button. As long as they enter a unique \
email, a password, and their first and last name, they can create an account. The password \
is salted and hashed using bcrypt and stored in a postgreSQL database. In order to authenticate \
a user, a jwt token is generated with a secret key, stored in an environment variable on the server, and \
the users\'s unique id. The server uses this token to authenticate requests and indicate \
which user is sending the request. With an account, a user can add items to their \
cart and view those items by clicking the cart button in the dropdown menu in the top right \
corner that only appears when a user is logged in. The cart page shows all the \
items in the users\'s cart along with the total price, allows them to delete items, and \
presents a link to the checkout page. The checkout page will show them the items in their \
cart to confirm which items they are purchasing along with the total and the users\' address. \
If the user doesn\'t have an address on file, or they are missing a freezer or a tapkit, \
a warining message is displayed. A freezer and a tapkit are the minimum required components \
for a keezer build. The user can add or edit their address from the checkout page, or from \
the account details page. There is also an admin page. The link is only visible if the user \
logged in has a user_id that matches the value stored on the server. \
If a user that is not the admin \
attempts to access the admin page, they are redirected to the home page. \
'

const webDevProjects = [
  {
    key: 0,
    projectTitle: 'mvplaylist',
    projectImage: mvplaylist,
    projectVideo: '70tjwO3O_Q4',
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist.',
    projectDescriptionFull: mvplaylistProjectDescriptionFull,
    languages: 'Javascript, HTML, SASS',
    librariesAndFrameworks: 'Next, React, Redux, NextAuth, Mongoose, Axios',
    apis:'Spotify, Youtube',
    githubLink: 'https://github.com/danielxhogan/mvplaylist',
    siteLink: 'https://mvplaylist.vercel.app'
  },
  {
    key: 1,
    projectTitle: 'Schieffers Keezers',
    projectImage: schieffersKeezers,
    projectVideo: 'PcbKr5OWtM4',
    projectDescription: 'Ecommerce web app for ordering a custom built keezer from Schieffers Keezers, LLC',
    projectDescriptionFull: schieffersKeezersProjectDescriptionFull,
    languages: 'Javascript, HTML, CSS, SQL',
    librariesAndFrameworks: 'React, React Router, Express, PG, jsonWebTokens, Bcrypt, Bootstrap',
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