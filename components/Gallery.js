import Image from "next/image";
import image1 from "../public/images/image1.jpg";
import image4 from "../public/images/image4.jpg";
import image5 from "../public/images/image5.jpg";
function Gallery() {
  return (
    <section className="text-blueGray-700 ">
      <div className="container items-center px-5 py-8 mx-auto lg:px-24">
        <div className="flex flex-wrap mb-12 text-left">
          <div className="w-full mx-auto lg:w-1/3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
                src={image1}
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                a great header right here
              </h2>
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                Short length headline to use as a title.{" "}
              </h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                You're about to launch soon and must be 100% focused on your
                product.{" "}
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black "
                title="read more"
              >
                {" "}
                Read More »{" "}
              </a>
            </div>
          </div>
          <div className="w-full mx-auto lg:w-1/3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
                src={image4}
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                a great header right here
              </h2>
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                Short length headline to use as a title.{" "}
              </h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                You're about to launch soon and must be 100% focused on your
                product.{" "}
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black "
                title="read more"
              >
                {" "}
                Read More »{" "}
              </a>
            </div>
          </div>
          <div className="w-full mx-auto lg:w-1/3">
            <div className="p-6">
              <Image
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
                src={image5}
                alt="blog"
              />
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                a great header right here
              </h2>
              <h1 className="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                {" "}
                Short length headline to use as a title.{" "}
              </h1>
              <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 ">
                You're about to launch soon and must be 100% focused on your
                product.{" "}
              </p>
              <a
                href="#"
                className="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black "
                title="read more"
              >
                {" "}
                Read More »{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
