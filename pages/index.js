import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Home() {
  return (
    <Layout>
      <Title name="Home" />
      <Hero />
    </Layout>
  );
}
