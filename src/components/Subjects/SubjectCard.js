import React from "react";
import SubjectCardItem from "./SubjectCardItem";
import Image from "next/image"
import Link from "next/link"
export default function SubjectCard({ title, param, img  }) {
  return (
    <Link href={`/courses?category=${param}`}>
    <div className="relative my-4 cursor-pointer">
      <Image
        src={img}
        alt="Image"
        width={300}
        height={300}
        placeholder="blur"
        className="w-full h-80 rounded-lg rounded-b-lg object-cover	"
        blurDataURL="/spinner.svg"
      />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="absolute bottom-5 left-0 w-full">
        <div className="flex justify-center items-center h-16 bg-black bg-opacity-5">
          <h1 className="text-xl font-bold text-center text-white"> {title}</h1>
        </div>
      </div>
    </div>
  </Link>
  );
}
