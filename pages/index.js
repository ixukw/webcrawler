import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/Input'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Crawler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <a href="https://ixukw.github.io">ixukw</a>
        </h1>
        WebCrawler Version 2
      </header>
      <main className={styles.main}>
        <div className={styles.form}>
          <Input />
        </div>

        <div className={styles.graph}>
          Graph
          <div id="test"></div>
        </div>
      </main>
      <footer className={styles.footer}>
        ixukw
      </footer>
    </div>
  )
  ReactDOM.render(<Button input="nice" />, document.getElementById('test'))
}
/*{}{' '}<code className={styles.code}>pages/index.js</code>*/ 