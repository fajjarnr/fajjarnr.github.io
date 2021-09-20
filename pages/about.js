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
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
        laudantium fugit, laborum quidem minus saepe eveniet sit accusantium
        enim iste pariatur ducimus repudiandae, perferendis, consectetur hic ea
        eum et sed.
      </h1>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
}
