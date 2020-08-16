import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oy!</title>
      </Head>
      <main>
        <h1>Hey, world! I'm Sam.</h1>
      </main>
    </div>
  )
}
