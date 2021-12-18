import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Title name="Contact"></Title>
      <Layout>
        <div className="min-h-screen bg-white">
          <main className="overflow-hidden">
            <div className="bg-warm-gray-50">
              <div className="py-24 lg:py-32">
                <div className="relative max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                  <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                    Get in touch
                  </h1>
                </div>
              </div>
            </div>
            <section
              className="relative bg-white"
              aria-labelledby="contact-heading"
            >
              <div
                className="absolute w-full h-1/2 bg-warm-gray-50"
                aria-hidden="true"
              />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <svg
                  className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
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
                        className="text-warm-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl mb-16">
                  <h2 id="contact-heading" className="sr-only">
                    Contact us
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-yellow-500 to-yellow-300 sm:px-10 xl:p-12">
                      <div
                        className="absolute inset-0 pointer-events-none sm:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={343}
                          height={388}
                          viewBox="0 0 343 388"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                            fill="url(#linear1)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear1"
                              x1="254.553"
                              y1="107.554"
                              x2="961.66"
                              y2="814.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={359}
                          height={339}
                          viewBox="0 0 359 339"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                            fill="url(#linear2)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear2"
                              x1="192.553"
                              y1="28.553"
                              x2="899.66"
                              y2="735.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                        aria-hidden="true"
                      >
                        <svg
                          className="absolute inset-0 w-full h-full"
                          width={160}
                          height={678}
                          viewBox="0 0 160 678"
                          fill="none"
                          preserveAspectRatio="xMidYMid slice"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                            fill="url(#linear3)"
                            fillOpacity=".1"
                          />
                          <defs>
                            <linearGradient
                              id="linear3"
                              x1="192.553"
                              y1="325.553"
                              x2="899.66"
                              y2="1032.66"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop
                                offset={1}
                                stopColor="#fff"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-white">
                        Contact information
                      </h3>
                      <p className="mt-6 text-base text-yellow-50 max-w-3xl">
                        You can contact me by phone or email
                      </p>
                      <dl className="mt-8 space-y-6">
                        <dt>
                          <span className="sr-only">Phone number</span>
                        </dt>
                        <dd className="flex text-base text-yellow-50">
                          <PhoneIcon
                            className="flex-shrink-0 w-6 h-6 text-yellow-200 hover:text-black"
                            aria-hidden="true"
                          />
                          <Link href="https://wa.me/+6282210293875">
                            <a
                              target="_blank"
                              className="ml-3 font-bold hover:text-black"
                            >
                              +62 822-1029-3875
                            </a>
                          </Link>
                        </dd>
                        <dt>
                          <span className="sr-only">Email</span>
                        </dt>
                        <dd className="flex text-base text-yellow-50">
                          <MailIcon
                            className="flex-shrink-0 w-6 h-6 text-yellow-200 hover:text-black"
                            aria-hidden="true"
                          />
                          <Link href="mailto:fajjarnr@gmail.com">
                            <a className="ml-3 font-bold hover:text-black">
                              fajjarnr@gmail.com
                            </a>
                          </Link>
                        </dd>
                      </dl>
                    </div>

                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.37539554042!2d109.30355687154204!3d-6.919063380323413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc5334bf004a5%3A0x953336debf5dffe5!2sPemalang%2C%20Pemalang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1639824735955!5m2!1sen!2sid"
                        allowFullScreen={true}
                        loading="lazy"
                        className="w-full h-96 border-0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout>
    </>
  );
}
