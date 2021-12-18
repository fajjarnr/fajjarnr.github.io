/* eslint-disable @next/next/no-img-element */
import { CameraIcon, EyeIcon, CodeIcon } from '@heroicons/react/solid';
import { createClient } from 'contentful';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Title from '../../components/Title';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function ProjectDetails({ project }) {
  const { category, name, description, image, preview, sourceCode, stack } =
    project.fields;

  return (
    <Layout>
      <Title name={name}></Title>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">
                {category?.fields?.name ?? ''}
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {name}
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={image?.fields?.file?.url}
                      alt={image?.fields?.description}
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      {image?.fields?.description ?? ''}
                    </span>
                  </figcaption>
                </figure>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <Link href={preview}>
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
                  <Link href={sourceCode}>
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
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">{description}</p>
                <div className="mt-5">
                  <h3 className="text-xl mb-2 font-medium">Tech Stack :</h3>
                  {stack?.map((item, index) => (
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
          </div>
        </div>
      </div>
    </Layout>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'project',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug,
  });

  return {
    props: {
      project: items[0],
    },
    revalidate: 30,
  };
}
