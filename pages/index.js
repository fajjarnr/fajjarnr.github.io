import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fajar Nur Rohman</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="google-site-verification"
          content="i5XC8tWxae3ocQwlybiLBod5yysgz-kX5Nv5fJbwNQo"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta name="title" content="Fajar Portofolio" />
        <meta name="description" content="Portofolio Fajar Nur Rohman" />
        <meta property="og:title" content="Fajar Portofolio" />
        <meta property="og:description" content="Portofolio Fajar Nur Rohman" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fajar.tech" />
        <meta property="og:description" content="Portofolio Fajar Nur Rohman" />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:site_name" content="Jual Beli" />
        <meta property="og:image" content="https://www.fajar.tech/logo.svg" />
        <meta
          property="og:image:secure_url"
          content="https://www.fajar.tech/logo.svg"
        />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.fajar.tech/" />
        <meta property="twitter:title" content="Fajar Portofolio" />
        <meta
          property="twitter:description"
          content="Portofolio Fajar Nur Rohman"
        />
        <meta
          property="twitter:image"
          content="https://www.fajar.tech/logo.svg"
        />
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
