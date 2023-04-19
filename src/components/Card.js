import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Card({ title, btnName, image, to }) {
  return (
    <div className="flex w-full dark:bg-gray-500 bg-[#EDEDED] dark:text-white p-5 rounded-lg my-4 items-center">
      <div>
        <p className="text-[#FF2883] font-bold">New Certificates</p>

        <h3 className="text-lg font-semibold sm:text-2xl mr-2	">{title}</h3>

      <Link href={to}>
      <button className="p-2 sm:px-6 sm:py-2 my-4 bg-[#FF2883] rounded-md text-white">
          {btnName}
        </button>
      </Link>
      </div>

      <div>
        <Image
          src={image}
          width={300}
          height={300}
          className="rounded-lg h-auto"
          alt="Image not available"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
      </div>
    </div>
  );
}
