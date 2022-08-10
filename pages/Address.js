import Head from 'next/head'
import Link from 'next/link'

//import styles from '../styles/Home.module.css'

export default function Address() {
  return (
    <div className="container">
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Pleassure to meet you, name
          What its your  install address?
        </h1>
        <form action="/Address" method="post">
          <label for="first">Please type in your street address</label>
          <input type="text" id="first" name="first" />
          <button type="submit">YES!</button>
        </form>


      </main>

    </div>
  )
}