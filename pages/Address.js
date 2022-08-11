import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Address() {
  return (
    <div className={styles.home}>
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Pleassure to meet you, name
          What its your  install address?
        </h1>
        <div className={styles.card}>
         <form action="/Plan" method="post" className={styles.card}>
          <label for="first">Please type in your street address</label>
          <input id="first" name="first" type="search"  placeholder='Search'/>
          <button type="submit">YES!</button>
        </form>
        <Link href="/Singup">
          <a>Step 1</a>
        </Link>   
        </div>
        


      </main>

    </div>
  )
}