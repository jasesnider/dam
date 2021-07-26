import Head from 'next/head';
import { Nav } from '../components';
import Assets from '../containers/assets/Assets';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Asset Management System</title>
        <meta name="description" content="A simple Digital Asset Management System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <h1 className={styles.title}>
          Digital Asset Management System
        </h1>
        <Assets />      
      </main>

      <footer className={styles.footer}>
        
          2021 Digital Asset Management System. All Rights Reserved.
      
      </footer>
    </div>
  )
};
