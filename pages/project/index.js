/* eslint-disable @next/next/no-img-element */
import { createClient } from "contentful";
import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

export default function Project({ projects }) {
  console.log("projects :>> ", projects);

  return (
    <>
      <Title name="Project"></Title>
      <section className="py-6">
        <Navbar></Navbar>
      </section>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Project
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            List All My Project
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.sys?.id}
              href={`/project/` + project.fields?.slug}
            >
              <a className="relative group hover:bg-white hover:opacity-80">
                <div className="aspect-w-4 aspect-h-3 rounded-lg shadow-lg overflow-hidden bg-gray-100">
                  <img
                    src={project.fields?.image?.fields?.file?.url}
                    alt={project.fields?.image?.fields?.name}
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 items-center text-center font-medium text-gray-900">
                  <h3 className="inset-0 text-lg capitalize">
                    {project.fields?.name}
                  </h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 10,
  };
}
