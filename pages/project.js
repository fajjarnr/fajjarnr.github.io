/* eslint-disable @next/next/no-img-element */
import { CodeIcon, EyeIcon } from '@heroicons/react/solid';
import { createClient } from 'contentful';
import Link from 'next/link';
import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Project({ projects }) {
  return (
    <>
      <Title name="Project"></Title>
      <Layout>
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
              <div
                key={project.sys?.id}
                className="relative text-base mx-auto max-w-prose lg:max-w-none"
              >
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={project.fields?.image?.fields?.file?.url}
                      alt={project.fields?.image?.fields?.name}
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
                <div className="mt-8 lg:mt-8">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <h3 className="text-lg font-bold">
                      {project.fields?.name}
                    </h3>
                    <p className="text-small text-gray-500">
                      {project.fields?.description}
                    </p>
                    <div className="mt-5">
                      {project.fields?.stack?.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex mx-1 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-gray-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <Link href={project.fields?.preview}>
                    <a
                      target="_blank"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-300 text-base font-medium text-white hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:col-start-2 sm:text-sm"
                    >
                      <EyeIcon
                        className="flex-none w-5 h-5 text-white mr-2"
                        aria-hidden="true"
                      />
                      Preview
                    </a>
                  </Link>
                  <Link href={project.fields?.sourceCode}>
                    <a
                      target="_blank"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    >
                      <CodeIcon
                        className="flex-none w-5 h-5 text-gray-500 mr-2"
                        aria-hidden="true"
                      />
                      Source Code
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: 'project' });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 60,
  };
}
