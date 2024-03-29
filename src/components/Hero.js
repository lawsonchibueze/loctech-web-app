import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero({ image, title, subtitle, button }) {
  return (
    <div className="px-3 py-8 bg-[#EEF0F4]  dark:bg-gray-700 dark:text-white flex flex-col-reverse   sm:px-20  sm:flex-row sm:items-center ">
      <div className="text-start  flex flex-col flex-1">
        <h1 className="text-2xl font-bold my-4 sm:text-4xl">{title}</h1>

        <p className="text-lg sm:text-2xl font-light	">{subtitle}</p>
        <div>
          <Link href="https://forms.gle/EtKMGSqHMeEpQmRd6">
            <button className="py-4 px-10 my-4 bg-[#FF2883] sm:text-xl font-medium rounded-md text-white cursor-pointer">
              {button}
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full flex items-center flex-1 justify-center">
        <Image
          src={image}
          width={400}
          height={300}
          alt="pexels-cottonbro-studio-5083408.png"
          className="  object-cover rounded-lg w-full"
          priority={true}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
      </div>
    </div>
  );
}
