import Head from "next/head";

export default function Title({ name }) {
  return (
    <Head>
      <title>{name} ~ Fajar Nur Rohman</title>
      <meta name="description" content="Portofolio Fajar Nur Rohman" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
