import Image from "next/image";

export default function page() {
  return (
    <main>
      {/* Blog Article */}
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mt-40 mx-auto">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold md:text-3xl dark:text-white">
                Lorem ipsum
              </h1>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                omnis quisquam placeat itaque fugit sapiente similique aliquam.
                Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
                facere, voluptatem maxime dolorum
              </p>
            </div>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              omnis quisquam placeat itaque fugit sapiente similique aliquam.
              Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
              facere, voluptatem maxime dolorum
            </p>

            <figure>
              <Image
                className="w-full object-cover rounded-xl"
                src="/logo/logo.svg"
                width={700}
                height={700}
                alt="Blog Image"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                omnis quisquam placeat itaque fugit sapiente similique aliquam.
                Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
                facere, voluptatem maxime dolorum
              </figcaption>
            </figure>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              omnis quisquam placeat itaque fugit sapiente similique aliquam.
              Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
              facere, voluptatem maxime dolorum
            </p>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Lorem ipsum{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                href="#"
              >
                Lorem ipsum
              </a>{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              omnis quisquam placeat itaque fugit sapiente similique aliquam.
              Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
              facere, voluptatem maxime dolorum
            </p>

            <blockquote className="text-center p-4 sm:px-7">
              <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                omnis quisquam placeat itaque fugit sapiente similique aliquam.
                Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
                facere, voluptatem maxime dolorum
              </p>
              <p className="mt-5 text-gray-800 dark:text-neutral-200">
                Lorem ipsum
              </p>
            </blockquote>

            <figure>
              <Image
                className="w-full object-cover rounded-xl"
                src="/logo/logo.svg"
                width={700}
                height={700}
                alt="Blog Image"
              />
              <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                Lorem ipsum
              </figcaption>
            </figure>

            <div className="space-y-3">
              <h3 className="text-2xl font-semibold dark:text-white">
                Lorem ipsum
              </h3>

              <p className="text-lg text-gray-800 dark:text-neutral-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                omnis quisquam placeat itaque fugit sapiente similique aliquam.
                Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
                facere, voluptatem maxime dolorum
              </p>
            </div>

            <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
              <li className="ps-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                omnis quisquam placeat itaque fugit sapiente similique aliquam.
                Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
                facere, voluptatem maxime dolorum{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                  href="#"
                >
                  Lorem ipsum
                </a>{" "}
                Lorem ipsum
              </li>
              <li className="ps-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                omnis quisquam placeat itaque fugit sapiente similique aliquam.
                Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
                facere, voluptatem maxime dolorum{" "}
                <a
                  className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                  href="#"
                >
                  Lorem ipsum
                </a>
                .
              </li>
            </ul>

            <p className="text-lg text-gray-800 dark:text-neutral-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              omnis quisquam placeat itaque fugit sapiente similique aliquam.
              Est incidunt eveniet molestiae temporibus? Rem quia excepturi id
              facere, voluptatem maxime dolorum
            </p>

            <div>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Lorem ipsum
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Lorem ipsum
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Lorem ipsum
              </a>
              <a
                className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="#"
              >
                Lorem ipsum
              </a>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
    </main>
  );
}
