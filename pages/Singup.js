import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from  "../styles/Home.module.scss";
import Address from './Address';

export default function Singup() {
  const router = useRouter()
  const [form, setForm]= useState({
    first: '',
    last:''
  })
  const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name] : event.target.value
    })
    console.log (form)
  }
  const submit = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + form.first + ' ' + form.last)
    router.push('/Address')
    
}



  return (
    <div className={styles.home}>
      <Head>
        <title>TV SERIES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
        FIRST LET'S GET STARTED WITH THE BASICS!
        </h1>
        <div className={styles.card}>
         <form method="post" className={styles.card} onSubmit={submit}>
          <label for="first">First name:</label>
          <input type="text" id="first" name="first" placeholder='First Name' onChange={handleInputChange}/>
          <label for="last">Last name:</label>
          <input type="text" id="last" name="last" placeholder='Last Name' onChange={handleInputChange}/>
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