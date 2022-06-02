import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Net ninjas | Home</title>
        <meta name='keywords' content='net ninjas'></meta>
      </Head>
      <div className={styles.title}>
        <h1>Home Page</h1>
        <p className={styles.text}>
          lorem epsum <br></br> 
          hi this is some dummy paragraph for text
        </p>
        <Link href={"/ninjas"}>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
