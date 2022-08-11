import Head from 'next/head'
import Link from 'next/link'
import styles from  "../styles/Home.module.scss";

export default function Singup() {
  return (
    <div className={styles.home}>
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
        FIRST LETS GET STARTED WITH THE BASICS!
        </h1>
        <div className={styles.card}>
         <form action="/Address" method="post" className={styles.card}>
          <label for="first">First name:</label>
          <input type="text" id="first" name="first" placeholder='First Name' maxlength="100"/>
          <label for="last">Last name:</label>
          <input type="text" id="last" name="last" placeholder='Last Name' />
          <button type="submit">SING UP</button>
        </form>
        <Link href="/">
          <a>Back to Home</a>
        </Link> 
        </div>
        

      </main>

    </div>
  )
}