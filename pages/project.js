/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import data from "../constants/project.json";

export default function Project() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <Title name="Project"></Title>
      <section className="py-6">
        <Navbar></Navbar>
      </section>
      <div className="bg-white">
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
            {data.map((product) => (
              <div key={product.id} className="relative group">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="object-center object-cover"
                  />
                  <div
                    className="flex items-end opacity-0 p-4 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <button className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                  <h3>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
}
