import React from "react";
import Image from "next/image";
export default function SubjectCard({ title, img }) {
  return (
    <div class="relative my-4 cursor-pointer">
      <Image
        src={img}
        alt="Image"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL="/"
        className="w-full h-80 rounded-lg rounded-b-lg object-cover	"
      />
      <div class="absolute inset-0">
        <div class="h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div class="absolute bottom-5 left-0 w-full">
        <div class="flex justify-center items-center h-16 bg-black bg-opacity-5">
          <h1 class="text-xl font-bold text-white"> {title}</h1>
        </div>
      </div>
    </div>
  );
}
