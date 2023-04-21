import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

export default function InstructorCard({ name, image, rating, bio }) {
  // console.log("+++++++++++", image);
  return (
    <div>
      <div className="flex items-start mt-8">
        <Image
          src={image}
          width={500}
          height={500}
          alt="image not available"
          className="rounded-lg w-24 h-24"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="text-sm mx-5  sm:mx-8 space-y-3 ">
          <p className="font-semibold">{name}</p>
          <div className="flex items-center ">
            {/* <div className="flex items-center mr-6">
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
            </div> */}
            <p className="text-base font-bold">{rating}/5.5</p>
          </div>
          <div className="flex items-center text-left space-x-5 text-xs sm:text-base">
            {/* <p>6 Courses</p>
            <p>4 Reviews</p>
            <p>86 Students</p> */}

            <p className="line-clamp-2"> {bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
