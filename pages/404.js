import Link from "next/link";
import router from "next/router";
import { useEffect, useState } from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";

export default function NotFound() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preCount) => --preCount);
    }, 1000);

    count === 0 && router.back();

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <Link href="/">
            <a className="inline-flex">
              <span className="sr-only">Logo</span>
              <Image className="h-8 w-auto sm:h-10" src={Logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-yellow-300 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-yellow-300 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-yellow-300">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="text-base font-medium text-yellow-300 hover:text-yellow-500"
              >
                Go back {count} <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
