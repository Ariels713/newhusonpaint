import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroImage.jpg";
function MainHero() {
  return (
    <section className="text-blueGray-700 ">
      <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          <Image src={heroImage} alt="Picture of Paint splatter" />
        </div>
        <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            Paiting With Care
          </h2>
          <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
            {" "}
            New Hudson Paint and Finishes
          </h1>
          <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700 ">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex flex-col justify-left lg:flex-row">
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-yellow-400 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
              {" "}
              Show me{" "}
            </button>
            <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
              {" "}
              It will take you to candy shop. <br className="hidden lg:block" />
              <a
                href="#"
                className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black "
                title="read more"
              >
                {" "}
                Read more about it »{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
