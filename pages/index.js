import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">TV SERIES</a>
        </h1>

        <p className="description">
          Are you ready to  enjoy the TV Series?
        </p>
        <button>LETS DO IT!!</button>

      </main>

    </div>
  )
}
