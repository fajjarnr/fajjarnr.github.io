import Head from 'next/head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fajar Nur Rohman 👋</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
