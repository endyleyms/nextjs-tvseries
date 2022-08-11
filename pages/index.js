import Head from 'next/head'
import Link from 'next/link'
import styles from  "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head className={styles.__header}>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to TV SERIES
        </h1>

        <p className="description">
          Are you ready to  enjoy the TV Series?
        </p>
        <Link href="/Singup">
          <a>LETS DO IT!!</a>
        </Link>

      </main>

    </div>
  )
}
