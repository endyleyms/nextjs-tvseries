import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Plan() {
  return (
    <div className={styles.home}>
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Please select the TV plant you want to enjoy:
        </h1>
        <div>
            <div>
                <h2>Basic</h2>
                <p>Service</p>
                <h2>$30/mo</h2>

            </div>
            <div>
                <h2>Premium</h2>
                <p>Service</p>
                <h2>$50/mo</h2>
                
            </div>
            <button href="/Singup">
            <a>READY</a>
            </button>
        </div>
        <Link href="/Address">
          <a>Step 2</a>
        </Link>


      </main>

    </div>
  )
}