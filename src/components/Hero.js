import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="px-3 py-8 bg-[#EEF0F4] sm:px-20 sm:flex sm:flex-row sm:items-center ">
      <div className="text-start  flex flex-col flex-1">
        <h1 className="text-2xl font-bold my-4 sm:text-4xl">
          Scholarship 2023{" "}
        </h1>

        <p className="text-lg sm:text-2xl font-light	">
          Get Up to 100% Full Scholarship with Loctech{" "}
        </p>
        <div>
          <button className="py-4 px-10 my-4 bg-[#FF2883] sm:text-xl font-medium rounded-md text-white cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>

      <div className="w-full flex items-center flex-1 justify-center">
        <Image
          src="/pexels-cottonbro-studio-5083408.png"
          width={500}
          height={300}
          alt="pexels-cottonbro-studio-5083408.png"
          className="  object-cover rounded-lg h-auto w-auto"
        />
      </div>
    </div>
  );
}
