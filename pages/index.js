import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Project from "../parts/Project";
import CTA from "../parts/CTA";

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
        <section className="bg-white">
          <Project></Project>
        </section>
        <section className="bg-indigo-700">
          <CTA></CTA>
        </section>
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
}
