import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";

export default function About() {
  return (
    <>
      <Title name="About"></Title>
      <div className="py-6">
        <Navbar></Navbar>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
}
