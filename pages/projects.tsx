import mvplaylist from '../public/mvplaylist.png'
import schieffersKeezers from '../public/schieffers-keezers.png'
import cardCounterPro from '../public/card-counter-pro.png'
import taTraderDashboard from '../public/ta-trader-dashboard.png'
import taTrader from '../public/ta-trader.jpg'
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
they are redirected to the mvplaylist/${playlistId} page.\n\n This page \
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
playlist and add a YouTube music video and make a music video playlist.\n \
'

const schieffersKeezersProjectDescriptionFull = '\
Schieffers Keezers is a prototype online ordering web app that allows potential customers \
to order custom keezers from Schieffers Keezers, LLC. The customize page is broken up into \
sections for each category of component needed for a full build. Each sections shows \
all the available components for that category and the user can choose only one. The user \
can add items to their cart as long as they are logged in.\n\n If they don\'t have an account, \
they can make one by clicking the register button. As long as they enter a unique \
email, a password, and their first and last name, they can create an account. The password \
is salted and hashed using bcrypt and stored in a postgreSQL database. In order to authenticate \
a user, a jwt token is generated with a secret key, stored in an environment variable on the server, and \
the users\'s unique id. The server uses this token to authenticate requests and indicate \
which user is sending the request. With an account, a user can add items to their \
cart and view those items by clicking the cart button in the dropdown menu in the top right \
corner that only appears when a user is logged in. The cart page shows all the \
items in the users\'s cart along with the total price, allows them to delete items, and \
presents a link to the checkout page.\n\n The checkout page will show them the items in their \
cart to confirm which items they are purchasing along with the total and the users\' address. \
If the user doesn\'t have an address on file, or they are missing a freezer or a tapkit, \
a warining message is displayed. A freezer and a tapkit are the minimum required components \
for a keezer build. The user can add or edit their address from the checkout page, or from \
the account details page. There is also an admin page. The link is only visible if the user \
logged in has a user_id that matches the value stored on the server. \
If a user that is not the admin \
attempts to access the admin page, they are redirected to the home page.\n \
'

const cardCounterPRODescriptionFull = '\
Card Counter PRO is a Black Jack Game with features built in to help users learn how to count cards. \
The game constantly monitors the hand of the user and the dealer and makes a suggestion to the \
user on whether to hit, stay, double down, or split if possible. These suggestions are based on \
basic strategy which is a statistically proven method of maximizing your chance of winning any \
possible hand you can be dealt. Even when a player plays perfect basic strategy, however, they \
only decrease the house edge to 0.5, meaning you will still lose on average.\n\n In order to deal \
with this, the goal of counting cards is to ensure that even if the player loses more often \
than they win, when they win, they win bigger. Counting cards determines the times when the player \
is more likey to win or when the dealer is more likey to win. When the count is up, the player \
is more likey to win so they will bet higher. When the count is down, the player will bet lower. \
The count is based on what cards are drawn from the deck. More high cards in the deck are generally \
considered better for the player. Therefore, when high cards are drawn, the count is decreased. \
Low cards are generally considered better for the dealer. Therefore, when low cards are drawn, the \
count is increased. The game keeps track of the count, starting at 0 and increases the count by 1 \
any time a 2 - 6 value card is dealt. It decreases the count by 1 any time a 10 value card or an ace \
is drawn. \
'

const portfolioDescriptionFull = '\
This website was made with Typescript, React, and Next.js. There is an IProject Typescript interface that \
defines all the fields and types required for a project. All the data is stored in arrays of \
IProjects seperated by category. On the projects page, each array is passed into a DevSection \
component. The DevSection component takes the array and passes each element into a Project component \
that displays the title, image, and short description. Then each array is concatenated together \
using the spread operator and exported. It is imported by the project page which uses the \
getStaticPaths and getStaticProps features of Next.js to build a unique page for each project in \
the array using the ProjectPage component.\n\n Some of the projects also have a video demo. \
I made the screen recordings using OBS, editied the videos using Blender, and then uploaded \
the videos to my Youtube channel. Then I used an iframe html element to embed each video into the \
project page for that video. The video field of the IProject interface is optional. The ProjectPage \
component checks the prop it gets for a video field. If it doesn\'t find one, it just displays the image. \
'

const webDevProjects = [
  {
    key: 0,
    projectTitle: 'mvplaylist',
    projectImage: mvplaylist,
    projectVideo: '70tjwO3O_Q4',
    projectDescription: 'Turn your Spotify playlist into a Youtube music video playlist',
    projectDescriptionFull: mvplaylistProjectDescriptionFull,
    languages: 'Javascript, HTML, SASS',
    librariesAndFrameworks: 'Next, React, Redux, NextAuth, Mongoose',
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
  },
  {
    key: 2,
    projectTitle: 'Card Counter PRO',
    projectImage: cardCounterPro,
    projectDescription: 'Black Jack simulator that teaches you to count cards',
    projectDescriptionFull: cardCounterPRODescriptionFull,
    languages: 'Javascript, HTML, CSS',
    librariesAndFrameworks: 'Bootstrap',
    githubLink: 'https://github.com/danielxhogan/card-counter-pro',
    siteLink: 'https://danielxhogan.github.io/card-counter-pro/'
  },
  {
    key: 3,
    projectTitle: 'Portfolio',
    projectImage: mvplaylist,
    projectDescription: 'My portfolio website',
    projectDescriptionFull: portfolioDescriptionFull,
    languages: 'Typescript, HTML, CSS',
    librariesAndFrameworks: 'Next, React',
    githubLink: 'https://github.com/danielxhogan/portfolio22',
    siteLink: 'https://mvplaylist.vercel.app'
  }
]


const taTraderDashboardDescriptionFull = '\
There are three main parts to the TA Trader Dashboard. The first part is a series of python \
scripts that use a combination of web scraping and api requests to collect financial data and \
store it to a PostgreSQL database. The scripts are executed using \
cronjob and the database is updated periodically. The scripts look for news about stocks that can \
potentially cause a significant price shift such as earnings reports, news of mergers & acquisitions, \
publically reported insider trading, politician buys and sells, and new ratings. They look for news \
that breaks before market open or after market close. \
Then they takes the most significant news events and \
determine a sentiment score for the stock by taking all recent news articles about stock queried \
from the News api and sending them to the Google Cloud Language api. \
This helps determine if many people feel strongly about the stock.\n\n \
The second part of the TA Trader Dashboard are the trading bots. They are Python bots that connect \
to the Alpace Trade Api. Alpaca is a broker that provides a public api for account holders \
to perform actions on their account. the bots can get stock price data down to the minute, check \
current portfolio holdings, and place buy, sell, or close signals to open or close positions on stocks. \
Some of the bots use simple technical analysis while looping through universes of stocks looking for \
technical setups to indicate signals to open or close positions. Some of them use news data gathered \
by the data scripts. Some use a combination of both. They use the stocks detected by news sentiment \
to get the initial universe of stocks to trade, and then look for technical setups on those stocks to \
initiate a trade.\n\n The last part of the TA Trader Dashboard is the frontend web app that displays data \
about the app. The Home page displays all the tables of data gathered in the database. The Search page \
allows the user to enter a stock ticker and search for data about that stock. The search feature uses \
many of the same methods as the data scripts. It will search the News Api, calcluate sentiment, search \
for any news of earnings reports, insider trading, ratings, or any other information that might be used \
make trading decisions about the stock. It also includes an interactive stock chart for the stock using \
the Trading View cdn.\n \
'

const taTraderDescriptionFull = '\
Ta Trader is a python bot that can automate day trades of stocks and foreign exchange currencies. \
It starts with the daily atr filter. This is a python script that reads in a csv file with 1500 stock \
tickers. It then queries daily open, high, low, and close price data \
for the last 15 days from the Alpaca Trade api which it recieves as a Pandas dataframe. Alpaca is a stock \
broker that provides a public api to it\'s users. It then passes \
this data into the TA Lib library which calculates the Average Trading Range(ATR). This value will be used \
to determine whether to trade the stock at all and used to determine a closing price target if a position \
is opened on that stock. Then a filter will add the stock to an output list if the stock has a high enough \
ATR, a low enough price, and a high enough volume. This list is output to another csv file which is read in \
by the main trading script.\n\n The main trading script is run while the market is trading live and constantly \
monitors each stock in the list. There are two loops, the main trading loop, and the loop that iterates over \
each stock. At the beginning of the main trading loop, it checks the time, \
the total portolio value, and the current portfolio holdings. The time and portfolio value can be usesd to \
automatically shut off the script. \
The portfolio holdings are used so when it\'s looping over the stocks it will know for each stock whether \
 it already owns that stock. \
Then it starts looping over the stocks. For each stock it quries price data down to the minute. It passes that \
data into TA Lib to calcluate various technical indicators. Then it passes that data to a signal function. \
This function will either return a buy, sell, or close signal. If the stock is not already in the portfolio, \
the function will check the indicators. If they indicate the price of the \
stock will go up, it will buy, if they indicate the price will go down, it will short sell. If the stock is \
already in the portfolio, it check the current price and the price the stock was bought at. If the current \
profit or loss is at a certain percentage of the ATR, the script will close the position. \
This signal is used to generate a network request that is sent to the Alpaca Trade api along with the api key \
for my account and this way the script can make trading decisions automatically on behalf of my account. \
I also adapted the script to trade foreign exchange currencies using Oanda as the broker and connecting \
to the Oanda api. \
'

const algoTradingProjects = [
  {
    key: 4,
    projectTitle: 'TA Trader Dashboard',
    projectImage: taTraderDashboard,
    projectDescription: 'Full Stack trading system',
    projectDescriptionFull: taTraderDashboardDescriptionFull,
    languages: 'Python, Javascript, HTML, CSS, SQL',
    librariesAndFrameworks: 'Flask, Pandas, Selenium, Beautiful Soup, psycopg2, React, React Router, Express, PG',
    apis: 'Google Cloud Language, Alpaca Trade, Quiver Quant, Newsapi',
    githubLink: 'https://github.com/danielxhogan/ta-trader-dashboard',
  },
  {
    key: 5,
    projectTitle: 'TA Trader',
    projectImage: taTrader,
    projectDescription: 'Trading bot makes buy/sell/close trading decisions using Technical Analysis indicators',
    projectDescriptionFull: taTraderDescriptionFull,
    languages: 'Python',
    librariesAndFrameworks: 'Pandas, Numpy, TA Lib',
    apis: 'Alpaca Trade, Oanda Trade, Yahoo Finance',
    githubLink: 'https://github.com/danielxhogan/ta-trader',
  }
]

export const allProjects = [
  ...webDevProjects,
  ...algoTradingProjects
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
          <DevSection sectionTitle={'Algorithmic Trading'} projects={algoTradingProjects} />
        </div>
      </main>
    </>
  )
}