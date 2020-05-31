import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Navbar>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <section className={styles.intro}>
        <div className={styles.content}>
          <h1>Hi, My name is Muhammad Alfi</h1>
          <p>Im a front end dev</p>
        </div>        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9fcfb" fillOpacity="1" d="M0,32L40,69.3C80,107,160,181,240,181.3C320,181,400,107,480,90.7C560,75,640,117,720,149.3C800,181,880,203,960,186.7C1040,171,1120,117,1200,90.7C1280,64,1360,64,1400,64L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </section>
    </Navbar>
  )
}
