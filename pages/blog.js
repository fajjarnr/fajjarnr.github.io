/* eslint-disable @next/next/no-img-element */
import { createClient } from 'contentful';
import Link from 'next/link';
import Layout from '../components/Layout';
import Title from '../components/Title';
import formatDate from '../helpers/formatDate';

export default function Blog({ blogs }) {
  return (
    <>
      <Title name="Blog"></Title>
      <Layout>
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                List All My Blog
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {blogs.map((post) => (
                <div
                  key={post.sys.id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.fields?.image?.fields?.file?.url}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <Link
                          href={
                            `/category/` + post.fields?.category?.fields?.slug
                          }
                        >
                          <a className="hover:underline">
                            {post.fields?.category?.fields?.name}
                          </a>
                        </Link>
                      </p>
                      <Link href={`/blog/` + post.fields?.slug}>
                        <a className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.fields?.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.fields?.description.slice(0, 150)}
                          </p>
                        </a>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a>
                          <span className="sr-only">
                            {post.fields?.author?.fields?.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={
                              post.fields?.author?.fields?.image?.fields?.file
                                ?.url
                            }
                            alt={post.fields?.author?.fields?.name}
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <Link href="/about">
                            <a className="hover:underline">
                              {post.fields?.author?.fields?.name}
                            </a>
                          </Link>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.fields?.date}>
                            {formatDate(post.fields?.date)}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

  const res = await client.getEntries({ content_type: 'blog' });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 60,
  };
}
