import Head from 'next/head';
import styles from '@/styles/List.module.css';
import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { lists: data }
    }
  }
const List = ({lists}) => {
    return (
      <>
      <Head>
       <title>List</title>
       <meta name="keywords" content="list" />
       </Head>
      <div>
        <h1>List</h1>
        {lists.map(list => (
          <Link className={styles.single} href={'/lists/' + list.id} key={list.id}>
              <h3>{ list.name }</h3>
          </Link>
        ))}
      </div>
      </>
    );
  }
  
  export default List;