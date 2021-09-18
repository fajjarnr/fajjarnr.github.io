import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fajar Nur Rohman</title>
        <meta name="description" content="Portofolio Fajar Nur Rohman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <Hero></Hero>
        </section>
        <section className="bg-indigo-900">
          <Footer></Footer>
        </section>
      </main>
    </div>
  );
}
