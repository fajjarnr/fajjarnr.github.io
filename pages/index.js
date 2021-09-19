import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fajar Nur Rohman</title>
        <meta name="description" content="Portofolio Fajar Nur Rohman" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <section>
          <Hero></Hero>
        </section>
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}
