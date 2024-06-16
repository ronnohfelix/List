import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";


export default function Home() {
  return (
    <>
     <Head>
      <title>Home</title>
      <meta name="keywords" content="list" />
      </Head>
     <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, voluptas quibusdam, doloremque, quod quae quia doloribus
        fugiat nemo ipsam atque. Quisquam voluptates, voluptas quibusdam,
        doloremque, quod quae quia doloribus fugiat nemo ipsam atque.
      </p>
      <Link href="/lists/list" className={styles.btn}>
        See List
      </Link>
     </div>
    </>
  );
}
