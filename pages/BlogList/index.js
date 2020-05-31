import Head from 'next/head'
import Navbar from '../../components/Navbar/Navbar';
import Link from 'next/link'
import Date from '../../components/Date/Date'
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import styles from './BlogList.module.css'

export default function BlogList({ allPostsData }){
    return (
        <Navbar>
            <Head>
                <title>Blog List</title>                
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.bgBody}`}>
                <div className={styles.cardGroup}>
                    <p className={utilStyles.headingLg}>Blog List</p>
                    <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href="/Posts/[id]" as={`/Posts/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                        </small>
                        </li>
                    ))}
                    </ul>
                </div>                                
            </section>
        </Navbar>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }