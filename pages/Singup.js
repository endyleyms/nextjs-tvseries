import Head from 'next/head'
//import styles from '../styles/Home.module.css'

export default function Singup() {
  return (
    <div className="container">
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        FIRST LETS GET STARTED WITH THE BASICS!
        </h1>
        <form action="/Address" method="post">
          <label for="first">First name:</label>
          <input type="text" id="first" name="first" />
          <label for="last">Last name:</label>
          <input type="text" id="last" name="last" />
          <button type="submit">SING UP</button>
        </form>

      </main>

    </div>
  )
}