import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";

export default function InstructorCard({ name, image }) {
  return (
    <div className="sm:mx-20 px-4 my-10">
      
      <div className="flex items-start mt-8">
        <div>
          <Image
            src={image}
            width={200}
            height={200}
            alt="image not available"
            className="rounded-lg "
          />
        </div>
        <div className="text-sm mx-5  sm:mx-8 space-y-3 ">
          <p className="font-semibold">{name}</p>
          <div className="flex items-center ">
            <div className="flex items-center mr-6">
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
              <AiOutlineStar className="text-[#FF2883] text-lg" />
            </div>
            <p className="text-base font-bold"> 2.0/5.5</p>
          </div>
          <div className="flex items-center text-center space-x-5 text-xs sm:text-base">
            <p>6 Courses</p>
            <p>4 Reviews</p>
            <p>86 Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}
