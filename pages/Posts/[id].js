import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date/Date'
import Navbar from '../../components/Navbar/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Posts.module.css'

export default function Post({ postData }) {
  return (
    <Navbar>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.cardGroupInfo}>
        <article className={styles.cardInfo}>
          <div className={styles.titleCard}>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
          </div>                      
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          <div className={styles.backToHome}>
          <Link href="/BlogList">
            <a>← Back to home</a>
          </Link>
        </div>
        </article>        
      </div>                  
    </Navbar>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }){
  const postData = await getPostData(params.id)
  return {
      props: {
          postData
      }
  }
}